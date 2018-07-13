import React from 'react'
import { push } from 'gatsby'

const NavLink = ({ title, path, onNavigate, active, customClass }) => {
  const textColorClass = active ? 'text-orange-dark' : 'text-orange '
  const baseClass = `block md:inline-block mt-4 md:mt-0 text-m ${customClass}`
  if (path) {
    return (
      <a
        href={path}
        onClick={e => {
          e.preventDefault()
          push(path)
          if (onNavigate) {
            onNavigate()
          }
        }}
        className={`${baseClass} cursor-pointer no-underline hover:text-orange-dark _transition-color ${textColorClass}`}
      >
        {title}
      </a>
    )
  } else {
    return <span className={`${baseClass} ${textColorClass}`}>{title}</span>
  }
}

export default NavLink
