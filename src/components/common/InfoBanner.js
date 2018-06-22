import React from 'react'

const InfoBanner = ({
  heading = [],
  content = [],
  bgClass = '',
  contentTextClass = 'text-grey-dark',
  headingTextClass = 'text-grey-dark',
}) => {
  const containerClass = `
    container
    mx-auto  
    text-center 
    p-8
  `

  const headingClass = `
    text-xl    
    font-thin
    leading-normal
    ${headingTextClass}
  `

  const contentClass = `
    text-md
    font-thin
    leading-tight
    ${contentTextClass}
  `
  /*
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
*/
  return (
    <div className={bgClass}>
      <div className={containerClass}>
        {heading.length > 0 && heading.map(item => <div className={headingClass}>{item}</div>)}
        {content.length > 0 && content.map(item => <div className={contentClass}>{item}</div>)}
      </div>
    </div>
  )
}

export default InfoBanner
