import type { ImageMetadata } from 'astro'

import curious from '../assets/values/curious.png'
import clear from '../assets/values/clear.png'
import clever from '../assets/values/clever.png'

export const contact = {
  // TODO: confirm address (design has a "[your email address]" placeholder)
  email: 'getintouch@bitmoremedia.com',
  phone: '+44 (0) 7399 501 731',
  phoneHref: 'tel:+447399501731',
}

// Leave a URL empty to hide that link (the whole "Follow us" column hides if all are empty)
export const socialLinks = [
  { label: 'Instagram', url: '' },
  { label: 'LinkedIn', url: '' },
  { label: 'TikTok', url: '' },
]

export type DotColour = 'lime' | 'blue' | 'mint' | 'cyan' | 'coral' | 'orange'

export interface Service {
  slug: string
  name: string
  navLabel: string
  dot: DotColour
  blurb: string
}

export const services: Service[] = [
  {
    slug: 'branding-hub',
    name: 'Branding Hub',
    navLabel: 'Branding hub',
    dot: 'mint',
    blurb:
      'Big brand energy, built your way. Choose a ready-made package from The Brand Menu or mix and match at The Brand Bar. Wherever you’re heading, we’ll help you get there with clarity, consistency and confidence.',
  },
  {
    slug: 'campaign-room',
    name: 'Campaign Room',
    navLabel: 'Campaign room',
    dot: 'cyan',
    blurb:
      'Where strategy meets action. This is your space for launches, activations and ideas that need a little more firepower. From creative concepts and multi-channel rollouts to full-scale event management, we plan, produce and deliver campaigns that connect and convert.',
  },
  {
    slug: 'social-studio',
    name: 'Social Studio',
    navLabel: 'Social studio',
    dot: 'coral',
    blurb:
      'Show up and stand out. The Social Studio helps you build a consistent, scroll-stopping presence – with strategy, content and platform management that works. From planning and posting to growth and reporting, we handle the heavy lifting so you can stay focused on the big picture.',
  },
  {
    slug: 'dev-lab',
    name: 'Dev Lab',
    navLabel: 'Dev lab',
    dot: 'lime',
    blurb:
      'Your ideas, built beautifully. The Dev Lab turns bold thinking into clean, responsive code – from sleek websites to powerful web and mobile apps and AI-powered tools. We focus on seamless user experiences that look great and work even better.',
  },
]

export interface Value {
  name: string
  text: string
  bg: string
  image: ImageMetadata
  alt: string
}

export const values: Value[] = [
  {
    name: 'Curious',
    text: '…reflects our creativity, energy and a sense of exploration – which pairs naturally with vibrant visuals.',
    bg: 'bg-lime',
    image: curious,
    alt: 'A ladybird on a curling plant tendril',
  },
  {
    name: 'Clear',
    text: '…balances the boldness with a promise of simplicity and coherence – reassuring for clients navigating branding.',
    bg: 'bg-orange',
    image: clear,
    alt: 'A glossy silver droplet',
  },
  {
    name: 'Clever',
    text: '…brings in our strategic edge and smart thinking – showing there’s substance behind the style.',
    bg: 'bg-cyan',
    image: clever,
    alt: 'A pink 3D brain',
  },
]

export const nav = [
  ...services.map((s) => ({ label: s.navLabel, href: `/#${s.slug}` })),
  { label: 'Who we are', href: '/#who-we-are' },
]
