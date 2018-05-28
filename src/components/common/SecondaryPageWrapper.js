import React from 'react'

const SecondaryPageWrapper = ({ children, bgClass = 'bg-not-white' }) => (
  <div className={`${bgClass}`}>
    <div
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
      className={`min-h-screen container px-8 pb-6 md:pb-4 mx-auto flex flex-col justify-around ${bgClass}`}
    >
      {children}
    </div>
  </div>
)

export default SecondaryPageWrapper
