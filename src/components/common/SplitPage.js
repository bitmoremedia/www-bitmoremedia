import React from 'react'

const SplitPage = ({
  title,
  paragraphs,
  imageSrc,
  imageSide = 'right',
  bgClass = 'bg-not-white',
}) => {
  const imageSplit = (
    <div
      className="hidden md:block bg-center bg-no-repeat bg-cover md:w-1/2"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    />
  )
  return (
    <div className={`min-h-screen ${bgClass} flex flex-col md:flex-row`}>
      <img className="md:hidden w-100" src={imageSrc} />
      {imageSide !== 'right' && imageSplit}
      <div className="py-8 md:py-0 md:w-1/2 flex justify-center items-center flex-col">
        <div className="max-w-sm px-8 lg:px-4">
          <h2 className="py-4 text-blue">{title}</h2>
          <div className="">
            {paragraphs.map((p, i) => (
              <div className="py-2" key={i}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
      {imageSide === 'right' && imageSplit}
    </div>
  )
}

export default SplitPage
