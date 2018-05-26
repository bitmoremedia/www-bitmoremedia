import React from 'react'
import { Subscribe } from 'unstated'

import { level1PageLinks } from '../config'
import NavStore from '../../store/NavStore'
import HeaderLink from './common/HeaderLink'

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
  toggleMenu = () => {
    this.props.toggleMobileNav()
  }
  onNavigate = () => {
    this.props.closeMobileNav()
  }
  render() {
    const { mobileNavOpen } = this.props
    const { toggleMenu, onNavigate } = this
    return (
      <div className="md:hidden">
        <a className="cursor-pointer" onClick={toggleMenu}>
          MENU
        </a>
        {mobileNavOpen && (
          <div className="" style={mobileMenuStyles}>
            {level1PageLinks.map(link => (
              <HeaderLink key={link.path} {...link} onNavigate={onNavigate} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default props => {
  return (
    <Subscribe to={[NavStore]}>
      {nav => {
        return (
          <MobileNav
            {...props}
            mobileNavOpen={nav.state.mobileNavOpen}
            toggleMobileNav={nav.toggleMobileNav}
            openMobileNav={nav.openMobileNav}
            closeMobileNav={nav.closeMobileNav}
          />
        )
      }}
    </Subscribe>
  )
}