import React from 'react'

import imgSrc from '../../images/scroll-down-button.svg'

// TODO: make an actual SVG and support hover class

const ScrollDownButton = ({ onClick }) => (
  <img className="cursor-pointer" src={imgSrc} onClick={onClick} />
)

export default ScrollDownButton
