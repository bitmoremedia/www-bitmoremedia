import React from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'unstated'
import { StaticQuery, graphql } from 'gatsby'

import MobileNav from './MobileNav'
import Header from './Header'
import Footer from './Footer'
import '../tailwind/index.css'

const Layout = ({ location, children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Provider>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
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
          {children}
          <Footer />
        </div>
      </Provider>
    )}
  />
)

export default Layout
