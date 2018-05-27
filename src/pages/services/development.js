import React from 'react'
import Link from 'gatsby-link'

import bgImgSrc from '../../images/software-dev-image.jpg'
import PageBackground from '../../components/common/PageBackground'
import PageHero from '../../components/common/PageHero'

const DevelopmentPage = () => (
  <PageBackground bgImgSrc={bgImgSrc}>
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
