import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';

export default function Animations() {

  return (
    <Canvas flat camera={{fov:50}} >
      <OrbitControls />
      <ambientLight intensity={0.9} />
      <Cyl />
      
    </Canvas>
  );
}
