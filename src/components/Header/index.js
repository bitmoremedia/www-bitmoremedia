import React from 'react'
import Link, { navigateTo } from 'gatsby-link'

import logoSrc from '../../images/bitmoremedia-logo.png'

const links = [
  {
    title: 'Services',
    path: '/services',
  },
  {
    title: 'Products',
    path: '/products',
  },
  {
    title: 'Partnerships',
    path: '/partnerships',
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

const mobileMenuStyles = {
  position: 'fixed',
  top: '58px',
  zIndex: 99999,
  background: 'white',
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  paddingTop: '30%',
  paddingBottom: '30%',
  textAlign: 'center',
}

class MobileNav extends React.Component {
  state = {
    expanded: false,
  }
  toggleMenu = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }
  onNavigate = () => {
    this.setState({
      expanded: false,
    })
  }
  render() {
    const { expanded } = this.state
    const { toggleMenu, onNavigate } = this
    return (
      <div className="md:hidden">
        <a className="cursor-pointer" onClick={toggleMenu}>
          MENU
        </a>
        {expanded && (
          <div className="" style={mobileMenuStyles}>
            {links.map(link => <HeaderLink key={link.path} {...link} onNavigate={onNavigate} />)}
          </div>
        )}
      </div>
    )
  }
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
          <Link to="/" className="no-underline flex flex-col">
            <img className="w-32 md:w-48" src={logoSrc} />
          </Link>
          <div className="hidden md:inline">
            {links.map(link => <HeaderLink key={link.path} {...link} />)}
          </div>
          <MobileNav />
        </div>
      </nav>
    )
  }
}

export default Header
