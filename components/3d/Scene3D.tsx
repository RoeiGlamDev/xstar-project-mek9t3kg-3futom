import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas 
      style={{ background: 'white' }} 
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight color="orange" intensity={1} position={[5, 5, 5]} />
      <OrbitControls />
      {/* Add your 3D models here */}
      {/* Example: <Model /> */}
    </Canvas>
  );
};

export default Scene3D;