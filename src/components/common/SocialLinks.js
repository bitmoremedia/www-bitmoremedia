import React from 'react'

import { socialLinks } from '../../config'
import LinkedInIcon from '../icon/LinkedIn'
import InstagramIcon from '../icon/Instagram'
import TwitterIcon from '../icon/Twitter'
import FacebookIcon from '../icon/Facebook'

const Icons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
}

const SocialLinks = ({
  iconSize,
  iconColor,
  iconBackgroundColor,
  iconClass,
  containerClass = 'flex justify-center items-center',
}) => (
  <div className={containerClass}>
    {socialLinks.map(socialLink => {
      const { label, url } = socialLink
      const Icon = Icons[label]
      return (
        <div className={iconClass} key={label}>
          <a href={url} target="_blank">
            <Icon
              width={iconSize}
              height={iconSize}
              iconColor={iconColor}
              backgroundColor={iconBackgroundColor}
              className="_tilt-on-hover"
            />
          </a>
        </div>
      )
    })}
  </div>
)

export default SocialLinks
