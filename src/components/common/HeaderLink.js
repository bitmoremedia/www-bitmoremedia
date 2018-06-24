import React from 'react'
import { push } from 'gatsby'

const HeaderLink = ({ title, path, onNavigate, active }) => {
  const textColorClass = active ? 'text-orange-dark' : 'text-orange '
  return (
    <a
      onClick={() => {
        push(path)
        if (onNavigate) {
          onNavigate()
        }
      }}
      className={`cursor-pointer block md:inline-block mt-4 md:mt-0 mx-2 md:mx-4 lg:mx-6 no-underline text-m hover:text-orange-dark _transition-all ${textColorClass}`}
    >
      {title}
    </a>
  )
}

export default HeaderLink
