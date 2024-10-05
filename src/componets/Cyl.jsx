import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import image from '../assets/image.png';

export default function Cyl() {
  // Load the texture
  const texture1 = useLoader(THREE.TextureLoader, image);
  
  // Ref for the cylinder mesh
  const cyl = useRef();

  // Rotate the cylinder in each frame
  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta; // Rotate the cylinder over time on the Y-axis
    }
  });

  return (
    <mesh ref={cyl} rotation={[0, 0, -0.5]}>
      <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
      <meshStandardMaterial
        map={texture1}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
