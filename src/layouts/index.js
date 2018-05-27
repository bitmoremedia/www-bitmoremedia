import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Provider } from 'unstated'

import MobileNav from '../components/MobileNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../tailwind/index.css'

const TemplateWrapper = props => {
  const { location, children } = props
  return (
    <Provider>
      <div>
        <Helmet
          title="Bit More Media"
          meta={[
            {
              name: 'description',
              content:
                'Bit More Media - a London based digital agency, specialising in end-to-end delivery of web, app and mobile projects',
            },
            {
              name: 'keywords',
              content: 'web agency, london, web, app, mobile, products, services, partnerships',
            },
          ]}
        />
        <Header location={location} />
        <MobileNav />
        {children()}
        <Footer />
      </div>
    </Provider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
