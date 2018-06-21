import React from 'react'
import { Element } from 'react-scroll'
import Img from 'gatsby-image'

import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'
import bgImageCoverStyle from '../module/bgImageCoverStyle'
import InfoBanner from '../components/common/InfoBanner'
import { navBarHeight } from '../tailwind/variables'

const PartnershipsPage = ({ data }) => {
  const BgImg = <Img style={bgImageCoverStyle} sizes={data.bgImage.childImageSharp.sizes} />
  return (
    <div>
      <PageBackground BgImg={BgImg}>
        <InitialPageHero
          title="Partnerships"
          messages={[
            'This is a line of work we are really excited about.',
            'The chance to create something special together, from the ground up. Making it right for your business and right for customers.',
          ]}
          scrollTo="the-model"
          scrollOffset={Number(`-${navBarHeight}`)}
          quote="Partnering with us, is like an extension of your own team"
          quoteBy="Russ Winborn, Bit More Media"
        />
      </PageBackground>
      <Element name="the-model">
        <SecondaryPageWrapper fullWidth fullHeight={false} justifyClass="justify-start">
          <InfoBanner
            bgClass="bg-grey"
            textClass="text-white"
            type="heading"
            content={[
              'Our partnership model can work in many ways and in whatever capacity suits your business; from minor input to help shape the direction of the project, through to full management and build.',
            ]}
          />
          <InfoBanner
            bgClass="bg-white"
            content={[
              'In many cases, the project definitions may lay outside your core business area or core competencies. This is where we can help you to fill in the gaps. It’s no secret that small businesses have to invest in IT to remain competitive in a growing market.',
              'And the challenge is finding the right agency for the job.',
              'At Bit More Media, we work with you without risks and consequences. We develop the product you expect and goals are achieved.',
            ]}
          />
        </SecondaryPageWrapper>
      </Element>
    </div>
  )
}

export default PartnershipsPage

export const query = graphql`
  query PartnershipsPageQuery {
    bgImage: file(relativePath: { eq: "images/partnerships.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
