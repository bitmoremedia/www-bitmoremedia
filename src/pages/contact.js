import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
// import SocialLinks from '../components/common/SocialLinks'
import tailwindColors from '../tailwind/colors'
import EmailIcon from '../components/icon/Email'
import bgImageCoverStyle from '../module/bgImageCoverStyle'

const ContactDetails = () => (
  <div className="bg-white flex justify-center align-center py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="border-orange md:border-r flex md:justify-center md:w-2/3">
        <div className=" md:max-w-sm md:text-center">
          <a
            className="text-blue text-xl no-underline hover:underline"
            href="mailto: getintouch@bitmoremedia.com"
          >
            <div className="flex items-center justify-center">
              <EmailIcon
                width="32px"
                height="32px"
                iconColor={tailwindColors['blue']}
                className="mr-2"
              />
              getintouch@bitmoremedia.com
            </div>
          </a>
          <p className="py-4 text-sm text-grey-true leading-normal">
            Drop us a message or connect with us via social media. We’d love to hear from you and
            discuss how we can help deliver the right solution for your customers. Whether it’s Web
            and App Design & Build, User Experience or Marketing.
          </p>
        </div>
      </div>

      <div className="md:w-1/3 flex py-4 md:py-0 md:justify-center md:align-center">
        <div className="flex flex-col justify-around align-center">
          {/* <SocialLinks
            iconSize={40}
            iconColor="white"
            iconBackgroundColor={tailwindColors['grey-dark']}
            containerClass="flex justify-between"
          /> */}
          <div className="pt-6 md:pt-0">
            <h4 className="text-blue">Home Office</h4>
            <div className="text-sm text-grey-true leading-normal">
              Crystal Palace, South London
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ContactPage = ({ data, location }) => (
  <Layout location={location}>
    <PageBackground
      BgImg={<Img style={bgImageCoverStyle} fluid={data.bgImage.childImageSharp.fluid} />}
    >
      <InitialPageHero
        title="Talk To A Human"
        messages={[
          // 'You’re not going to hit a phone menu option when you call us. You’ll just speak to us directly.',
          'Your email won’t go into the abyss never to be seen again. You’ll get straight through to us and we’ll respond to your message the same day.',
        ]}
        SecondaryContent={ContactDetails}
      />
    </PageBackground>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    bgImage: file(relativePath: { eq: "images/architecture-booth-buildings.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
