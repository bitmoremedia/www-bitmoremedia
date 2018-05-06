import React from 'react'

const style = {
  transition: 'all 0.2s ease',
  outline: 'none',
}

const Button = ({ label }) => {
  return (
    <button
      className="border border-orange hover:bg-orange text-orange hover:text-white uppercase py-2 px-6 rounded"
      style={style}
    >
      {label}
    </button>
  )
}

export default Button
