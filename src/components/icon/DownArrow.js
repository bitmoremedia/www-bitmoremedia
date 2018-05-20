import React from 'react'

export default ({
  height = '53px',
  width = '53px',
  stroke = '#FFFFFF',
  fill = 'none',
  title = 'Down Arrow',
  className = '',
}) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 53 53">
      <title>{title}</title>
      <g transform="translate(-698.000000, -737.000000)" fill={fill} stroke={stroke}>
        <g transform="translate(-1.000000, -1.000000)">
          <g transform="translate(700.000000, 739.000000)">
            <circle strokeWidth="2" cx="25.5" cy="25.5" r="25.5" />
            <path d="M25.5,12.1352941 L25.5,34.8647059" strokeWidth="5" strokeLinecap="square" />
            <path d="M17,29 L24.8571429,37.8636364" strokeWidth="4" strokeLinecap="square" />
            <path d="M34,29 L25.1451613,37.8676471" strokeWidth="4" strokeLinecap="square" />
          </g>
        </g>
      </g>
    </svg>
  )
}
