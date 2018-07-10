import React from 'react'
import { Element } from 'react-scroll'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'
import PageBackground from '../../components/common/PageBackground'
import FeatureLinks from '../../components/common/FeatureLinks'
import InitialPageHero from '../../components/common/InitialPageHero'
import SecondaryPageWrapper from '../../components/common/SecondaryPageWrapper'
import bgImageCoverStyle, { bgImageCoverStyle_zIndex0 } from '../../module/bgImageCoverStyle'

const ServicesPage = ({ data, location }) => {
  const BgImg = <Img style={bgImageCoverStyle} fluid={data.bgImage.childImageSharp.fluid} />
  const services = [
    {
      title: 'Development',
      to: '/services/development',
      summary: 'We build bespoke, immersive & scalable digital experiences for your audience',
      Img: (
        <Img
          style={bgImageCoverStyle_zIndex0}
          fluid={data.softwareDevelopmentImage.childImageSharp.fluid}
        />
      ),
    },
    {
      title: 'User Experience',
      to: '/services/user-experience',
      summary:
        'We help you design products which are useful, easy to use & delightful to interact with',
      Img: <Img style={bgImageCoverStyle_zIndex0} fluid={data.uxImage.childImageSharp.fluid} />,
    },
    {
      title: 'Marketing',
      to: '/services/marketing',
      summary: 'Strategy & planning. Analysis & measurement. We craft integrated brand campaigns',
      Img: (
        <Img style={bgImageCoverStyle_zIndex0} fluid={data.marketingImage.childImageSharp.fluid} />
      ),
    },
  ]

  return (
    <Layout location={location}>
      <PageBackground BgImg={BgImg}>
        <InitialPageHero
          title="Services"
          messages={['We offer consulting services in Development, UX & Marketing']}
          scrollTo="service-list"
          quote="When you remove layers, simplicity and speed happen"
          quoteBy="Ginni Rometty, CEO, IBM"
        />
      </PageBackground>
      <Element name="service-list">
        <SecondaryPageWrapper>
          <h1 className="text-grey text-lg uppercase font-light">Our Services</h1>
          <FeatureLinks features={services} />
        </SecondaryPageWrapper>
      </Element>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
  query ServicesPageQuery {
    bgImage: file(relativePath: { eq: "images/services.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    softwareDevelopmentImage: file(relativePath: { eq: "images/software-dev-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    uxImage: file(relativePath: { eq: "images/ux-background-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    marketingImage: file(relativePath: { eq: "images/marketing-background-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
