import React from 'react'
import bgImageCoverStyle from '../../module/bgImageCoverStyle'

const PageBackground = ({ BgImg = null, bgImgSrc, children }) => {
  return (
    <div className="min-h-screen relative h-full flex flex-col">
      {bgImgSrc && <img style={bgImageCoverStyle} src={bgImgSrc} />}
      {BgImg}
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  )
}

export default PageBackground
