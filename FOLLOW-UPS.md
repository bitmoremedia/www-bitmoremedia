# Rebuild follow-ups

What's still needed to finish the new site. It's built from the "pop colours 2026" desktop designs in `_design/BMM website design pop colours 2026/` (homepage, Branding Menu, Campaign Room, Dev Lab and Social Studio). See `REBUILD.md` for the overall plan.

## How closely it matches the designs

- From 1280px wide upwards the layout scales with the window, and at 1712px (the width of the designs) it matches the PDFs almost pixel for pixel. That includes the designer's letter spacing and text box widths, so lines break in the same places. Below 1280px the pages switch to tablet and mobile layouts, which aren't in the designs.
- Copy, colours, sizes and spacing come from the PDFs' own text and vector data, not from eyeballing.
- Photos, logos and illustrations are the original images embedded in the PDFs (logos and illustrations have transparent backgrounds), cropped to how the designer framed them. The Dev Lab icons are rendered from the PDF's vector shapes.

## From you / the designer

### Content and details

- [x] **Email address** (confirmed): `getintouch@bitmoremedia.com`, set in `src/data/site.ts`.
- [x] **Copy fixes** (approved): the Signature button now says SIGNATURE (was POLISH), the Social Studio intro says "The Social Studio helps you…" (was "The social studies…"), and the Social Studio button says "TALK TO US ABOUT THE STUDIO" (was "ME").

- [x] **Privacy policy**: drafted at `/privacy/` and retention periods confirmed (enquiries deleted within two years; client records kept six years). It's written for the site as it is: email and phone only, Kualo hosting, Google Workspace email, no cookies or analytics. Update it if a form or analytics are ever added.
- [x] **Company details**: the footer shows Bit More Media Limited, company number 09673233, and the registered office, all taken from Companies House (`company` in `src/data/site.ts`). Update them if the registered office moves.
- [x] **Social links**: none, as in the designs.

### Design questions

- [x] **Footer** (approved): none of the designs has one, so there's a slim footer in each page's colours with ©, email, phone, privacy policy and company details. Ask the designer if they'd like to design a proper one.
- [ ] **Mobile and tablet**: only desktop designs exist. I've built sensible stacked layouts. Ask the designer whether they want to design these.
- [ ] **Mobile menu**: not designed. There's a simple menu button that drops down the page links.
- [ ] **Hover and focus states**: not designed. Buttons lift slightly, and links get underlined.
- [x] **Contrast** (done, at the large-text level): almost every text colour pair in the designs failed the WCAG AA contrast guidelines. All text now reaches at least 3:1, the AA level for large or bold text. Text uses slightly deeper "ink" shades (e.g. orange text on mint is now `#d25508`), the coral behind cream text (Connect, Social Studio, home footer) is darker (`#d65a5f`), and the orange buttons are a touch stronger (`#f16d2b`). The tokens are in `src/styles/global.css`. Three deliberate exceptions:
  - The coloured full stops and the wordmark keep the design colours (punctuation and logos are exempt).
  - On Social Studio, the "Bit More" half of the wordmark is white instead of blue (blue vanishes on the darker coral), and CONNECT is cream instead of blue.
  - Body paragraphs (about 17–20px) would need 4.5:1 to fully pass AA. Getting there would mean much darker, duller colours, so they're at 3:1 for now. Tell the designer.
- [x] **Fonts** (approved: Figtree fallback is fine): the designs use **Avenir** (Heavy, Black, Medium, Book). Apple devices have it built in, so Mac, iPhone and iPad visitors see the real thing. Everyone else (Windows, Android) gets **Figtree**, a free lookalike bundled with the site. To use Avenir everywhere we'd need a web font licence from Monotype. The Brand Bar tiles use Georgia, which Android doesn't have.
- [x] **Favicon**: a coral "M." with a blue full stop on yellow (`public/favicon.svg`), plus the full stacked wordmark as the phone home-screen icon (`public/apple-touch-icon.png`). Both are drawn from Avenir Heavy outlines, so they look the same everywhere. Swap them if the designer makes official ones.
- [x] **Social share image**: `public/og.jpg` (1200×630), built from the homepage title, tagline and hero tiles. Swap it for a designed one if you like.

### Assets

- [ ] **Higher-resolution photos**: everything is the resolution embedded in the PDFs. Most are fine, but the **Social Studio hero** is only 768px wide and will look soft on large or high-DPI screens. The originals would be better throughout.
- [ ] **Image licences**: where are the photos from (stock? AI-generated?), and are they licensed for the website?
- [ ] **Client logos**: confirm we have permission to show each brand.

## Contact

- [x] **No contact form** (decided): the design's form is replaced with email links, so there's nothing to host, test or protect from spam. Connect shows the email address and phone number, and "Drop us an email" opens the visitor's email app.
- [x] Each service page button opens an email with a subject line already filled in, e.g. "Enquiry: The Essentials package" or "Quote request: The Dev Lab" (`mailto()` in `src/data/site.ts`).
- [ ] Tell the designer the form has gone, in case they want to redesign the bottom of the Connect section.
- [ ] The email address is visible in the page source, so expect a bit more spam to that inbox. Gmail's filters should catch most of it.

## Hosting / deploy (Kualo)

- [ ] **Access**: cPanel login and the SFTP/SSH host and username. Is SSH enabled? (That decides `rsync` or `lftp` in `scripts/deploy.sh`.)
- [ ] **Back up the current `public_html`** before the first deploy, including the hand-uploaded `.htaccess`.
- [ ] **Check what else is in `public_html`** (e.g. an `/apps` folder, verification files, `.errors/`). The deploy deletes anything not in the build unless it's added to `EXCLUDES` in `scripts/deploy.sh`. Always run `npm run deploy -- --dry-run` first.
- [ ] **Confirm Kualo's Apache allows the `.htaccess` directives** used (`mod_rewrite`, `mod_headers` incl. `<If>`, `mod_expires`).
- [x] **Old-page redirects**: `public/.htaccess` sends each 2018 page to its closest new page: development and user experience → Dev Lab, marketing → Campaign Room, products (the Tourplanr app) → Dev Lab, services → What we do, about → Who we are, contact → Connect, and partnerships → home. The old server's `/app` → `/apps` redirect is carried over too.
- [ ] Check that `/apps` still exists on the server. If it doesn't, delete that redirect.

## Technical to-dos

- [ ] Analytics: none for now (decided). If added later, Cloudflare Web Analytics is cookieless and needs no consent banner; GA4 would need one. Either way, update the privacy policy.
- [x] Sitemap (`@astrojs/sitemap`) and `public/robots.txt`.
- [x] `Organization` structured data (JSON-LD) on the homepage, with the contact and Companies House details.
- [x] Accessibility pass: an axe-core audit of every page at desktop and mobile widths finds nothing beyond the contrast notes above. Keyboard order is logical, focus is visible everywhere and animations are turned off for people who prefer reduced motion. Still worth a manual VoiceOver run before launch.
- [ ] Lighthouse pass once the final images are in.
- [x] Deploys stay manual (decided): `npm run deploy -- --dry-run`, then `npm run deploy`. No GitHub Action.
- [ ] Merge `bmm-www-2` into `master` once it's live. The old Gatsby site stays in git history; tag it (e.g. `v1-gatsby`) before merging.
- [x] `_design/` (design PDFs, about 56MB) is in `.gitignore` and kept locally only. Back it up somewhere else (e.g. Google Drive).
