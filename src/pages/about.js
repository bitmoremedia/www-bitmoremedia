import React from 'react'
import { Element } from 'react-scroll'

import bgImgSrc from '../images/blonde-hair-blur-daylight.jpg'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'

const AboutUsSummary = () => (
  <div className="bg-white flex justify-center align-center p-6">
    <div className="max-w-md bg-white flex flex-col justify-center align-center text-center">
      {/* <h1 className="text-blue text-xl">The Technical Bit </h1> */}
      <p className="py-4 text-grey-true">
        We are a London based digital agency specialising in end-to-end delivery of web, app and
        mobile projects, products and partnerships.
      </p>
      <p className="py-4 text-grey-true">
        So, that explains the what of Bit More Media, but there is a lot more to us, how we came to
        be and why we love what we do (and why we’re good at it).{' '}
      </p>
    </div>
  </div>
)

const AboutPage = () => (
  <div>
    <PageBackground bgImgSrc={bgImgSrc}>
      <InitialPageHero
        titles={['Bit More Media.', 'A Digital Services & Solutions Agency']}
        SecondaryContent={AboutUsSummary}
        scrollTo="the-journey"
      />
    </PageBackground>
    <SecondaryPageWrapper>
      <Element name="the-journey">
        <h1>THE JOURNEY</h1>
      </Element>
    </SecondaryPageWrapper>
  </div>
)

export default AboutPage
