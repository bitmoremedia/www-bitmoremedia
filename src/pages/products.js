import React from 'react'
import { Element } from 'react-scroll'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'
import SplitPage from '../components/common/SplitPage'
import bgImageCoverStyle, { bgImageCoverStyle_zIndex0 } from '../module/bgImageCoverStyle'

const ProductsPage = ({ data, location }) => {
  const BgImg = <Img style={bgImageCoverStyle} fluid={data.bgImage.childImageSharp.fluid} />
  return (
    <Layout location={location}>
      <PageBackground BgImg={BgImg}>
        <InitialPageHero
          title="Products"
          messages={[
            'We at Bit More Media love digital. Websites and Apps. That’s a fact.',
            'We like to create solutions to problems or issues an individual has, which can be aided or solved completely within the digital world.',
          ]}
          scrollTo="tourplanr"
          quote="Great companies are built on great products"
          quoteBy="Elon Musk, CEO SpaceX"
        />
      </PageBackground>
      <Element name="tourplanr">
        <SplitPage
          title="Tourplanr"
          paragraphs={[
            'When we, at Bit More Media, come across something that doesn’t quite work for us, we want to develop a new solution.',
            'This happened to us when planning a three month tour of South America. Flights bookings, hotel bookings, activities. So much information we needed in one place, in an easy to access and simple to digest format.',
            'We searched the app store and online to find something we could use, initially creating an online spreadsheet. Whilst this held all the information we needed, it wasn’t easy to read on a mobile device; the very thing we would be using on our travels.',
            'And so the idea for Tourplanr was born. An easy to use, easy to input data and easy to read plan of our trip. As we travelled around South America, through ten countries, on over 20 flights, we had the timings and details for each excursion. It made it simpler to go between activities and across borders.',
          ]}
          Img={
            <Img
              style={bgImageCoverStyle_zIndex0}
              fluid={data.tourplanrImage1.childImageSharp.fluid}
            />
          }
          imageSide="right"
        />
        <SplitPage
          title="Travelling Made Easy"
          paragraphs={[
            'It made planning the trip easier too, as we could plot on a map where our travels would take us and what area we needed to stay in, to make the next day seamless. It meant we cut down on travelling time, and on travel expenses. It meant we got to spend more of our time in this extraordinary continent exploring.',
            'Tourplanr was built in <insert tech talk> and can be accessed on or offline. This allows the user to input all data and get the correct timings before they travel. Once they are in another country - in which they may not be able to use data or wifi - it allows them to load up the app which already has there information stored and access flight times, their flight number etc.',
            'This app makes travel easier. It gives the user peace of mind. It also allows the user to share their journey with family and friends, so they can figuratively join them on their adventure.',
          ]}
          Img={
            <Img
              style={bgImageCoverStyle_zIndex0}
              fluid={data.tourplanrImage2.childImageSharp.fluid}
            />
          }
          imageSide="left"
        />
      </Element>
    </Layout>
  )
}

export default ProductsPage

export const query = graphql`
  query ProductsPageQuery {
    bgImage: file(relativePath: { eq: "images/products.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, duotone: { highlight: "#e4e3e3", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tourplanrImage1: file(relativePath: { eq: "images/tourplanr-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tourplanrImage2: file(relativePath: { eq: "images/tourplanr-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
