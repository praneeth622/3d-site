'use client'

import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text, OrbitControls, Stars, useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import Image2 from '../assets/texture_earth.jpg'
import InnerBold from '../fonts/Inter-Bold.woff'

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <h1 className="text-center text-2xl mt-8">Something went wrong while loading 3D elements.</h1>
  }

  return (
    <Suspense fallback={<div className="text-center text-2xl mt-8">Loading 3D elements...</div>}>
      {children}
    </Suspense>
  )
}

const AnimatedCube = () => {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2
      mesh.current.rotation.y += delta * 0.2
    }
  })

  const texture = useLoader(TextureLoader, Image2)

  return (
    <mesh
      ref={mesh}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

const AnimatedText = () => {
  const mesh = useRef()

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <mesh ref={mesh} position={[0, 2, 0]}>
      <Text
        font={InnerBold}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        About Me
      </Text>
    </mesh>
  )
}

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <AnimatedCube />
      <AnimatedText />
      <Stars />
      <OrbitControls enableZoom={false} />
    </>
  )
}

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 h-[50vh]">
          <ErrorBoundary>
            <Canvas>
              <Scene />
            </Canvas>
          </ErrorBoundary>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-center">My Journey</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xl font-medium">Senior Web Developer</h4>
                <p className="text-gray-400">TechCorp Inc. | 2019 - Present</p>
              </li>
              <li>
                <h4 className="text-xl font-medium">Full Stack Developer</h4>
                <p className="text-gray-400">WebSolutions Ltd. | 2016 - 2019</p>
              </li>
              <li>
                <h4 className="text-xl font-medium">Junior Developer</h4>
                <p className="text-gray-400">StartupX | 2014 - 2016</p>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="bg-gray-800 p-2 rounded">React</li>
              <li className="bg-gray-800 p-2 rounded">Node.js</li>
              <li className="bg-gray-800 p-2 rounded">TypeScript</li>
              <li className="bg-gray-800 p-2 rounded">GraphQL</li>
              <li className="bg-gray-800 p-2 rounded">Next.js</li>
              <li className="bg-gray-800 p-2 rounded">AWS</li>
              <li className="bg-gray-800 p-2 rounded">Docker</li>
              <li className="bg-gray-800 p-2 rounded">CI/CD</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4">Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="text-xl font-medium mb-2">E-commerce Platform</h4>
              <p className="text-gray-400">Built a scalable e-commerce solution using Next.js and GraphQL</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="text-xl font-medium mb-2">AI-powered Chat App</h4>
              <p className="text-gray-400">Developed a real-time chat application with AI integration</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="text-xl font-medium mb-2">Blockchain Explorer</h4>
              <p className="text-gray-400">Created a user-friendly blockchain explorer for a major cryptocurrency</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection