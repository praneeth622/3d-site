'use client'

import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text, OrbitControls, Stars, useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import Image2 from '../assets/texture_earth.jpg'
import InnerBold from '../fonts/Inter-Bold.woff'
import { SphereGeometry } from 'three'; 
import { Github, Linkedin, Link  } from 'lucide-react'
import { Html } from '@react-three/drei';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError ] = useState(false)

  if (hasError) {
    return <Html><h1 className="text-center text-2xl mt-8">Something went wrong while loading 3D elements.</h1></Html>
  }

  return (
    <Suspense fallback={<Html><div className="text-center  text-2xl mt-8">Loading 3D elements...</div></Html>}>
      {children}
    </Suspense>
  )
}

const AnimatedCube = () => {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
  
    useFrame((state, delta) => {
      if (mesh.current) {
        mesh.current.rotation.x += delta * 0.4;
        mesh.current.rotation.y += delta * 0.4;
      }
    });
  
    const texture = useLoader(TextureLoader, Image2); // Ensure Image2 is defined
  
    return (
      <mesh
        ref={mesh}
        scale={hovered ? 1.5 : 1}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
         <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  };
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
      <ambientLight intensity={0.9} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> 
      <AnimatedCube />
      <AnimatedText />
      <Stars />
      <OrbitControls enableZoom={true} />
    </>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 h-[50vh]">
            <Canvas>
              <Scene />
            </Canvas>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-center">My Journey</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xl font-medium">Full Stack Developer</h4>
                <p className="text-gray-400">Artly | 2024 July - Present</p>
              </li>
              <li>
                <h4 className="text-xl font-medium">GDSC - Core</h4>
                <p className="text-gray-400">IIITDM GDSC | 2024 Aug - Present</p>
              </li>
              <li>
                <h4 className="text-xl font-medium">Junior Web Developer</h4>
                <p className="text-gray-400">Skill First Labs Inc. | 2024 July - 2024 Sept</p>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="bg-gray-800 p-2 rounded">React</li>
              <li className="bg-gray-800 p-2 rounded">Node.js</li>
              <li className="bg-gray-800 p-2 rounded">TypeScript</li>
              <li className="bg-gray-800 p-2 rounded">Mysql</li>
              <li className="bg-gray-800 p-2 rounded">Next.js</li>
              <li className="bg-gray-800 p-2 rounded">AWS</li>
              <li className="bg-gray-800 p-2 rounded">Docker</li>
              <li className="bg-gray-800 p-2 rounded">CI/CD</li>
            </ul>
          </div>
        </div>

        <div id="projects" className="bg-gray-900 p-6 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-semibold mb-4">Notable Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Drop-It Project */}
            <div className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl font-medium mb-2">Drop-It</h4>
            <p className="text-gray-400">File Sharing App Using NextJs and Firebase</p>
            <div className="flex space-x-4 mt-2">
                <a href="https://github.com/praneeth622/DropIt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Github className="h-6 w-6" />
                </a>
                <a href="https://dropit123.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Link className="h-6 w-6" />
                </a>
            </div>
            </div>

            {/* Cycle-Hub Project */}
            <div className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl font-medium mb-2">Cycle-Hub</h4>
            <p className="text-gray-400">Cycling enthusiast platform - Discover new routes, join events, and connect with fellow cyclists.</p>
            <div className="flex space-x-4 mt-2">
                <a href="https://github.com/praneeth622/cycleHub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Github className="h-6 w-6" />
                </a>
                <a href="https://cyclehub.vercel.app/login" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Link className="h-6 w-6" />
                </a>
            </div>
            </div>

            {/* Recapit Project */}
            <div className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl font-medium mb-2">Recapit</h4>
            <p className="text-gray-400">Recapit simplifies learning by sending timely reminders and questions on your chosen topics.</p>
            <div className="flex space-x-4 mt-2">
                <a href="https://github.com/praneeth622/recapit-app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Github className="h-6 w-6" />
                </a>
                
            </div>
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