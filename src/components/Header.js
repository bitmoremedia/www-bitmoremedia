import React from 'react'
import Link from 'gatsby-link'

import { level1PageLinks } from '../config'
import HeaderLink from './common/HeaderLink'
import MobileNavToggle from './MobileNavToggle'
import logoSrc from '../images/bitmoremedia-logo.png'

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
    const { toggleMobileNav } = this.props
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
            {level1PageLinks.map(link => <HeaderLink key={link.path} {...link} />)}
          </div>
          <MobileNavToggle />
        </div>
      </nav>
    )
  }
}

export default Header
