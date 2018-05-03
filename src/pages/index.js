import React from 'react'
import Link from 'gatsby-link'

import bgImgSrc from '../images/architecture-bay-blonde.jpg'
import PageBackground from '../components/common/PageBackground'
import ScrollDownButton from '../components/common/ScrollDownButton'

const IndexPage = () => {
  return (
    <PageBackground bgImgSrc={bgImgSrc}>
      <div />
      <div className="text-center pb-6">
        <ScrollDownButton />
      </div>
    </PageBackground>
  )
}

export default IndexPage
