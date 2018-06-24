import React from 'react'

import Layout from '../components/Layout'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div className="text-center">
      <h2 className="bg-yellow inline-block my-8 p-3">404 PAGE</h2>
    </div>
  </Layout>
)

export default NotFoundPage
