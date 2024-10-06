'use client'

import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Image2 from '../assets/texture_earth.jpg'

const RotatingGlobe = () => {
  const earthRef = useRef()
  const [earthTexture] = useLoader(TextureLoader, [Image2])

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002
    }
  })

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]}>
      <meshStandardMaterial map={earthTexture} />
    </Sphere>
  )
}

const GlobeLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="w-16 h-16 border-4 border-t-4 border-purple-500 rounded-full animate-spin"></div>
  </div>
)

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <div id="contact"  className="min-h-screen  text-white flex items-center justify-center p-4 ">
      <div className="w-full max-w-6xl bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">GET IN TOUCH</h2>
            <h1 className="text-5xl font-bold mb-6">Contact.</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="What's your good name?"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="What's your web address?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="What's you want to say?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 relative">
            <group>
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.8} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={<GlobeLoader />}>
                <RotatingGlobe />
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
            </Canvas>
            </group>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-800 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm