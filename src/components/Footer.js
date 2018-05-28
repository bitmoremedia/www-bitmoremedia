import React from 'react'
import Link from 'gatsby-link'

import { level1PageLinks } from '../config'
import tailwindColors from '../tailwind/colors'
import SocialLinks from '../components/common/SocialLinks'
import EmailIcon from '../components/icon/Email'

const links = [
  {
    title: 'Home',
    path: '/',
  },
  ...level1PageLinks,
]

const colors = {
  background: 'grey-darkest',
  mainText: 'grey-lightest',
  altText: 'grey-true',
}

const colorClasses = {
  background: `bg-${colors.background}`,
  mainText: `text-${colors.mainText}`,
  altText: `text-${colors.altText}`,
}

const main = (
  <div className="container mx-auto flex flex-col md:flex-row py-8 justify-around font-light tracking-normal leading-tight">
    <div className="md:w-1/4">
      <div className={`pb-4 ${colorClasses.altText}`}>GET IN TOUCH</div>
      <div className="py-4">
        We are a London based digital agency with a home office in Crystal Palace, London. We have
        shared offices across London; get in touch to find out the closest office to you.{' '}
      </div>
      <div>
        <div>
          <a
            className={`${colorClasses.mainText} no-underline hover:underline _transition-all`}
            href="mailto:getintouch@bitmoremedia.com"
          >
            <div className="flex items-center">
              <EmailIcon
                width="28px"
                height="28px"
                iconColor={tailwindColors[colors.mainText]}
                className="mr-2"
              />
              getintouch@bitmoremedia.com
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="md:w-1/4 pt-6 md:pt-0">
      <div className={`pb-2 ${colorClasses.altText}`}>NAVIGATION</div>
      <div className="py-4">
        <ul className="pl-4">
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
              {link.subpages && (
                <ul className="pl-4">
                  {link.subpages &&
                    link.subpages.map(subpageLink => (
                      <li key={subpageLink.path}>
                        <Link
                          to={subpageLink.path}
                          className={`no-underline ${
                            colorClasses.mainText
                          } hover:text-orange-dark leading-normal`}
                        >
                          {subpageLink.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
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
    <SocialLinks
      iconSize={40}
      iconColor={tailwindColors[colors.background]}
      iconBackgroundColor={tailwindColors[colors.mainText]}
      iconClass="p-4 pb-8 md:p-8"
    />
    {base}
  </div>
)

export default Footer
