import React from 'react'

const SecondaryPageWrapper = ({
  children,
  bgClass = 'bg-not-white',
  fullWidth = false,
  fullHeight = true,
  justifyClass = 'justify-around',
}) => {
  const widthClass = fullWidth ? `` : `container px-8`
  const heightClass = fullHeight
    ? `min-h-screen
  pb-6 
  md:pb-4   
  `
    : ``
  const containerClass = `
    mx-auto 
    flex 
    flex-col 
    ${justifyClass}
    ${bgClass}
    ${widthClass}
    ${heightClass}
  `
  const paddingTop = fullHeight ? '80px' : ''
  const paddingBottom = fullHeight ? '80px' : ''
  return (
    <div className={`${bgClass}`}>
      <div style={{ paddingTop, paddingBottom }} className={containerClass}>
        {children}
      </div>
    </div>
  )
}
export default SecondaryPageWrapper
