import React from 'react'
import Link from 'gatsby-link'

import bgImgSrc from '../images/architecture-booth-buildings.jpg'
import PageBackground from '../components/common/PageBackground'

const ContactPage = () => (
  <PageBackground bgImgSrc={bgImgSrc}>
    <div className="flex flex-1 items-center content-center justify-center">
      <h2 className="bg-yellow inline-block my-8 p-3">CONTACT PAGE</h2>
    </div>
  </PageBackground>
)

export default ContactPage
