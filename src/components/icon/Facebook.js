import React from 'react'

export default ({
  height = '50px',
  width = '50px',
  iconColor = '#FFFFFF',
  backgroundColor = '#007AB9',
  title = 'Twitter',
  className = '',
}) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 112.196 112.196">
      <title>{title}</title>
      <g>
        <circle fill={backgroundColor} cx="56.098" cy="56.098" r="56.098" />
        <path
          fill={iconColor}
          d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
		c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
        />
      </g>
    </svg>
  )
}
