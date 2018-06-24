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
  top: 0,
  left: 0,
  right: '50%',
  bottom: 0,
  paddingTop: '20px',
  paddingLeft: '20px',
  transition: 'all 0.3s',
}

class MobileNav extends React.Component {
  render() {
    const { mobileNavOpen, closeMobileNav } = this.props

    const mobileMenuContextualStyles = {
      ...mobileMenuStyles,
      transform: mobileNavOpen ? 'translateX(0)' : 'translateX(-100%)',
    }

    return (
      <div className="md:hidden">
        <div
          className="bg-white border-solid border-r border-orange-lightest"
          style={mobileMenuContextualStyles}
        >
          {links.map(link => <HeaderLink key={link.path} {...link} onNavigate={closeMobileNav} />)}
        </div>
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
