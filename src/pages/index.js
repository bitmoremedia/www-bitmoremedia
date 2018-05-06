import React from 'react'
import Link from 'gatsby-link'

import bgImgSrc from '../images/architecture-bay-blonde.jpg'
import PageBackground from '../components/common/PageBackground'
import ScrollDownButton from '../components/common/ScrollDownButton'

const IndexPage = () => {
  return (
    <PageBackground bgImgSrc={bgImgSrc}>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex-grow flex flex-col flex-grow justify-around font-sans text-white subpixel-antialiased text-shadow">
          <div className="container px-4 mx-auto">
            <div className="text-base uppercase">We do a few things at bit more media.</div>
            <div className="text-3xl py-8">
              <div className="">Web, App Design and Build.</div>
              <div className="">User Experience.</div>
              <div className="">Marketing.</div>
            </div>
            <div className="text-sm">
              We can help you deliver the right solution for your customers.
            </div>
          </div>
        </div>
        <div className="text-center pb-6">
          <ScrollDownButton />
        </div>
      </div>
    </PageBackground>
  )
}

export default IndexPage
