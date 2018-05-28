import React from 'react'

const SplitPage = ({ title, paragraphs, imageSrc, imageSide = 'right' }) => (
  <div className="">
    <h2 className="">{title}</h2>
    <div className="">
      {paragraphs.map((p, i) => (
        <div className="" key={i}>
          {p}
        </div>
      ))}
    </div>
    <div className="">{imageSrc}</div>
  </div>
)

export default SplitPage
