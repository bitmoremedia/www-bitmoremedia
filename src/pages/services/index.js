import React from 'react'
import { Element } from 'react-scroll'
import Img from 'gatsby-image'

import PageBackground from '../../components/common/PageBackground'
import FeatureLinks from '../../components/common/FeatureLinks'
import InitialPageHero from '../../components/common/InitialPageHero'
import SecondaryPageWrapper from '../../components/common/SecondaryPageWrapper'
import bgImageCoverStyle, { bgImageCoverStyle_zIndex0 } from '../../module/bgImageCoverStyle'

import softwareDevelopmentImgSrc from '../../images/software-dev-image.jpg'
import uxImgSrc from '../../images/ux-background-image.jpg'
import marketingImgSrc from '../../images/marketing-background-image.jpg'

const ServicesPage = ({ data }) => {
  const BgImg = <Img style={bgImageCoverStyle} sizes={data.bgImage.childImageSharp.sizes} />
  const services = [
    {
      title: 'Development',
      to: '/services/development',
      summary: 'We build bespoke, immersive & scalable digital experiences for your audience',
      Img: (
        <Img
          style={bgImageCoverStyle_zIndex0}
          sizes={data.softwareDevelopmentImage.childImageSharp.sizes}
        />
      ),
    },
    {
      title: 'User Experience',
      to: '/services/user-experience',
      summary:
        'We help you to design products which are useful, easy to use, and delightful to interact with',
      Img: <Img style={bgImageCoverStyle_zIndex0} sizes={data.uxImage.childImageSharp.sizes} />,
    },
    {
      title: 'Marketing',
      to: '/services/marketing',
      summary: 'Strategy & planning. Analysis & measurement. We craft integrated brand campaigns',
      Img: (
        <Img style={bgImageCoverStyle_zIndex0} sizes={data.marketingImage.childImageSharp.sizes} />
      ),
    },
  ]

  return (
    <div>
      <PageBackground BgImg={BgImg}>
        <InitialPageHero
          title="Services"
          messages={['We offer consulting services in: Development, UX & Marketing']}
          scrollTo="service-list"
          quote="When you remove layers, simplicity and speed happen"
          quoteBy="Ginni Rometty, CEO, IBM"
        />
      </PageBackground>
      <Element name="service-list">
        <SecondaryPageWrapper>
          <h1 className="text-grey text-sm uppercase font-light">Our Services</h1>
          <FeatureLinks features={services} />
        </SecondaryPageWrapper>
      </Element>
    </div>
  )
}

export default ServicesPage

export const query = graphql`
  query ServicesPageQuery {
    bgImage: file(relativePath: { eq: "images/services.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    softwareDevelopmentImage: file(relativePath: { eq: "images/software-dev-image.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    uxImage: file(relativePath: { eq: "images/ux-background-image.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    marketingImage: file(relativePath: { eq: "images/marketing-background-image.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
