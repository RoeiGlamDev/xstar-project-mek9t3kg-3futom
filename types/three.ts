import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GlamorousModel = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} /> {/* Replace with your 3D model */}
      <meshStandardMaterial color="#FFA500" /> {/* Orange color */}
    </mesh>
  );
};

const ThreeDScene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <GlamorousModel />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;