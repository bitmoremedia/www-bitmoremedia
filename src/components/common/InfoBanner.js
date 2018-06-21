import React from 'react'

const InfoBanner = ({
  type = 'general',
  content = [],
  bgClass = '',
  textClass = 'text-grey-dark',
}) => {
  let containerClass = `text-center ${bgClass}`
  let infoClass = `
      container
      mx-auto
      px-4
      md:px-huge
      ${textClass}
    `
  if (type === 'general') {
    containerClass = `${containerClass} 
      text-md    
      font-thin
      p-6
    `
    infoClass = `${infoClass}
      leading-tight
      py-3
    `
  } else if (type === 'heading') {
    containerClass = `${containerClass} 
      text-xl    
      font-thin
      p-8
    `
    infoClass = `${infoClass}
      leading-normal
    `
  }
  return (
    <div className={containerClass}>
      {content.map(info => <div className={infoClass}>{info}</div>)}
    </div>
  )
}

export default InfoBanner
