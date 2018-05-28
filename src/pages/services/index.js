import React from 'react'
import { Element } from 'react-scroll'

import bgImgSrc from '../../images/services.jpg'
import PageBackground from '../../components/common/PageBackground'
import FeatureLinks from '../../components/common/FeatureLinks'
import InitialPageHero from '../../components/common/InitialPageHero'
import SecondaryPageWrapper from '../../components/common/SecondaryPageWrapper'

import softwareDevelopmentImgSrc from '../../images/software-dev-image.jpg'
import uxImgSrc from '../../images/ux-background-image.jpg'
import marketingImgSrc from '../../images/marketing-background-image.jpg'

const services = [
  {
    title: 'Development',
    imgSrc: softwareDevelopmentImgSrc,
    to: '/services/development',
    summary: 'We build bespoke, immersive & scalable digital experiences for your audience',
  },
  {
    title: 'User Experience',
    imgSrc: uxImgSrc,
    to: '/services/user-experience',
    summary:
      'We help you to design products which are useful, easy to use, and delightful to interact with',
  },
  {
    title: 'Marketing',
    imgSrc: marketingImgSrc,
    to: '/services/marketing',
    summary: 'Strategy & planning. Analysis & measurement. We craft integrated brand campaigns',
  },
]

const ServicesPage = () => (
  <div>
    <PageBackground bgImgSrc={bgImgSrc} overlayBackground="rgba(2, 2, 2, 0.3)">
      <InitialPageHero
        title="Services"
        messages={['We offer consulting services in: Development, UX & Marketing']}
        scrollTo="service-list"
        quote="When you remove layers, simplicity and speed happen"
        quoteBy="Ginni Rometty, CEO, IBM"
      />
    </PageBackground>
    <Element name="service-list">
      <SecondaryPageWrapper>
        <h1 className="text-grey text-sm uppercase font-light">Our Services</h1>
        <FeatureLinks features={services} />
      </SecondaryPageWrapper>
    </Element>
  </div>
)

export default ServicesPage
