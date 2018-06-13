import React from 'react'
import { Element } from 'react-scroll'
import Img from 'gatsby-image'

import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'
import bgImageCoverStyle from '../module/bgImageCoverStyle'

const ProductsPage = ({ data }) => {
  const BgImg = <Img style={bgImageCoverStyle} sizes={data.bgImage.childImageSharp.sizes} />
  return (
    <div>
      <PageBackground BgImg={BgImg}>
        <InitialPageHero
          title="Products"
          messages={[
            'We at Bit More Media love digital. Websites and Apps. That’s a fact.',
            'We like to create solutions to problems or issues an individual has, which can be aided or solved completely within the digital world.',
          ]}
          scrollTo="tourplanr"
          quote="Great companies are built on great products"
          quoteBy="Elon Musk, CEO SpaceX"
        />
      </PageBackground>
      <Element name="tourplanr">
        <SecondaryPageWrapper>
          <h1>TOURPLANR</h1>
        </SecondaryPageWrapper>
      </Element>
    </div>
  )
}

export default ProductsPage

export const query = graphql`
  query ProductsPageQuery {
    bgImage: file(relativePath: { eq: "images/products.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
