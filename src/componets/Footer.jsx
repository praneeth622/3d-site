import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Praneeth
            </span>
            <p className="mt-2 text-sm text-gray-400">
              Full Stack Developer | Creating digital experiences
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Praneeth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer