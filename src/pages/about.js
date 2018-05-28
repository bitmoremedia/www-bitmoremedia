import React from 'react'
import { Element } from 'react-scroll'

import bgImgSrc from '../images/blonde-hair-blur-daylight.jpg'
import theJourneyImgSrc from '../images/woman-on-rocks.jpg'
import ourExperienceImgSrc from '../images/guy-with-laptop-outside.jpg'
import designingAndCreatingImgSrc from '../images/laptop-and-canoe.jpg'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'
import SplitPage from '../components/common/SplitPage'

const AboutUsSummary = () => (
  <div className="bg-white flex justify-center align-center p-6">
    <div className="max-w-md bg-white flex flex-col justify-center align-center text-center">
      {/* <h1 className="text-blue text-xl">The Technical Bit </h1> */}
      <p className="py-4 text-grey-true">
        We are a London based digital agency specialising in end-to-end delivery of web, app and
        mobile projects, products and partnerships.
      </p>
      <p className="py-4 text-grey-true">
        That explains the what of Bit More Media, but there is a lot more to us, how we came to be
        and why we love what we do (and why we’re good at it).{' '}
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
        scrollOffset={0}
      />
    </PageBackground>
    <Element name="the-journey">
      <SecondaryPageWrapper bgClass="bg-green">
        <SplitPage
          title="The Journey"
          paragraphs={['Some blurb', 'Some more blurb']}
          imageSrc={theJourneyImgSrc}
        />
      </SecondaryPageWrapper>
    </Element>
    <SecondaryPageWrapper bgClass="bg-red">
      <SplitPage
        title="Our Experience"
        paragraphs={['Some blurb', 'Some more blurb']}
        imageSrc={ourExperienceImgSrc}
      />
    </SecondaryPageWrapper>
    <SecondaryPageWrapper>
      <SplitPage
        title="Designing & Creating"
        paragraphs={['Some blurb', 'Some more blurb']}
        imageSrc={designingAndCreatingImgSrc}
      />
    </SecondaryPageWrapper>
  </div>
)

export default AboutPage
