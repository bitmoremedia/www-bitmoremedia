import React from 'react'

const PageBackground = ({ bgImgSrc, overlayBackground = 'rgba(2, 2, 2, 0.5)', children }) => {
  return (
    <div
      className="min-h-screen relative bg-center bg-no-repeat bg-cover h-full flex flex-col"
      style={{
        backgroundImage: `url(${bgImgSrc})`,
      }}
    >
      <div
        className="flex flex-col flex-1"
        style={{
          background: overlayBackground,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default PageBackground
