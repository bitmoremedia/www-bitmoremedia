import React from 'react'
import Link from 'gatsby-link'

import bgImgSrc from '../../images/marketing-background-image.jpg'
import PageBackground from '../../components/common/PageBackground'
import PageHero from '../../components/common/PageHero'

const MarketingPage = () => (
  <PageBackground bgImgSrc={bgImgSrc}>
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
