import React from 'react'

const PageBackground = ({ bgImgSrc, children }) => {
  const style = {
    backgroundImage: `url(${bgImgSrc})`,
    height: '600px',
  }
  return (
    <div
      className="min-h-screen relative bg-center bg-no-repeat bg-cover h-full flex flex-col justify-between"
      style={style}
    >
      {children}
    </div>
  )
}

export default PageBackground
