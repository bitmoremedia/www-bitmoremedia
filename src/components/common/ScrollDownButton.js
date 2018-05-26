import React from 'react'

import DownArrowIcon from '../icon/DownArrow'

const ScrollDownButton = ({ onClick }) => {
  if (!onClick) {
    return <DownArrowIcon className="stroke-current" stroke="" />
  }
  return (
    <a className="cursor-pointer text-white hover:text-orange _transition-all" onClick={onClick}>
      <DownArrowIcon className="stroke-current" stroke="" />
    </a>
  )
}

export default ScrollDownButton
