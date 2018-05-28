import React from 'react'

const SecondaryPageWrapper = ({ children }) => (
  <div
    style={{ paddingTop: '80px', paddingBottom: '80px' }}
    className="min-h-screen container px-8 pb-6 md:pb-4 mx-auto flex flex-col justify-around"
  >
    {children}
  </div>
)

export default SecondaryPageWrapper
