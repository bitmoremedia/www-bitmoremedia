import React from 'react'
import { Subscribe } from 'unstated'

import MenuToggle from './common/MenuToggle'
import NavStore from '../store/NavStore'

const MobileNavToggle = ({ toggleMobileNav, mobileNavOpen }) => {
  return (
    <div className="md:hidden">
      <MenuToggle onToggle={toggleMobileNav} open={mobileNavOpen} />
    </div>
  )
}

export default props => {
  return (
    <Subscribe to={[NavStore]}>
      {nav => {
        return (
          <MobileNavToggle
            {...props}
            mobileNavOpen={nav.state.mobileNavOpen}
            toggleMobileNav={nav.toggleMobileNav}
          />
        )
      }}
    </Subscribe>
  )
}
