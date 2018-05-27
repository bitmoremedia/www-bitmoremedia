import React from 'react'
import Link from 'gatsby-link'
import { Link as ScrollLink, Element } from 'react-scroll'

import bgImgSrc from '../images/services.jpg'
import PageBackground from '../components/common/PageBackground'
import ScrollDownButton from '../components/common/ScrollDownButton'

const ServicesPage = () => (
  <PageBackground bgImgSrc={bgImgSrc}>
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-1 flex-col justify-around container px-8 pt-8 mx-auto text-white subpixel-antialiased _text-shadow">
        <div className="max-w-sm pb-8">
          <h1 className="text-2xl md:text-4xl py-8">Services</h1>
          <p className="md:text-2xl leading-normal pb-8">
            We have three ways of working with you: Software Development, UX & Marketing.
          </p>
        </div>

        <div className="text-center pb-2 md:pb-0 md:pt-8">
          <ScrollLink
            to="what-we-do"
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
)

export default ServicesPage
