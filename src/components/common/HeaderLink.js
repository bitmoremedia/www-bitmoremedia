import React from 'react'
import { navigateTo } from 'gatsby-link'

const HeaderLink = ({ title, path, onNavigate }) => {
  return (
    <a
      onClick={() => {
        navigateTo(path)
        if (onNavigate) {
          onNavigate()
        }
      }}
      className="cursor-pointer block md:inline-block mt-4 md:mt-0 mx-2 md:mx-4 lg:mx-6 no-underline text-m text-orange hover:text-orange-dark _transition-all"
    >
      {title}
    </a>
  )
}

export default HeaderLink
