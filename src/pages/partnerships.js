import React from 'react'
import { Element } from 'react-scroll'
import Img from 'gatsby-image'

import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'
import bgImageCoverStyle from '../module/bgImageCoverStyle'

const PartnershipsPage = ({ data }) => {
  const BgImg = <Img style={bgImageCoverStyle} sizes={data.bgImage.childImageSharp.sizes} />
  return (
    <div>
      <PageBackground BgImg={BgImg}>
        <InitialPageHero
          title="Partnerships"
          messages={[
            'This is a line of work we are really excited about.',
            'The chance to create something special together, from the ground up. Making it right for your business and right for customers.',
          ]}
          scrollTo="the-model"
          quote="Partnering with us, is like an extension of your own team"
          quoteBy="Russ Winborn, Bit More Media"
        />
      </PageBackground>
      <Element name="the-model">
        <SecondaryPageWrapper>
          <h1>THE MODEL</h1>
        </SecondaryPageWrapper>
      </Element>
    </div>
  )
}

export default PartnershipsPage

export const query = graphql`
  query PartnershipsPageQuery {
    bgImage: file(relativePath: { eq: "images/partnerships.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
