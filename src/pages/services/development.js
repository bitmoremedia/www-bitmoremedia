import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'
import PageBackground from '../../components/common/PageBackground'
import PageHero from '../../components/common/PageHero'
import bgImageCoverStyle from '../../module/bgImageCoverStyle'

const DevelopmentPage = ({ data, location }) => (
  <Layout location={location}>
    <PageBackground
      BgImg={<Img style={bgImageCoverStyle} fluid={data.bgImage.childImageSharp.fluid} />}
    >
      <PageHero
        title="Development"
        mainText={[
          'We can assist your business with many complex requirements for bespoke web and app development. We have in-depth knowledge covering a broad range of programming languages. Our digital design & development solutions are competitively priced. You truly get value for money. So if your business is starting out or seeking a brand/website redesign, we have the experience & resources to deliver an optimised user-centric solution.',
        ]}
      />
    </PageBackground>
  </Layout>
)

export default DevelopmentPage

export const query = graphql`
  query DevelopmentPageQuery {
    bgImage: file(relativePath: { eq: "images/software-dev-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
