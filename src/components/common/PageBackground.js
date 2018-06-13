import React from 'react'

const PageBackground = ({ bgImgSrc, overlayBackground = 'rgba(2, 2, 2, 0.5)', children }) => {
  return (
    <div className="min-h-screen relative h-full flex flex-col">
      <img
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          objectFit: 'cover',
          // below is a hack to support ie (also requires the object-fit-images polyfill)
          fontFamily: 'object-fit: cover',
        }}
        src={bgImgSrc}
      />
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
