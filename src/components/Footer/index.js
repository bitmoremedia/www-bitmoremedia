import React from 'react'

import LinkedInIcon from '../icon/LinkedIn'
import InstagramIcon from '../icon/Instagram'
import TwitterIcon from '../icon/Twitter'
import FacebookIcon from '../icon/Facebook'

const main = (
  <div className="container mx-auto flex flex-col md:flex-row py-8 justify-around">
    <div className="md:w-1/4">
      <div>GET IN TOUCH</div>
      <div>
        We are a London based digital agency with a home office in Crystal Palace, London. We have
        shared offices across London; get in touch to find out the closest office to you.{' '}
      </div>
      <div>
        <div>EMAIL</div>
        <div>PHONE</div>
      </div>
    </div>
    <div className="md:w-1/4">
      <div>NAVIGATION</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>Partnerships</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>
)

const iconColor = '#4a4a4a'
const iconBackgroundColor = 'white'
const iconSize = 40
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
        <div className="p-8" key={label}>
          <a href={url} target="_blank">
            {icon}
          </a>
        </div>
      )
    })}
  </div>
)

const base = (
  <div className="flex justify-between text-xs pt-2 text-grey-light flex-col md:flex-row">
    <div>BIT MORE MEDIA LIMITED. Registered in England &amp; Wales, no: 09673233</div>
    <div className="pt-2 md:pt-0">&copy; Copyright Bit More Media 2018.</div>
  </div>
)

const Footer = () => (
  <div className="bg-grey-darkest text-grey-lightest text-sm p-2">
    {main}
    {social}
    {base}
  </div>
)

export default Footer
