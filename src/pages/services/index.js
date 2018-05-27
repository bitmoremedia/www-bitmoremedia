import React from 'react'
import Link from 'gatsby-link'
import { Link as ScrollLink, Element } from 'react-scroll'

import bgImgSrc from '../../images/services.jpg'
import PageBackground from '../../components/common/PageBackground'
import ScrollDownButton from '../../components/common/ScrollDownButton'
import FeatureLinks from '../../components/common/FeatureLinks'

import softwareDevelopmentImgSrc from '../../images/software-dev-image.jpg'
import uxImgSrc from '../../images/ux-background-image.jpg'
import marketingImgSrc from '../../images/marketing-background-image.jpg'

const services = [
  {
    title: 'Development',
    imgSrc: softwareDevelopmentImgSrc,
    to: '/services/development',
    summary: 'We build bespoke, immersive & scalable digital experiences for your audience',
  },
  {
    title: 'User Experience',
    imgSrc: uxImgSrc,
    to: '/services/user-experience',
    summary:
      'We help you to design products which are useful, easy to use, and delightful to interact with',
  },
  {
    title: 'Marketing',
    imgSrc: marketingImgSrc,
    to: '/services/marketing',
    summary: 'Strategy & planning. Analysis & measurement. We craft integrated brand campaigns',
  },
]

const ServicesPage = () => (
  <div>
    <PageBackground bgImgSrc={bgImgSrc}>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col justify-around container px-8 pt-8 mx-auto text-white subpixel-antialiased _text-shadow">
          <div className="max-w-sm pb-8">
            <h1 className="text-2xl md:text-4xl py-8">Services</h1>
            <p className="md:text-2xl leading-normal pb-8">
              We offer consulting services in: Development, UX & Marketing
            </p>
          </div>

          <div className="text-center pb-2 md:pb-0 md:pt-8">
            <ScrollLink
              to="service-list"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-white hover:text-orange _transition-all"
            >
              <ScrollDownButton />
            </ScrollLink>
          </div>
        </div>

        <div className="bg-white text-center p-8 text-blue md:text-2xl md:tracking-wide leading-normal">
          <p>“When you remove layers, simplicity and speed happen.”</p>
          <p>- Ginni Rometty, CEO, IBM</p>
        </div>
      </div>
    </PageBackground>
    <div className="container px-8 pt-8 mx-auto _full-height-minus-footer">
      <Element name="service-list">
        <h1 className="text-grey text-sm uppercase font-light">Our Services</h1>
        <FeatureLinks features={services} />
      </Element>
    </div>
  </div>
)

export default ServicesPage
