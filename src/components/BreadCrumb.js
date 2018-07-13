import React, { Fragment } from 'react'

import { navBarHeight_px } from '../tailwind/variables'
import NavLink from '../components/common/NavLink'

const styles = {
  container: {
    top: navBarHeight_px,
  },
}

const services = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
]

const linksMap = {
  '/services/development': [
    ...services,
    {
      name: 'Development',
    },
  ],
  '/services/user-experience': [
    ...services,
    {
      name: 'User Experience',
    },
  ],
  '/services/marketing': [
    ...services,
    {
      name: 'Marketing',
    },
  ],
}

const BreadCrumb = ({ location }) => {
  const links = linksMap[location.pathname]
  return (
    <div style={styles.container} className="absolute w-full hidden md:inline">
      <div className="flex flex-wrap items-center justify-start container mx-auto py-4 px-4">
        {links.map((link, index) => {
          const { name, path } = link
          const notLastLink = links[index + 1]
          const active = !notLastLink
          let thisPath
          if (notLastLink) {
            thisPath = path
          }
          return (
            <Fragment>
              <NavLink title={name} path={thisPath} active={active} customClass="mr-3" />
              {notLastLink && <span className="text-orange mr-3"> > </span>}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default BreadCrumb
