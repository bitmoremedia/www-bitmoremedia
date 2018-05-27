import React from 'react'
import Link from 'gatsby-link'

import bgImgSrc from '../../images/ux-background-image.jpg'
import PageBackground from '../../components/common/PageBackground'
import PageHero from '../../components/common/PageHero'

const UserExperiencePage = () => (
  <PageBackground bgImgSrc={bgImgSrc}>
    <PageHero
      title="User Experience (UX)"
      mainText={[
        'User Experience (UX) sits in that ‘sweet spot’ which gives value to both the customer and your business. It is the process of designing (digital or physical) products that are useful, easy to use, and delightful to interact with.',
      ]}
      subText={[
        'UX is about making sure customers find value in the product or service you are offering them. Ultimately, the goal of UX is to improve customer satisfaction and loyalty. User experience design which includes many disciplines—such as interaction design, information architecture, visual design and usability.',
        'For the user (or customer), a good UX design makes their life simpler as they understand the product or service and can get to the information they need quickly. It means they feel confident and competent completing their tasks. They are in complete control.',
        'For your business, it either makes or saves considerable amounts of money. It means your customers will not drop out of the buying process, through frustration or annoyance at not being able to find the information they need. It means you will keep existing customers and even gain new ones from positive word of mouth.',
      ]}
    />
  </PageBackground>
)

export default UserExperiencePage