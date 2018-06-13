import React from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import Img from 'gatsby-image'

import PageBackground from '../components/common/PageBackground'
import ScrollDownButton from '../components/common/ScrollDownButton'
import FeatureLinks from '../components/common/FeatureLinks'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'
import bgImageCoverStyle from '../module/bgImageCoverStyle'

import servicesImgSrc from '../images/services.jpg'
import productsImgSrc from '../images/products-tile.jpg'
import partnershipsImgSrc from '../images/partnerships-tile.jpg'

const styles = {
  main: {
    paddingTop: '100px',
  },
}

const IndexPage = ({ data }) => {
  const BgImg = <Img style={bgImageCoverStyle} sizes={data.bgImage.childImageSharp.sizes} />
  return (
    <div>
      <PageBackground BgImg={BgImg} overlayBackground="transparent">
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex-grow flex flex-col flex-grow justify-around font-sans text-white subpixel-antialiased _text-shadow">
            <div style={styles.main} className="container px-8 mx-auto">
              <div className="text-base uppercase">We do a few things at bit more media.</div>
              <div className="text-2xl md:text-4xl py-8">
                <div>Web, App Design and Build.</div>
                <div>User Experience.</div>
                <div>Marketing.</div>
              </div>
              <div className="text-sm">
                We can help you deliver the right solution for your customers.
              </div>
            </div>
            <div className="text-center py-4">
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
    summary: 'We offer consulting services in: Development, UX & Marketing',
    to: 'services',
    imgSrc: servicesImgSrc,
  },
  {
    title: 'Products',
    summary: 'In-house built apps. Crafted with passion and the latest technology',
    to: 'products',
    imgSrc: productsImgSrc,
  },
  {
    title: 'Partnerships',
    summary: 'Mutual interest and investment. Let’s build something great together',
    to: 'partnerships',
    imgSrc: partnershipsImgSrc,
  },
]

const gridStyle = {
  gridTemplateColumns: '46% 46%',
  gridGap: '0px 8%',
}

const WhatWeDoSection = () => {
  return (
    <SecondaryPageWrapper>
      <Element name="what-we-do">
        <div className="xl:w-5/6 font-sans">
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
        <FeatureLinks features={whatWeDoItems} />
      </Element>
    </SecondaryPageWrapper>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    bgImage: file(relativePath: { eq: "images/architecture-bay-blonde.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
