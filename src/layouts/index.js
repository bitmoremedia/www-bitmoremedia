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
          title="BitMoreMedia"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
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
