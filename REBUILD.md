# Bit More Media website: current state and rebuild plan

_Written October 2026. The last commit to this repo was February 2019._

This file covers two things:

1. How the current site is put together, including what's worth keeping and what's broken.
2. How to rebuild it from the new homepage designs (`Homepage – desktop.pdf` and `Homepage – mobile.pdf`).

---

## Part 1: How the current site works

### Stack

| Concern | What's used | Version | Notes |
| --- | --- | --- | --- |
| Framework | Gatsby (React static site generator) | 2.0.8 | Gatsby is now on v5 and its future is uncertain since Netlify acquired it |
| UI | React | 16.5.2 | Class components and `StaticQuery`, from before hooks |
| Styling | Tailwind CSS | 0.6.6 | Pre-1.0 config format and a custom colour file. None of it carries over to modern Tailwind |
| CSS pruning | PurgeCSS 1.x run as a post-build step | 1.1.0 | Modern Tailwind does this itself |
| Images | `gatsby-image` + `gatsby-plugin-sharp` (duotone heroes, traced-SVG placeholders) | 2.x | Deprecated. Old `sharp` native binaries |
| State | `unstated` (only used for the mobile nav open/closed flag) | 2.1.1 | Unmaintained |
| Scrolling | `react-scroll` for the "scroll down" arrow | 1.7.10 | Native CSS `scroll-behavior` does this now |
| IE support | `object-fit-images` polyfill + an IE10 flexbox hack in CSS | – | Not needed anymore |
| Analytics | `gatsby-plugin-google-analytics`, property `UA-72779821-1` | – | **Dead.** Universal Analytics stopped collecting data in July 2023 |
| Formatting | Prettier 1.14 | – | |

There are no tests, no CI and no `node_modules` checked out. I haven't tried to install or build it, but with Gatsby 2, sharp from 2018 and Tailwind 0.6, getting it to run on a current Node/macOS (Apple Silicon) would be a project in itself. **We should treat the current code as reference material, not something to upgrade.**

### Scripts (`package.json`)

- `npm start`: compiles Tailwind (`src/tailwind/index.tailwind.css` → `src/tailwind/index.css`, which is gitignored), then runs `gatsby develop`.
- `npm run build`: deletes `.cache` and `public`, compiles Tailwind, runs `gatsby build`, then runs PurgeCSS over `public/`.
- Earlier commits had `deploy` scripts that pushed to `bmm.surge.sh` and `bmm-alt.surge.sh` via Surge. Those were removed. There is no deploy script now: `public/` gets uploaded to the host by hand.

### Where it's hosted (checked October 2026)

| Thing | Where | Evidence |
| --- | --- | --- |
| Website | **Kualo** (UK shared hosting, paid). Apache on `91.197.228.236` | IP belongs to Kualo Limited. The live HTML has `generator: Gatsby 2.0.8`, so it's this codebase |
| DNS | **Kualo** nameservers (`ns1`–`ns4.kualo.net`) | `dig NS` |
| Domain registration | PublicDomainRegistry (PDR), the wholesale registrar Kualo resells. Probably bought through Kualo. **Expires 3 July 2027** | `whois` |
| Email | **Google Workspace** | MX records point at `aspmx.l.google.com` |
| Wedding site | **Firebase Hosting**, project `wedsite-6155f` | `gem-russ-getmarried.bitmoremedia.com` is a CNAME to `wedsite-6155f.firebaseapp.com`, and there's a `firebase=wedsite-6155f` TXT record |

Email and the wedding site already live elsewhere. We're **staying on Kualo**: the domain, DNS and email setup stay exactly as they are, and the rebuild just replaces the files in the web root. Moving hosting (e.g. to Firebase) can wait for another day.

### Directory layout

```
gatsby-config.js        site title, plugins, GA tracking ID (favicon plugin commented out)
gatsby-browser.js       runs the object-fit-images polyfill on first render
gatsby-node.js / -ssr   empty boilerplate
purgecss.config.js      purges public/styles.css against public/**/*.html
src/
  config.js             nav structure (level1PageLinks) + social links (all empty URLs)
  pages/                one file per route (Gatsby file-based routing)
    index.js            home: full-bleed duotone hero + "What we do" + 3 feature cards
    services/index.js   services hub → development / user-experience / marketing
    products.js         Tourplanr app showcase
    partnerships.js, about.js, contact.js, 404.js
  components/
    Layout.js           Helmet meta tags, Header, MobileNav, Footer, unstated Provider
    Header.js           fixed nav that turns translucent after scrolling 30px
    MobileNav*.js       slide-out mobile menu
    common/             PageHero, InitialPageHero, FeatureLinks, SplitPage, Button, etc.
    icon/               inline SVG icon components
  images/               ~20 stock JPGs + logo PNG + favicon
  module/               shared inline style for cover background images
  store/NavStore.js     unstated container for mobile nav state
  tailwind/             Tailwind 0.6 config, colours, custom CSS utilities
  static/.htaccess      see below
```

Each page follows the same pattern: a GraphQL page query pulls images through sharp, then the page renders inside `<Layout>` with a `PageBackground` duotone hero and a `SecondaryPageWrapper` content section. All the copy is hard-coded in the page components.

### Current routes (these need redirects later)

- `/`
- `/services`, `/services/development`, `/services/user-experience`, `/services/marketing`
- `/products`
- `/partnerships`
- `/about`
- `/contact`

### Hosting quirks in `.htaccess`

`src/static/.htaccess` does several things on the live server:

- Redirects `bitmoremedia.com` → `https://www.bitmoremedia.com` and forces HTTPS.
- Sets long expiry headers for images, CSS and JS.
- `Redirect 301 /app /apps`
- Redirects `/gem-russ-getmarried` → `https://gem-russ-getmarried.bitmoremedia.com/`
- Points `ErrorDocument 404` at `/.errors/404.php`, which is a host-specific path.

**Why it never got copied into the build** (the open question in commit `f08afb5`): Gatsby only copies files from a `static/` folder at the **project root**. It ignores `src/static/`. So whatever `.htaccess` is on the server was uploaded by hand.

Whatever we deploy to next, these rules need to come across. That's especially true of the www/HTTPS canonicalisation and the wedding subdomain redirect.

### Things worth keeping

- The **domain setup and redirects** above.
- **Contact email** `getintouch@bitmoremedia.com`. It's the likely answer to the `[your email address]` placeholders in the new design.
- Probably nothing else. The copy, imagery, information architecture and visual style are all being replaced.

---

## Part 2: Rebuild plan

### What the new design asks for

The homepage is a **single long scrolling page** with a sticky nav that jumps to sections. Here's what's in it, from top to bottom:

| # | Section | Background | Content |
| --- | --- | --- | --- |
| – | Header | lime | "Bit More Media." wordmark. Desktop nav: Branding hub, Campaign room, Social studio, Dev lab, Who we are, plus a **Connect** pill button. Mobile shows the wordmark and the Connect pill only (no hamburger in the mockup) |
| 1 | Hero | lime | Big "BIT MORE MEDIA." heading with a blue full stop, a three-line strapline, a 4×2 image grid (rounded corners, coral border) that becomes a single image on mobile, two intro paragraphs, and a "Start a project" orange pill |
| 2 | What we do | royal blue | 2×2 grid (1 column on mobile) of the four service areas: **The Branding Hub**, **The Campaign Room**, **The Social Studio**, **The Dev Lab**. Each has a coloured dot, a "The" kicker, a heading, a blurb and an "Explore the …" link |
| 3 | Who we are | mint | "Our story" (3 paragraphs), three value cards (**Curious** lime/ladybird, **Clear** orange/droplet, **Clever** cyan/brain) side by side on desktop and stacked on mobile, then a "This is our brand. But what could yours be?" CTA → Branding Hub |
| 4 | Our clients | cyan | Intro line and a logo wall: Accenture, Currys, Pret, Virgin Money, BlackRock, Sky, BNY, PwC, BT, Nando's, RSA, EY, Bupa, McDonald's. 5 columns on desktop, 3 on mobile |
| 5 | Connect | coral | Intro copy, phone number and a retro phone image (desktop only). The mockup also has an enquiry form, but **we're dropping the form**: this section just shows the email address (`mailto:` link) and phone number. The designer needs to know so they can rework the layout and the "Fill in the form or email us…" copy |
| – | Footer | navy | Wordmark and one-line description. Columns for Services, Contact (phone, email) and Follow us (Instagram, LinkedIn, TikTok). Bottom line with ©, privacy policy link and company details |

Recurring design elements to build as components:

- **Section heading with a coloured trailing dot** ("Who we are•", "Connect•"). The dot colour changes per section.
- **Pill buttons** (orange fill, navy text, and a navy variant for the nav).
- **Rounded cards with a thick white or coral border** (image tiles, value cards, phone image).
- **Kicker + heading** ("The / Branding Hub").
- Full-width, colour-blocked sections with a centred content column (roughly 740–800px of content on desktop).

**Colour palette** (eyeballed from the PDF; get exact hex values from the source file):

| Token | Approx. | Used for |
| --- | --- | --- |
| `lime` | `#E8FF3A` | hero background, headings on blue, Curious card |
| `blue` | `#4263C0` | What we do background, wordmark dot |
| `mint` | `#7DF0B8` | Who we are background |
| `cyan` | `#00E5FF` | clients background, Clever card |
| `coral` | `#FF7B7B` | Connect background, image borders |
| `orange` | `#FF7A3D` | buttons, Clear card |
| `navy` | `#1E1C3E` | text, footer, nav button |

**Typography**: there are two faces. Headings use a very heavy geometric sans (Black weight). Body text uses a light geometric sans that looks like Futura PT or Avenir Next. **We need the actual font names and licences from the designer.** If they're Adobe Fonts or commercial, that affects how we load them.

### Pages implied but not yet designed

The design links to pages that don't exist yet:

- **Branding Hub**, which includes **The Brand Menu** (packages) and **The Brand Bar** (mix and match)
- **Campaign Room**
- **Social Studio**
- **Dev Lab**
- **Privacy policy**, linked from the footer. Without a form it's less critical, but it's still good practice and needed if we use any analytics that sets cookies.

The nav items could jump to homepage sections now and point to full pages later. The plan below starts with the homepage and adds the rest as templates once designs arrive.

### Recommended stack

| Concern | Recommendation | Why |
| --- | --- | --- |
| Framework | **Astro** (current major) | Built for content-led marketing sites. It ships zero JS by default and outputs plain static HTML. Components can be `.astro` files, with React islands only if we ever need interactivity |
| Styling | **Tailwind CSS v4** with the palette and fonts as `@theme` tokens | Familiar from the old site, but v4 config is CSS-first and pruning is built in, so there's no PurgeCSS step |
| Images | Astro's built-in `<Image>` / `<Picture>` (sharp) | Responsive AVIF/WebP and lazy loading, which replaces gatsby-image |
| Content | Copy in Markdown/MDX or Astro content collections | Keeps text out of components so editing copy doesn't mean editing layout. Leaves the door open to a CMS later if non-devs need to edit |
| Contact | No form. A `mailto:` email link and a `tel:` phone link | Nothing to host, secure or filter for spam, and it keeps the site 100% static |
| Hosting | **Stay on Kualo**, uploading Astro's static `dist/` folder to the web root | Already paid for, and it holds the domain, DNS and email setup, so there are no DNS changes and no risk to email. Plain static files run on Apache, and redirects and caching stay in `.htaccess`. Because the output is static, we can move it to Firebase, Cloudflare Pages or anywhere else later without code changes |
| Analytics | **Cloudflare Web Analytics** (free, cookieless, a JS snippet that works without moving DNS to Cloudflare), or GA4 if you want Google | Plausible and Fathom are paid. Cookieless analytics avoids a cookie banner under PECR, whereas GA4 needs a consent banner |
| Quality | Prettier, ESLint, `astro check` (TypeScript), Lighthouse CI or Playwright smoke test in GitHub Actions | |

Why not just upgrade Gatsby? Nothing in the current codebase survives the redesign. Gatsby's GraphQL data layer is overkill for a site of about six pages, and the ecosystem has largely moved on. A clean start is less work than an upgrade.

Next.js would also work. It makes more sense if the site will grow app-like features (logins, dashboards). For a static brochure site, Astro is simpler and faster.

### Proposed project structure

```
src/
  layouts/BaseLayout.astro       <head>, meta/OG tags, fonts, header, footer
  components/
    Header.astro                 sticky nav, scroll-spy highlight (tiny inline script)
    Footer.astro
    SectionHeading.astro         heading + coloured dot
    Button.astro                 pill button / link variants
    ImageTile.astro              rounded bordered image
    ServiceBlock.astro           kicker + title + blurb + explore link
    ValueCard.astro              Curious / Clear / Clever
    ClientLogos.astro
  sections/                      Hero, WhatWeDo, WhoWeAre, Clients, Connect
  content/                       copy for services, values, clients (md/json)
  pages/
    index.astro
    privacy.astro
    branding-hub.astro … (later)
    404.astro                    → dist/404.html, wired up via ErrorDocument in .htaccess
  styles/global.css              Tailwind import + @theme tokens
public/                          copied as-is to the root of dist/
  .htaccess                      redirects, HTTPS/www, caching (fixes the old "never gets copied" problem)
  fonts/, favicon, og-image
scripts/deploy.sh                build + rsync (or lftp) dist/ to Kualo
.github/workflows/               (optional, later) run the deploy on push to master
```

### Build phases

**Phase 0: Set up**
- Collect the source design files (Figma?), exact colours, font files and licences, image assets (hero tiles, value-card cut-outs, phone, client logos as SVG), and final copy, including the placeholders listed under open questions.
- Decide whether to start fresh in this repo (on a `rebuild` branch, archiving the old code under a git tag such as `v1-gatsby`) or in a new repo. **I recommend tagging and starting fresh here**, so the history and remote stay in one place.

**Phase 1: Scaffold**
- `npm create astro@latest`, add Tailwind v4, Prettier and TypeScript.
- Define design tokens (colours, fonts, type scale, radii, border widths, spacing) in `global.css` from the design file.
- Base layout, header and footer.

**Phase 2: Homepage**
- Build each section as a component, mobile-first. Desktop and mobile breakpoints come straight from the two PDFs.
- Anchor IDs for nav jump links, `scroll-behavior: smooth`, and `scroll-margin-top` to clear the sticky header.
- Decide the mobile nav behaviour (see open questions).

**Phase 3: Connect section and privacy page**
- Connect section with `mailto:` and `tel:` links (phone formatted as `tel:+447399501731`).
- Privacy policy page.

**Phase 4: Polish**
- Accessibility: colour contrast (white body text on royal blue and navy text on coral need checking), focus states, alt text, `prefers-reduced-motion`.
- SEO: title and description, Open Graph/Twitter image, `sitemap.xml` (Astro integration), `robots.txt`, `Organization`/`LocalBusiness` JSON-LD.
- Performance: preload heading fonts, size images correctly, aim for Lighthouse 95+.
- Favicon and app icons from the new wordmark.

**Phase 5: Launch on Kualo**
- **Back up the live site first.** Download the current web root (usually `public_html/`) from cPanel or over SFTP, including the hand-uploaded `.htaccess`, so we can roll back and so we can diff it against the repo's copy.
- Write the new `public/.htaccess`, starting from the existing rules:
  - Keep: apex → `https://www.` redirect, force HTTPS, the `/gem-russ-getmarried` redirect.
  - Change: `ErrorDocument 404 /404.html` (Astro's 404 page) instead of the host-specific `/.errors/404.php`.
  - Caching: Astro puts fingerprinted CSS/JS/images under `/_astro/`, so those can have a 1-year `immutable` cache. HTML should get a short cache (or `no-cache`) so updates show straight away. At the moment HTML is cached for 2 days.
  - Add 301s for the old routes:
    - `/services` and `/services/*` → `/#what-we-do` (or the matching new service page once it exists)
    - `/products`, `/partnerships` → `/`
    - `/about` → `/#who-we-are`
    - `/contact` → `/#connect`
    - Drop `/app` → `/apps` unless `/apps` is still something real on the server.
- **Deploy script** (`scripts/deploy.sh`): `astro build`, then sync `dist/` to the web root:
  - If SSH is enabled on the Kualo plan: `rsync -avz --delete dist/ user@host:public_html/`.
  - Otherwise use FTPS: `lftp -e "mirror -R --delete dist/ public_html/"`.
  - Credentials go in an untracked `.env` (and GitHub secrets, if we add a deploy-on-push workflow later). Careful with `--delete`: exclude anything else that lives in the web root and isn't ours (check the backup).
- **Staging for sign-off** (optional): create a subdomain in cPanel (e.g. `new.bitmoremedia.com`) and deploy there first. Kualo's DNS adds the record automatically since it hosts the zone. Otherwise just review with `astro preview` locally.
- **No DNS changes needed.** Email (Google Workspace MX), the wedding subdomain CNAME and everything else stay exactly as they are.
- After going live, check the www/apex/HTTPS redirects, the old URLs, the 404 page and the wedding redirect. Then turn on analytics and submit the sitemap to Google Search Console.

**Phase 6: Service pages**
- Branding Hub (Brand Menu and Brand Bar), Campaign Room, Social Studio and Dev Lab, built from the same components as designs arrive.

### Open questions / placeholders in the design

- [ ] **Email address**: the design says `[your email address]`. Should it be `getintouch@bitmoremedia.com`?
- [ ] **Social links**: Instagram, LinkedIn and TikTok URLs.
- [ ] **Company details** for the footer (name, number, registered office) if it's a limited company.
- [ ] **Privacy policy** text.
- [ ] **Fonts**: names, licence and source.
- [ ] **Connect section without the form**: ask the designer for a revised layout and copy.
- [ ] **Mobile nav**: the mockup shows only the Connect button. Do we want a menu for the section links on mobile?
- [ ] **Hero image grid on mobile**: one static image, or a carousel or rotation through all eight?
- [ ] **Client logos**: check you have permission to show these brands (and get SVGs of each).
- [ ] **Analytics**: Cloudflare Web Analytics (free, cookieless) or GA4 with a consent banner?
- [ ] **Kualo access**: cPanel login, and SFTP/SSH details. Is SSH enabled on the plan? (That decides rsync vs FTPS.)
- [ ] **Web root contents**: is anything else in `public_html` that isn't the Gatsby build (e.g. an `/apps` folder, verification files)? It has to survive deploys.
- [ ] **Service page designs**: timeline for Branding Hub, Campaign Room, Social Studio and Dev Lab.
