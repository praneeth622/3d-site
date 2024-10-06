import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Animations from './Animations'; 

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full container md:mx-10 mx-5 px-4">
        {/* Left Grid - Text Section */}
        <div className="flex flex-col justify-center z-10">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Hi There!
          </h1>
          <p className="text-4xl font-semibold mb-4 text-gray-300">This Is Praneeth</p>
          <div className="text-3xl font-semibold">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500"
            />
          </div>
        </div>

        {/* Right Grid - 3D Canvas Section */}
        <div className="h-[500px]">
          <div className="w-full h-full">
            <Animations /> {/* This component should render the 3D scene */}
          </div>
        </div>
      </div>
    </section>
  );
}
