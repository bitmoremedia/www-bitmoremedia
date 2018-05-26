import React from 'react'

const PageBackground = ({ bgImgSrc, children }) => {
  const style = {
    backgroundImage: `url(${bgImgSrc})`,
  }
  return (
    <div
      className="min-h-screen relative bg-center bg-no-repeat bg-cover h-full flex flex-col"
      style={style}
    >
      {children}
    </div>
  )
}

export default PageBackground
