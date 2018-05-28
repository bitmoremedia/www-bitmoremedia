import React from 'react'

import { navBarHeight } from '../../tailwind/variables'

const PageHero = ({ title, mainText, subText }) => (
  <div className="flex flex-1">
    <div className="flex flex-1 flex-col justify-around text-white subpixel-antialiased">
      <div
        style={{ marginTop: navBarHeight }}
        className="w-100 md:w-4/5 xl:w-1/2 flex-1 bg-white-medium-translucent flex flex-col justify-center items-end"
      >
        <div className="_page-hero pl-2 pb-6">
          <h1 className="text-2xl md:text-4xl py-8 text-blue">{title}</h1>
          <div>
            {mainText &&
              mainText.length &&
              mainText.map((p, i) => (
                <p key={i} className="pt-4 text-grey-darkest leading-normal">
                  {p}
                </p>
              ))}

            {subText &&
              subText.length &&
              subText.map((p, i) => (
                <p key={i} className="pt-4 text-grey-darkest text-sm leading-normal">
                  {p}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PageHero
