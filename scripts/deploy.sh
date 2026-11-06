#!/usr/bin/env bash
# Build the site and upload dist/ to the Kualo web root.
#
# Needs a .env file (not committed) with:
#   DEPLOY_METHOD=rsync          # or "lftp" if SSH isn't enabled on the Kualo plan
#   DEPLOY_HOST=montague.ldn.kualo.net   # the server name on its TLS certificate (ftp.bitmoremedia.com fails the check)
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
# Read KEY=value lines literally (no shell expansion), so passwords can contain any character
while IFS= read -r line || [[ -n "$line" ]]; do
  if [[ "$line" =~ ^[A-Z_]+= ]]; then export "$line"; fi
done < .env

DRY_RUN=""
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

# Anything in the web root that isn't part of this site and must survive a deploy. Taken from the
# backup of public_html made on 4 November 2026: old apps, demos and personal sites.
# Directories end in "/". /apps is shared: the old apps are listed, our pages (src/pages/apps/) deploy.
# The old Gatsby build files aren't listed, so the first deploy removes them.
EXCLUDES=(
  .errors/ .well-known/ cgi-bin/
  apps/prem4cast/ apps/sprogger/ apps/taxidents/ apps/temp/
  api/ assets/ contacts/ css/ dcg/ demo/ fonts/ football-data.events/
  g-r-getmarried/ g-r-mega-trip/ g-r-megatrip/ gem-russ-getmarried-legacy/ img/ js/ megatrip/
  index_kualoHoldingPage.php
)

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
    # --env-password reads LFTP_PASSWORD, keeping the password out of the process list
    LFTP_PASSWORD="$DEPLOY_PASSWORD" lftp --env-password -u "$DEPLOY_USER" -e "set ftp:ssl-force true; $mirror; quit" "$DEPLOY_HOST"
    ;;
  *)
    echo "Unknown DEPLOY_METHOD: $DEPLOY_METHOD" >&2
    exit 1
    ;;
esac
