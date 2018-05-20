import React from 'react'

import DownArrowIcon from '../icon/DownArrow'

const ScrollDownButton = ({ onClick }) => (
  <a className="cursor-pointer text-white hover:text-orange _transition-all" onClick={onClick}>
    <DownArrowIcon className="stroke-current" stroke="" />
  </a>
)

export default ScrollDownButton
