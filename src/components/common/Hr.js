import React from 'react'

const Hr = ({ color = 'lightgrey', fullWidth = false }) => (
  <hr
    style={{
      height: '1px',
      width: fullWidth ? '100%' : '80%',
      background: color,
    }}
  />
)

export default Hr
