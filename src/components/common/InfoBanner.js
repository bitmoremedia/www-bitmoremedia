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
    py-3
    ${contentTextClass}
  `

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
