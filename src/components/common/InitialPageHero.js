import React from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'

import ScrollDownButton from '../../components/common/ScrollDownButton'
import { navBarHeight } from '../../tailwind/variables'

const InitialPageHero = ({ title, messages, scrollTo, quote, quoteBy }) => (
  <div className="flex flex-1 flex-col justify-between">
    <div
      style={{ marginTop: navBarHeight }}
      className="flex flex-1 flex-col justify-around container px-8 pb-8 mx-auto text-white subpixel-antialiased _text-shadow"
    >
      <div className="max-w-sm flex flex-1 flex-col justify-center">
        <h1 className="text-2xl py-8">{title}</h1>
        {messages &&
          messages.length &&
          messages.map((message, i) => (
            <p key={i} className="md:text-l leading-normal pb-8">
              {message}
            </p>
          ))}
      </div>

      <div className="text-center pb-2 md:pb-0 md:pt-8">
        <ScrollLink
          to={scrollTo}
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-white hover:text-orange _transition-all"
        >
          <ScrollDownButton />
        </ScrollLink>
      </div>
    </div>
    {quote && (
      <div className="bg-white text-center p-8 text-blue md:text-2xl md:tracking-wide leading-normal">
        <p>“{quote}.”</p>
        {quoteBy && <p>- {quoteBy}M</p>}
      </div>
    )}
  </div>
)

export default InitialPageHero
