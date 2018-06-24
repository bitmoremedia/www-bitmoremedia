import React from 'react'
import { Element } from 'react-scroll'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SplitPage from '../components/common/SplitPage'
import bgImageCoverStyle, { bgImageCoverStyle_zIndex0 } from '../module/bgImageCoverStyle'

const AboutPage = ({ data, location }) => (
  <Layout location={location}>
    <PageBackground
      BgImg={<Img style={bgImageCoverStyle} fluid={data.bgImage.childImageSharp.fluid} />}
    >
      <InitialPageHero
        title="About Us"
        messages={[
          'We are a London based digital agency specialising in end-to-end delivery of web, app and mobile projects, products and partnerships',
          'That explains the what of Bit More Media, but there is a lot more to us, how we came to be and why we love what we do (and why we’re good at it).',
        ]}
        scrollTo="the-journey"
        quote="It's not a faith in technology. It's faith in people"
        quoteBy="Steve Jobs, Apple"
      />
    </PageBackground>
    <Element name="the-journey">
      <SplitPage
        title="The Journey"
        paragraphs={[
          'Bit More Media has been on a journey, figuratively and literally.',
          'We first opened our doors in 2015, not long after the Directors met. In those three short years the Directors (who you may have worked out are married) established themselves in South London. They wed and travelled for three months around South America on their honeymoon. These points are key in knowing more about the Directors. ',
          'They are passionate about the world and visiting new places to explore cultures, landscapes and city life. Their aim is to constantly learn and develop. From this experience TourPlanr was born.',
          'So this husband and wife team really do take their work home with them, on holiday, and pretty much everywhere. They are passionate and dedicated to the world of digital and all it brings with it. That’s why this independent agency are excited for the future and to meet you.',
        ]}
        Img={
          <Img
            style={bgImageCoverStyle_zIndex0}
            fluid={data.theJourneyImage.childImageSharp.fluid}
          />
        }
        imageSide="right"
      />
    </Element>
    <SplitPage
      title="Our Experience"
      paragraphs={[
        'Russ, Founder/Director brings with him over ten years’ experience in IT consulting. He loves technology and is constantly seeking out new technologies and new ways of working. When he was younger he liked to think of himself as an inventor and this still rings true today with his constant attack on finding the right solutions to a consumer’s problem. Russ began his career as a consultant, working with clients such as BT, Pret and McDonalds. So apart from getting the odd free lunch, he honed not only his technical skills, but also his communications skills working with senior stakeholders. ',
        'Gemma, Director of Marketing and UX at Bit More Media, brings with her over fourteen years’ experience in the marketing world. From creating compelling brand experiences to designing great user journeys. She has a deep understanding of the user experience with a focus on their needs but also the ability to deliver profit improvements for a business. She has built and led successful teams, across functional departments and with external agencies. Gemma has worked with some big names in the marketplace from Virgin to PwC.',
      ]}
      Img={
        <Img
          style={bgImageCoverStyle_zIndex0}
          fluid={data.ourExperienceImage.childImageSharp.fluid}
        />
      }
      imageSide="left"
    />
    <SplitPage
      title="Designing & Creating"
      paragraphs={[
        'Designing and creating is Bit More Media’s hobby, passion and lifestyle.',
        'We take inspiration from everything and everyone around us. We are at the beginning of our journey and are looking forward to where it will take us, what we will create and the people we will solve problems for.',
        'Being ‘digital nomads’ also brings the costs down for you. We are lean and agile and can work anywhere in the world, from a shared office in London to a meet up in South America.',
      ]}
      Img={
        <Img
          style={bgImageCoverStyle_zIndex0}
          fluid={data.designingAndCreatingImage.childImageSharp.fluid}
        />
      }
      imageSide="right"
    />
    <SplitPage
      title="Our Staff"
      paragraphs={[
        'Although Bit More Media only has two main employees, we have the ability to onboard many valuable members from the IT and Marketing world.',
        'People with the same values and ways of working as us, that we have met throughout our travels and time on this earth.',
        'So if a user centred solution needs more ‘manpower’ on the project, then we have the ability to quickly add more highly skilled contributors. Just talk to us about your needs.',
      ]}
      Img={
        <Img style={bgImageCoverStyle_zIndex0} fluid={data.ourStaffImage.childImageSharp.fluid} />
      }
      imageSide="left"
    />
  </Layout>
)

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    bgImage: file(relativePath: { eq: "images/blonde-hair-blur-daylight.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    theJourneyImage: file(relativePath: { eq: "images/woman-on-rocks.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ourExperienceImage: file(relativePath: { eq: "images/guy-with-laptop-outside.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    designingAndCreatingImage: file(relativePath: { eq: "images/laptop-and-canoe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ourStaffImage: file(relativePath: { eq: "images/grand-central-station.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
