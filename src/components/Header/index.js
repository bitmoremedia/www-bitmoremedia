import React from 'react'
import Link from 'gatsby-link'

const Header = () => {
  return (
    <nav className="bg-teal">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
            >
              Home
            </Link>

            <Link
              to="/what-we-do"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              What We Do
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
