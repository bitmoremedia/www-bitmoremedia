# Rebuild follow-ups

What's still needed to finish the new site. It's built from the two homepage PDFs. Anything I didn't have has a stand-in, listed below. See `REBUILD.md` for the overall plan.

## From you / the designer

### Content and details
- [ ] **Email address**: the design has a `[your email address]` placeholder. I've used `getintouch@bitmoremedia.com` from the old site (`src/data/site.ts`).
- [ ] **Social links**: Instagram, LinkedIn and TikTok URLs. The footer's "Follow us" column is hidden until at least one URL is filled in (`src/data/site.ts`).
- [ ] **Company details** for the footer (name, number, registered office), if it's a limited company. Left out for now.
- [ ] **Privacy policy** text. `/privacy/` is a placeholder page.
- [ ] **Copy review**: all the copy is from the PDF. The only change is in Connect, where "Fill in the form or email us at…" became "Drop us an email…" because there's no form.

### Design
- [ ] **Connect section without the form**: I've swapped the form for large email and phone links. The designer should rework this section properly.
- [ ] **Fonts**: the real typefaces and licences. The stand-ins are free fonts bundled with the site via Fontsource: **Montserrat** (800/900) for headings and **Jost** for body text (it's close to Futura). To swap them, change `--font-display` and `--font-sans` in `src/styles/global.css` and the imports in `src/layouts/BaseLayout.astro`.
- [ ] **Colours**: sampled from the PDF pixels (`src/styles/global.css`). Ask the designer for the exact hex values, as the PDF export may have shifted them slightly.
- [ ] **Mobile nav**: the mockup only shows the Connect button on mobile, so that's what's built. Do we want a menu for the section links?
- [ ] **Hero images on mobile**: the mockup shows one image, so only the first tile shows. Should mobile get a carousel or rotation through all eight instead?
- [ ] **"What we do" heading**: it's in the PDF text layer but not visible in the design. I've included it as a screen-reader-only heading.
- [ ] **Service pages**: designs for Branding Hub (Brand Menu and Brand Bar), Campaign Room, Social Studio and Dev Lab. Each one has a placeholder page at the moment, e.g. `/branding-hub/`.
- [ ] **Hover and focus states**: not in the PDF, so I made up simple ones (buttons swap colour, links get underlined).
- [ ] **Favicon and social share image**: I made a quick "M." favicon (`public/favicon.svg`). Needs a proper one, plus an Open Graph image (1200×630).

### Assets
All the images are cropped straight out of the PDF, which is a flattened raster at 2× resolution. That's fine for a preview but slightly soft, and none of them have transparent backgrounds.
- [ ] **Hero tile photos** (8), originals at full resolution. Are they licensed stock? Where did they come from?
- [ ] **Value card illustrations** (ladybird, droplet, brain), ideally as transparent PNGs.
- [ ] **Phone photo** for the Connect section.
- [ ] **Client logos** as SVGs. Also confirm we have permission to show each brand. The current ones are traced from the PDF (`src/assets/clients/`).

## Hosting / deploy (Kualo)
- [ ] **Access**: cPanel login and the SFTP/SSH host and username. Is SSH enabled? (That decides `rsync` or `lftp` in `scripts/deploy.sh`.)
- [ ] **Back up the current `public_html`** before the first deploy, including the hand-uploaded `.htaccess`.
- [ ] **Check what else is in `public_html`** (e.g. an `/apps` folder, verification files, `.errors/`). The deploy deletes anything not in the build unless it's added to `EXCLUDES` in `scripts/deploy.sh`. Always run `npm run deploy -- --dry-run` first.
- [ ] **Confirm Kualo's Apache allows the `.htaccess` directives** used (`mod_rewrite`, `mod_headers` incl. `<If>`, `mod_expires`). Check this on a staging subdomain first if possible.
- [ ] **Old-page redirects**: `public/.htaccess` maps the 2018 pages onto the new ones. Check you're happy with where they point. I dropped the old `/app → /apps` redirect, as nothing in the old site used it.

## Technical to-dos
- [ ] Analytics: Cloudflare Web Analytics (free, cookieless) or GA4 with a consent banner. The old Universal Analytics tag has gone.
- [ ] `sitemap.xml` (`@astrojs/sitemap`) and `robots.txt`.
- [ ] `Organization` structured data (JSON-LD).
- [ ] Accessibility pass: check contrast of white body text on the blue section, and run a full keyboard and screen reader check.
- [ ] Lighthouse pass once the real fonts and images are in.
- [ ] Optional: a GitHub Action that deploys on push to `master`.
- [ ] Merge `bmm-www-2` into `master` once it's live. The old Gatsby site stays in git history; tag it (e.g. `v1-gatsby`) before merging.
