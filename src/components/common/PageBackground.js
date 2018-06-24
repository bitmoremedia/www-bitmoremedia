import React from 'react'

const PageBackground = ({ BgImg = null, children }) => {
  return (
    <div className="min-h-screen relative h-full flex flex-col">
      {BgImg}
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  )
}

export default PageBackground
