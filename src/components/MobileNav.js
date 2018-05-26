import React from 'react'
import { Subscribe } from 'unstated'

import { level1PageLinks } from '../config'
import NavStore from '../store/NavStore'
import HeaderLink from './common/HeaderLink'

const links = [
  {
    title: 'Home',
    path: '/',
  },
  ...level1PageLinks,
]

const mobileMenuStyles = {
  position: 'fixed',
  zIndex: 99999,
  background: 'white',
  top: 0,
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
  render() {
    const { mobileNavOpen, closeMobileNav } = this.props
    const { onNavigate } = this
    return (
      <div>
        {mobileNavOpen && (
          <div className="" style={mobileMenuStyles}>
            {links.map(link => (
              <HeaderLink key={link.path} {...link} onNavigate={closeMobileNav} />
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
            closeMobileNav={nav.closeMobileNav}
          />
        )
      }}
    </Subscribe>
  )
}
