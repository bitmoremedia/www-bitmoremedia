import React from 'react'
import Img from 'gatsby-image'

import PageBackground from '../../components/common/PageBackground'
import PageHero from '../../components/common/PageHero'
import bgImageCoverStyle from '../../module/bgImageCoverStyle'

const DevelopmentPage = ({ data }) => (
  <PageBackground
    BgImg={<Img style={bgImageCoverStyle} sizes={data.bgImage.childImageSharp.sizes} />}
  >
    <PageHero
      title="Development"
      mainText={[
        'We can assist your business with many complex requirements for bespoke webdevelopment. Our developers have in-depth knowledge covering a broad range of programming language, and can help with projects which include:',
      ]}
      subText={[
        'Our digital design and development solutions are competitively priced. You truly get value for money. So if your business is starting out or seeking a brand/website redesign, we have the experience and resources to deliver an optimised user-centric solution.',
      ]}
    />
  </PageBackground>
)

export default DevelopmentPage

export const query = graphql`
  query DevelopmentPageQuery {
    bgImage: file(relativePath: { eq: "images/software-dev-image.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
