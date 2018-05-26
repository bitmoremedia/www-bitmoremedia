import React from 'react'
import Link from 'gatsby-link'

import { level1PageLinks } from '../config'
import tailwindConfig from '../../tailwind_config'
import LinkedInIcon from '../icon/LinkedIn'
import InstagramIcon from '../icon/Instagram'
import TwitterIcon from '../icon/Twitter'
import FacebookIcon from '../icon/Facebook'

const links = [
  {
    title: 'Home',
    path: '/',
  },
  ...level1PageLinks,
]

const colorClasses = {
  background: 'bg-grey-darkest',
  mainText: 'text-grey-light',
  altText: 'text-grey-true',
}
const iconSize = 40
const iconColor = tailwindConfig.colors['grey-darkest']
const iconBackgroundColor = tailwindConfig.colors['grey-light']

const main = (
  <div className="container mx-auto flex flex-col md:flex-row py-8 justify-around">
    <div className="md:w-1/2">
      <div className={`${colorClasses.altText}`}>GET IN TOUCH</div>
      <div className="py-4">
        We are a London based digital agency with a home office in Crystal Palace, London. We have
        shared offices across London; get in touch to find out the closest office to you.{' '}
      </div>
      <div>
        <div>
          <a className={`${colorClasses.mainText}`} href="mailto:getintouch@bitmoremedia.com">
            getintouch@bitmoremedia.com
          </a>
        </div>
      </div>
    </div>
    <div className="md:w-1/4 pt-6 md:pt-0">
      <div className={`${colorClasses.altText}`}>NAVIGATION</div>
      <div className="py-4">
        <ul className="list-reset">
          {links.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`no-underline ${
                  colorClasses.mainText
                } hover:text-orange-dark py-2 leading-normal`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const withIconProps = Icon => {
  return (
    <Icon
      iconColor={iconColor}
      backgroundColor={iconBackgroundColor}
      width={iconSize}
      height={iconSize}
      className="_tilt-on-hover"
    />
  )
}

const socialLinks = [
  {
    label: 'Facebook',
    icon: withIconProps(FacebookIcon),
    url: '',
  },
  {
    label: 'Twitter',
    icon: withIconProps(TwitterIcon),
    url: '',
  },
  {
    label: 'Instagram',
    icon: withIconProps(InstagramIcon),
    url: '',
  },
  {
    label: 'LinkedIn',
    icon: withIconProps(LinkedInIcon),
    url: '',
  },
]

const social = (
  <div className="flex container mx-auto justify-center items-center h-24">
    {socialLinks.map(socialLink => {
      const { label, icon, url } = socialLink
      return (
        <div className="p-4 pb-8 md:p-8" key={label}>
          <a href={url} target="_blank">
            {icon}
          </a>
        </div>
      )
    })}
  </div>
)

const base = (
  <div className={`flex justify-between text-xs pt-2 ${colorClasses.altText} flex-col md:flex-row`}>
    <div>
      BIT MORE MEDIA LIMITED. Registered in England &amp; Wales,{' '}
      <span className="whitespace-no-wrap">no: 09673233</span>
    </div>
    <div className="pt-2 md:pt-0">&copy; Copyright Bit More Media 2018.</div>
  </div>
)

const Footer = () => (
  <div className={`${colorClasses.background} text-sm p-6 ${colorClasses.mainText}`}>
    {main}
    {social}
    {base}
  </div>
)

export default Footer
