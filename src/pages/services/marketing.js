import React from 'react'
import Img from 'gatsby-image'

import PageBackground from '../../components/common/PageBackground'
import PageHero from '../../components/common/PageHero'
import bgImageCoverStyle from '../../module/bgImageCoverStyle'

const MarketingPage = ({ data }) => (
  <PageBackground
    BgImg={<Img style={bgImageCoverStyle} sizes={data.bgImage.childImageSharp.sizes} />}
  >
    <PageHero
      title="Marketing"
      mainText={[
        'At the heart of any good marketing campaign is the users’ needs and motivations. We need to know what their end goal is and how your product or service will help them to achieve this. ',
        'Through a discovery phase, with customers and key stakeholders, we will uncover the key USP for the campaign, which will shape the way we market the product and talk to your customers.',
      ]}
    />
  </PageBackground>
)

export default MarketingPage

export const query = graphql`
  query MarketingPageQuery {
    bgImage: file(relativePath: { eq: "images/marketing-background-image.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
