import React from 'react'

const InfoBanner = ({
  heading = [],
  content = [],
  bgClass = '',
  contentTextClass = 'text-grey-dark',
  headingTextClass = 'text-grey-dark',
  centreText = true,
}) => {
  const centerTextClass = centreText ? 'md:text-center' : ''

  const containerClass = `
    container
    mx-auto  
    p-8
    ${centerTextClass}
  `

  const headingClass = `
    text-2xl    
    font-thin
    leading-normal
    py-2
    ${headingTextClass}
  `

  const contentClass = `
    text-md
    font-thin
    leading-tight
    py-2
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
