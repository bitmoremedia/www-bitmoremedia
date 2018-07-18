import React, { Fragment } from 'react'
import { Subscribe } from 'unstated'

import { level1PageLinks } from '../config'
import NavStore from '../store/NavStore'
import NavLink from './common/NavLink'

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
  bottom: 0,
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '40px',
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
          {links.map(link => (
            <Fragment>
              <NavLink key={link.path} {...link} onNavigate={closeMobileNav} />
              {link.subpages &&
                link.subpages.map(subpageLink => (
                  <div className="pl-6">
                    <NavLink key={subpageLink.path} {...subpageLink} onNavigate={closeMobileNav} />
                  </div>
                ))}
            </Fragment>
          ))}
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
