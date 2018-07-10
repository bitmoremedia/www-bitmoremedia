import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import ScrollDownButton from '../../components/common/ScrollDownButton'
import { navBarHeight_px } from '../../tailwind/variables'

const InitialPageHero = ({
  title,
  titles,
  messages,
  scrollTo,
  scrollOffset = 0,
  quote,
  quoteBy,
  SecondaryContent,
}) => (
  <div className="flex flex-1 flex-col justify-between">
    <div
      style={{ marginTop: navBarHeight_px }}
      className="flex flex-1 flex-col justify-around container px-8 pb-8 mx-auto text-white subpixel-antialiased _text-shadow"
    >
      <div className="max-w-lg flex flex-1 flex-col justify-center">
        {title && <h1 className="text-5xl py-8">{title}</h1>}
        {titles &&
          titles.length > 0 && (
            <div className="py-6">
              {titles.map(title => (
                <h1 key={title} className="text-3xl py-1">
                  {title}
                </h1>
              ))}
            </div>
          )}
        {messages &&
          messages.length &&
          messages.map((message, i) => (
            <p key={i} className="text-lg md:text-xl leading-normal pb-8">
              {message}
            </p>
          ))}
      </div>
      {scrollTo && (
        <div className="text-center pb-2 md:pb-0 md:pt-8">
          <ScrollLink
            to={scrollTo}
            smooth={true}
            duration={500}
            offset={scrollOffset}
            className="cursor-pointer text-white hover:text-orange _transition-all"
          >
            <ScrollDownButton />
          </ScrollLink>
        </div>
      )}
    </div>
    {quote && (
      <div className="bg-white text-center p-8 text-blue md:text-2xl md:tracking-wide leading-normal">
        <p>“{quote}.”</p>
        {quoteBy && <p>- {quoteBy}</p>}
      </div>
    )}
    {SecondaryContent && <SecondaryContent />}
  </div>
)

export default InitialPageHero
