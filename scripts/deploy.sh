#!/usr/bin/env bash
# Build the site and upload dist/ to the Kualo web root.
#
# Needs a .env file (not committed) with:
#   DEPLOY_METHOD=rsync          # or "lftp" if SSH isn't enabled on the Kualo plan
#   DEPLOY_HOST=example.kualo.net
#   DEPLOY_USER=cpaneluser
#   DEPLOY_PATH=public_html
#   DEPLOY_PORT=22               # rsync only (optional)
#   DEPLOY_PASSWORD=...          # lftp only
#
# Usage: npm run deploy            (or: npm run deploy -- --dry-run)

set -euo pipefail
cd "$(dirname "$0")/.."

if [[ ! -f .env ]]; then
  echo "Missing .env – see the top of scripts/deploy.sh" >&2
  exit 1
fi
set -a; source .env; set +a

DRY_RUN=""
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

# Anything in the web root that isn't ours and must survive a deploy (checked against the backup)
EXCLUDES=(cgi-bin .well-known)

npm run build

case "${DEPLOY_METHOD:-rsync}" in
  rsync)
    args=(-avz --delete)
    for e in "${EXCLUDES[@]}"; do args+=(--exclude "$e"); done
    [[ -n "$DRY_RUN" ]] && args+=(--dry-run)
    rsync "${args[@]}" -e "ssh -p ${DEPLOY_PORT:-22}" dist/ "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/"
    ;;
  lftp)
    excludes=""
    for e in "${EXCLUDES[@]}"; do excludes+=" --exclude-glob $e"; done
    mirror="mirror -R --delete --verbose${DRY_RUN:+ --dry-run}$excludes dist/ $DEPLOY_PATH/"
    lftp -u "$DEPLOY_USER,$DEPLOY_PASSWORD" -e "set ftp:ssl-force true; $mirror; quit" "$DEPLOY_HOST"
    ;;
  *)
    echo "Unknown DEPLOY_METHOD: $DEPLOY_METHOD" >&2
    exit 1
    ;;
esac
