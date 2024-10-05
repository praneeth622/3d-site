import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Praneeth
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#contact" className="bg-purple-500 hover:bg-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#contact" className="bg-purple-500 hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar