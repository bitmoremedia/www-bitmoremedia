import React from 'react'
import Link from 'gatsby-link'

import logoSrc from '../../images/bitmoremedia-logo.png'

const links = [
  {
    title: 'What We Do',
    path: '/what-we-do',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]

const HeaderLink = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-m text-orange"
    >
      {title}
    </Link>
  )
}

const Header = ({ location }) => {
  const style = {
    nav: {
      transition: 'padding 0.5s ease',
    },
    img: {
      width: '192px',
      height: '37.6px',
    },
  }
  const bgClass = location.pathname === '/' ? '' : 'bg-white'
  const pClass = location.pathname === '/' ? 'p-4' : ''
  return (
    <nav className={`fixed z-10 w-full ${bgClass} ${pClass}`} style={style.nav}>
      <div className="flex flex-wrap items-center justify-between max-w-3xl mx-auto py-2 px-8">
        <Link to="/" className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline">
          <img style={style.img} src={logoSrc} />
        </Link>
        <div> {links.map(link => <HeaderLink key={link.path} {...link} />)}</div>
      </div>
    </nav>
  )
}

export default Header
