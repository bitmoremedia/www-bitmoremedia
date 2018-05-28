import React from 'react'
import { Element } from 'react-scroll'

import bgImgSrc from '../images/partnerships.jpg'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'

const PartnershipsPage = () => (
  <div>
    <PageBackground bgImgSrc={bgImgSrc}>
      <InitialPageHero
        title="Partnerships"
        messages={[
          'This is a line of work we are really excited about.',
          'The chance to create something special together, from the ground up. Making it right for your business and right for customers.',
        ]}
        scrollTo="the-model"
        quote="Partnering with us, feels like a simple extension of your own team"
      />
    </PageBackground>
    <Element name="the-model">
      <SecondaryPageWrapper>
        <h1>THE MODEL</h1>
      </SecondaryPageWrapper>
    </Element>
  </div>
)

export default PartnershipsPage
