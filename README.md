## Bit More Media Website

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It's a fully static site, hosted on Kualo.

### Getting started

Needs Node 22.23+ (there's an `.nvmrc`, so run `nvm use`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built dist/ locally
npm run check     # type-check .astro files
npm run deploy    # build + upload to Kualo (needs .env, see scripts/deploy.sh)
```

### Where things are

- `src/pages/`: routes (`index.astro`, `[service].astro` for the service pages, `privacy`, `404`)
- `src/sections/`: the homepage sections (Hero, WhatWeDo, WhoWeAre, Clients, Connect)
- `src/components/`: header, footer, wordmark, buttons, headings
- `src/data/site.ts`: contact details, social links, services and values copy
- `src/styles/global.css`: Tailwind and the design tokens (colours, fonts)
- `src/assets/`: images (optimised at build time)
- `public/.htaccess`: redirects, HTTPS/www and caching for Apache

See `REBUILD.md` for the background and plan, and `FOLLOW-UPS.md` for what's still outstanding.
