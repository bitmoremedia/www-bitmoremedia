import React from 'react'
import { Element } from 'react-scroll'

import bgImgSrc from '../images/products.jpg'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'

const ProductsPage = () => (
  <div>
    <PageBackground bgImgSrc={bgImgSrc}>
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
    <SecondaryPageWrapper>
      <Element name="tourplanr">
        <h1>TOURPLANR</h1>
      </Element>
    </SecondaryPageWrapper>
  </div>
)

export default ProductsPage
