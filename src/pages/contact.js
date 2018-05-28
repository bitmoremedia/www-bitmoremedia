import React from 'react'

import bgImgSrc from '../images/architecture-booth-buildings.jpg'
import PageBackground from '../components/common/PageBackground'
import InitialPageHero from '../components/common/InitialPageHero'

const ContactDetails = () => (
  <div className="bg-white flex justify-center align-center py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="border-orange md:border-r flex md:justify-center md:w-2/3">
        <div className=" md:max-w-sm md:text-center">
          <a className="text-blue text-xl" href="mailto: getintouch@bitmoremedia.com">
            getintouch@bitmoremedia.com
          </a>
          <p className="py-4 text-sm text-grey-true leading-normal">
            Give us a call, drop us a message or connect with us via social media. We’d love to hear
            from you and discuss how we can help deliver the right solution for your customers.
            Whether it’s Web and App Design & Build, User Experience or Marketing.
          </p>
        </div>
      </div>

      <div className="md:w-1/3 flex py-4 md:py-0 md:justify-center md:align-center">
        <div className="flex flex-col justify-around align-center">
          <div>SOCIAL LINKS</div>
          <div>
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

const ContactPage = () => (
  <div>
    <PageBackground bgImgSrc={bgImgSrc}>
      <InitialPageHero
        title="Talk To A Human"
        messages={[
          'You’re not going to hit a phone menu option when you call us. You’ll just speak to us directly.',
          'Your email won’t go into the abyss never to be seen again. You’ll get straight through to us and we’ll respond to your message the same day.',
        ]}
        SecondaryContent={ContactDetails}
      />
    </PageBackground>
  </div>
)

export default ContactPage
