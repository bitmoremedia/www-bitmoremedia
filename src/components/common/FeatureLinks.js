import React from 'react'
import Link from 'gatsby-link'

const FeatureLinks = ({ features }) => {
  return (
    <div className="flex justify-between pt-6 flex-col md:flex-row">
      {features.map((item, i) => (
        <Link
          key={item.to}
          to={item.to}
          className="w-full md:w-100/32 no-underline text-white text-center _text-shadow my-4 hover:shadow-md _transition-all"
        >
          <div
            style={{
              background: `url(${item.imgSrc}) no-repeat`,
              backgroundSize: 'cover',
            }}
            className="flex flex-col justify-center _feature-link-card"
          >
            <div className="bg-transparent-dark hover:bg-transparent-darker flex-1 flex flex-col justify-center _transition-all">
              <div className="text-2xl md:text-xl lg:text-2xl pb-6">{item.title}</div>
              <div className="mx-auto text-base md:text-sm lg:text-base px-4 md:px-6">
                {item.summary}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default FeatureLinks