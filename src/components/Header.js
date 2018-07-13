import React from 'react'
import { Link } from 'gatsby'

import { level1PageLinks } from '../config'
import NavLink from './common/NavLink'
import MobileNavToggle from './MobileNavToggle'
import logoSrc from '../images/bitmoremedia-logo.png'
import { navBarHeight_px } from '../tailwind/variables'

const styles = {
  nav: {
    transition: 'padding 0.4s ease',
    height: navBarHeight_px,
  },
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
    const { location } = this.props
    const { hasScrolledDown } = this.state
    const bgClass = location.pathname === '/' && !hasScrolledDown ? '' : 'bg-white-translucent'
    const pClass = location.pathname === '/' && !hasScrolledDown ? 'py-8' : ''
    return (
      <nav className={`fixed flex z-30 w-full ${bgClass} ${pClass}`} style={styles.nav}>
        <div className="flex flex-wrap items-center justify-between container mx-auto py-2 px-4">
          <Link to="/" className="no-underline flex flex-col">
            <img className="w-32 md:w-48" src={logoSrc} alt="Bit More Media Logo" />
          </Link>
          <div className="hidden md:inline">
            {level1PageLinks.map(link => (
              <NavLink
                active={!!(location.pathname.indexOf(link.path) > -1)}
                key={link.path}
                customClass="mx-2 md:mx-4 lg:mx-6"
                {...link}
              />
            ))}
          </div>
          <MobileNavToggle />
        </div>
      </nav>
    )
  }
}

export default Header
