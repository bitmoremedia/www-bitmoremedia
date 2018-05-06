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

class Header extends React.Component {
  state = {
    hasScrolledDown: false,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollPos)
    this.checkScrollPos()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPos)
  }
  checkScrollPos = () => {
    const { hasScrolledDown } = this.state
    if (window.scrollY > 30) {
      if (!hasScrolledDown) {
        this.setState({
          hasScrolledDown: true,
        })
      }
    } else {
      if (hasScrolledDown) {
        this.setState({
          hasScrolledDown: false,
        })
      }
    }
  }
  render() {
    const { hasScrolledDown } = this.state
    const style = {
      nav: {
        transition: 'padding 0.5s ease',
      },
      img: {
        width: '192px',
      },
    }
    const bgClass =
      location.pathname === '/' && !hasScrolledDown
        ? ''
        : 'bg-white border-solid border-b border-orange-lightest'
    const pClass = location.pathname === '/' && !hasScrolledDown ? 'py-4' : ''
    return (
      <nav className={`fixed z-10 w-full ${bgClass} ${pClass}`} style={style.nav}>
        <div className="flex flex-wrap items-center justify-between container mx-auto py-2 px-4">
          <Link to="/" className="no-underline">
            <img style={style.img} src={logoSrc} />
          </Link>
          <div className="hidden md:inline">
            {links.map(link => <HeaderLink key={link.path} {...link} />)}
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
