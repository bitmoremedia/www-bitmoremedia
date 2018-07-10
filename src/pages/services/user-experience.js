import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'
import PageBackground from '../../components/common/PageBackground'
import PageHero from '../../components/common/PageHero'
import bgImageCoverStyle from '../../module/bgImageCoverStyle'

const UserExperiencePage = ({ data, location }) => (
  <Layout location={location}>
    <PageBackground
      BgImg={<Img style={bgImageCoverStyle} fluid={data.bgImage.childImageSharp.fluid} />}
    >
      <PageHero
        title="User Experience (UX)"
        mainText={[
          'User Experience (UX) sits in that ‘sweet spot’ which gives value to both the customer and your business. It’s the process of designing products that are useful, easy to use, and delightful to interact with.',
          'UX is about making sure customers find value in the product or service you are offering them. Ultimately, the goal of UX is to improve customer satisfaction and loyalty. ',
        ]}
        subText={[
          'For the user a good UX design makes their life simpler as they understand the product or service and can get to information they need quickly. It means they feel confident and competent completing their tasks. They are in complete control. For your business, it either makes or saves considerable amounts of money. It means your customers will not drop out of the buying process, through frustration or annoyance at not being able to find what they need. It means you will keep existing customers and even gain new ones from positive word of mouth.',
        ]}
      />
    </PageBackground>
  </Layout>
)

export default UserExperiencePage

export const query = graphql`
  query UXPageQuery {
    bgImage: file(relativePath: { eq: "images/ux-background-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
