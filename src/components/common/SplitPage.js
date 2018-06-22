import React from 'react'
import { bgImageCoverStyle_zIndex0 } from '../../module/bgImageCoverStyle'

const SplitPage = ({
  title,
  paragraphs,
  imageSrc,
  Img = null,
  imageSide = 'right',
  bgClass = 'bg-not-white',
}) => {
  // right to left split is relevant only on mobile resolutions
  const rightToLeft = imageSide === 'right' ? 'md:flex-row-reverse' : ''
  return (
    <div className={`min-h-screen ${bgClass} flex flex-col md:flex-row ${rightToLeft}`}>
      <div className="relative h-64 md:min-h-screen md:w-1/2">
        {imageSrc && <img style={bgImageCoverStyle_zIndex0} src={imageSrc} />}
        {Img}
      </div>
      <div className="py-8 md:py-0 md:w-1/2 flex justify-center items-center flex-col">
        <div className="max-w-sm px-8 lg:px-4">
          <h2 className="py-4 text-blue">{title}</h2>
          <div className="">
            {paragraphs.map((p, i) => (
              <div className="py-2 leading-tight" key={i}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitPage
