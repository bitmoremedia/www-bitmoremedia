import React from 'react'
import Link from 'gatsby-link'
import { Link as ScrollLink, Element } from 'react-scroll'

import bgImgSrc from '../images/architecture-bay-blonde.jpg'
import PageBackground from '../components/common/PageBackground'
import ScrollDownButton from '../components/common/ScrollDownButton'
import Button from '../components/common/Button'

import servicesImgSrc from '../images/services-tile.jpg'
import productsImgSrc from '../images/products-tile.jpg'
import partnershipsImgSrc from '../images/partnerships-tile.jpg'

const IndexPage = () => {
  return (
    <div>
      <PageBackground bgImgSrc={bgImgSrc}>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex-grow flex flex-col flex-grow justify-around font-sans text-white subpixel-antialiased _text-shadow">
            <div className="container px-8 mx-auto">
              <div className="text-base uppercase">We do a few things at bit more media.</div>
              <div className="text-4xl py-8">
                <div className="">Web, App Design and Build.</div>
                <div className="">User Experience.</div>
                <div className="">Marketing.</div>
              </div>
              <div className="text-sm">
                We can help you deliver the right solution for your customers.
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <ScrollLink to="what-we-do" smooth={true} duration={500} offset={-50}>
              <ScrollDownButton />
            </ScrollLink>
          </div>
        </div>
      </PageBackground>
      {WhatWeDoSection()}
    </div>
  )
}

const whatWeDo = [
  'We are a London based digital agency boutique, specialising in end-to-end delivery of web, app and mobile projects.',
  'Right from the get-go, we connect with our clients and their customers to find out their real needs and wants. We work closely to ensure the right solution is being created from the outset. We design the right thing and get the design right.',
  'We’re also there after a project has launched. We know launching is not the end of the project, it’s simply another stage. And so, we’ll be with you for the aftercare.',
  'Being a small boutique also means you’ll get through to the right people quickly, to continue the great work.',
  'We also develop our own products to release to the market. Our latest creation is going live soon. More details to follow.',
  'And to complete the trio of offerings, we have a partnerships model. Bit More Media will act as your CTO, your trusted advisor and together we can build something great.',
]

const whatWeDo_gridOrder = [
  whatWeDo[0],
  whatWeDo[3],
  whatWeDo[1],
  whatWeDo[4],
  whatWeDo[2],
  whatWeDo[5],
]

const whatWeDoItems = [
  {
    title: 'Services',
    summary:
      'Our 3 key offerings of how we can work with you: Software Development, UX & Marketing.',
    to: 'services',
    imgSrc: servicesImgSrc,
  },
  {
    title: 'Products',
    summary: 'Our shop window for products we have built and some thoughts on what’s coming up.',
    to: 'products',
    imgSrc: productsImgSrc,
  },
  {
    title: 'Partnerships',
    summary:
      'Got a project you would like to build, but need a technical partner? We can be your trusted advisors and build something great together.',
    to: 'partnerships',
    imgSrc: partnershipsImgSrc,
  },
]

const gridStyle = {
  gridTemplateColumns: '46% 46%',
  gridGap: '0px 8%',
}

const whatWeDoSectionStyle = {
  minHeight: 'calc(100vh)',
}

const WhatWeDoSection = () => {
  return (
    <Element name="what-we-do">
      <div
        className="container font-sans px-8 py-8 m-auto flex flex-col justify-around"
        style={whatWeDoSectionStyle}
      >
        <div className="md:w-5/6">
          <h1 className="text-grey text-sm uppercase font-light">What we do</h1>
          <h2 className="pt-8 pb-6 font-serif text-2xl font-light">
            Digital Services & Solutions Agency
          </h2>
          <div className="hidden md:inline  py-4">
            <div className="_grid-only" style={gridStyle}>
              {whatWeDo_gridOrder.map((p, i) => (
                <p key={i} className="text-sm text-grey-dark font-thin py-3">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="_grid-fallback" className="inline md:hidden py-4">
            {whatWeDo.map((p, i) => (
              <p key={i} className="text-sm text-grey-dark font-thin py-2">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between py-8 flex-col md:flex-row">
          {whatWeDoItems.map((item, i) => (
            <Link
              to={item.to}
              className="relative no-underline text-white text-center _text-shadow m-4"
            >
              <img src={item.imgSrc} />
              <div
                className="absolute pin flex flex-col content-center align-center justify-center bg-transparent-dark hover:bg-transparent-darker _transition-all"
                style={{
                  bottom: '3px',
                }}
              >
                <div>
                  <div className="text-2xl pb-6">{item.title}</div>
                  <div
                    className="mx-auto"
                    style={{
                      maxWidth: '220px',
                    }}
                  >
                    {item.summary}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default IndexPage
