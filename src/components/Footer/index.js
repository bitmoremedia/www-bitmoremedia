import React from 'react'

const Header = () => (
  <div className="bg-blue">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-white">
        Created by{' '}
        <a href="https://www.bitmoremedia.com" className="font-bold no-underline text-white">
          BitMoreMedia
        </a>
      </p>
      <p className="text-white">
        Hosted on{' '}
        <a
          href="https://github.com/bitmoremedia/www-bitmoremedia"
          className="font-bold no-underline text-white"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
)

export default Header
