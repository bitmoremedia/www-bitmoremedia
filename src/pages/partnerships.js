import React from 'react'
import { Element } from 'react-scroll'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SecondaryPageWrapper from '../components/common/SecondaryPageWrapper'
import Hr from '../components/common/Hr'
import InfoBanner from '../components/common/InfoBanner'
import FancyBullet from '../components/icon/FancyBullet'

import bgImageCoverStyle from '../module/bgImageCoverStyle'
import { navBarHeight } from '../tailwind/variables'
import colors from '../tailwind/colors'

const ourGuarantees = [
  'Partnerships model guarantees fluid project development',
  'Authentic contribution - nurtured mutual trust',
  'Accountability - deadlines & budgets are agreed and met',
  'Transparent communication',
  'Cultural alignment',
]

const whyPartner = [
  'Technical Support - We support our clients by providing timely 24/7 technical expertise and support.',
  'Lower risk - We contribute to lowering the risk for each partner organisation, wherever possible.',
  'Revenue Opportunities - Boost revenue by increasing customer engagement through feature-rich apps.',
  'Global Clientele - We provide mobile solutions to a global clientele on all major platforms.',
  'Tools and Resources - Identifying the apt tools and resources we help you with in-depth technical knowledge.',
  'Now Competitive Relationship - We believe in transparent relationship, highly desired value in the corporate world.',
]

const PartnershipsPage = ({ data, location }) => {
  const BgImg = <Img style={bgImageCoverStyle} fluid={data.bgImage.childImageSharp.fluid} />
  return (
    <Layout location={location}>
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
        <SecondaryPageWrapper fullWidth fullHeight={false} justifyClass="justify-start" bgClass="">
          <InfoBanner
            bgClass="bg-grey"
            headingTextClass="text-white px-2 md:px-8"
            heading={[
              'Our partnership model can work in many ways and in whatever capacity suits your business. From minor input to help shape the direction of the project, through to full management and build.',
            ]}
          />
          <InfoBanner
            bgClass="bg-white"
            contentTextClass="text-grey-dark px-2 md:px-8"
            content={[
              'In many cases, the project definitions may lay outside your core business area or core competencies. This is where we can help you to fill in the gaps. It’s no secret that small businesses have to invest in IT to remain competitive in a growing market.',
              'And the challenge is finding the right agency for the job.',
              'At Bit More Media, we work with you without risks and consequences. We develop the product you expect and goals are achieved.',
            ]}
            centreText={false}
          />
          <div className="container mx-auto pb-4">
            <div className="pb-4 px-4">
              <Hr color={colors.orange} fullWidth />
            </div>
            <div className="px-4 md:px-8 py-2">
              <h2 className="text-orange pb-4 font-serif text-2xl font-light">
                Our Guarantee To You
              </h2>
              <div className="px-0 md:px-8 py-2">
                {ourGuarantees.map(guarantee => (
                  <div className="py-2 flex items-center text-grey-darker">
                    <div className="pr-4">
                      <FancyBullet fill={colors.orange} />{' '}
                    </div>
                    {guarantee}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <InfoBanner
            bgClass="bg-grey"
            headingTextClass="text-white px-2 md:px-8"
            heading={['Why partner with us?']}
          />
          <div className="container mx-auto pt-4 pb-4">
            <div className="px-4 md:px-8 py-2">
              <div className="px-0 md:px-8 py-2 flex flex-wrap">
                {whyPartner.map(reason => (
                  <div className="py-4 px-4 flex items-center text-grey-darker md:w-1/2">
                    <div className="pr-4">
                      <FancyBullet fill={colors.orange} />{' '}
                    </div>
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <InfoBanner
            bgClass="bg-orange"
            headingTextClass="text-white px-2 md:px-8"
            contentTextClass="text-white text-lg px-2 md:px-8 py-4"
            heading={['Sounds good... what next?']}
            content={[
              'If you are interested in working with us as your digital design partner, drop us a line.',
              'We’ll be happy to discuss your needs and those of your customers and find the right level of partnership.',
            ]}
          />
        </SecondaryPageWrapper>
      </Element>
    </Layout>
  )
}

export default PartnershipsPage

export const query = graphql`
  query PartnershipsPageQuery {
    bgImage: file(relativePath: { eq: "images/partnerships.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
