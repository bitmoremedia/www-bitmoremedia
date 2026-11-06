export const contact = {
  // TODO: confirm address (not shown in the designs; this is the one from the old site)
  email: 'getintouch@bitmoremedia.com',
}

// A mailto: link that opens the visitor's email app, with an optional subject line
export function mailto(subject?: string) {
  return `mailto:${contact.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
}

// From Companies House (checked November 2026)
export const company = {
  name: 'Bit More Media Limited',
  number: '09673233',
  registeredOffice: '7 Three Rivers Business Park, Felixstowe Road, Foxhall, Ipswich IP10 0BF',
}

/*
 * Each page has its own colour scheme. Full class names are spelled out so Tailwind can find them.
 * Header colours come straight from each page's PDF.
 */
export interface Theme {
  bg: string
  hex: string
  nav: string
  wordmarkTop: string
  wordmarkBottom: string
  connect: string
  // Desktop offset for the nav links, which sit lower on the homepage design
  navTop: string
}

export const themes = {
  home: {
    bg: 'bg-yellow',
    hex: '#e9ff35',
    nav: 'text-coral-ink',
    wordmarkTop: 'text-blue',
    wordmarkBottom: 'text-coral',
    connect: 'text-blue',
    navTop: 'xl:pt-[3.3125rem]',
  },
  branding: {
    bg: 'bg-mint',
    hex: '#7df1b7',
    nav: 'text-orange-ink',
    wordmarkTop: 'text-blue',
    wordmarkBottom: 'text-coral-deep',
    connect: 'text-blue-ink',
    navTop: 'xl:pt-[2.6875rem]',
  },
  campaign: {
    bg: 'bg-cyan',
    hex: '#00e6ff',
    nav: 'text-coral-deep-ink-cyan',
    wordmarkTop: 'text-blue',
    wordmarkBottom: 'text-coral-deep',
    connect: 'text-blue-ink',
    navTop: 'xl:pt-[2.6875rem]',
  },
  dev: {
    bg: 'bg-blue',
    hex: '#597dcd',
    nav: 'text-pink-ink',
    wordmarkTop: 'text-white',
    wordmarkBottom: 'text-coral',
    connect: 'text-white',
    navTop: 'xl:pt-[2.6875rem]',
  },
  social: {
    bg: 'bg-coral-dark',
    hex: '#d65a5f',
    nav: 'text-cream',
    // Blue in the design, but it disappears on the darker coral (as on Dev Lab, white instead)
    wordmarkTop: 'text-white',
    wordmarkBottom: 'text-cream',
    // The design has this in blue, which can't be read on coral
    connect: 'text-cream',
    navTop: 'xl:pt-[2.6875rem]',
  },
} satisfies Record<string, Theme>

export interface Service {
  slug: string
  name: string
  navLabel: string
  blurb: string
  // Width of the blurb's text box in the homepage design, so lines break in the same places
  blurbWidth: string
}

// Homepage "what we do" copy
export const services: Service[] = [
  {
    slug: 'branding-hub',
    blurbWidth: 'xl:max-w-[32rem]',
    name: 'Branding Hub',
    navLabel: 'Branding hub',
    blurb:
      'Big brand energy, built your way. Choose a ready-made package from The Brand Menu or mix and match at The Brand Bar. Wherever you’re heading, we’ll help you get there with clarity, consistency and confidence.',
  },
  {
    slug: 'campaign-room',
    blurbWidth: 'xl:max-w-[35.0625rem]',
    name: 'Campaign Room',
    navLabel: 'Campaign room',
    blurb:
      'Where strategy meets action. This is your space for launches, activations, and ideas that need a little more firepower. From creative concepts and multi-channel rollouts to full-scale event management. We plan, produce and deliver campaigns that connect and convert. Let’s make your message impossible to ignore.',
  },
  {
    slug: 'social-studio',
    blurbWidth: 'xl:max-w-[35.0625rem]',
    name: 'Social Studio',
    navLabel: 'Social studio',
    blurb:
      'Show up and stand out. The Social Studio helps you build a consistent, scroll-stopping presence – with strategy, content, and platform management that works. From planning and posting to growth and reporting, we handle the heavy lifting so you can stay focused on the big picture.',
  },
  {
    slug: 'dev-lab',
    blurbWidth: 'xl:max-w-[35.125rem]',
    name: 'Dev Lab',
    navLabel: 'Dev lab',
    blurb:
      'Your ideas, built beautifully. The Dev Lab turns bold thinking into clean, responsive code – from sleek websites to powerful web and mobile apps. We focus on seamless user experiences that look great and work even better.',
  },
]

export const nav = [
  ...services.map((s) => ({ label: s.navLabel, href: `/${s.slug}/` })),
  { label: 'Who we are', href: '/#who-we-are' },
]
