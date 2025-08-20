import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const FloatingElements: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />
      {/* 3D floating sphere */}
      <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#FF6F20" roughness={0.5} metalness={0.8} />
      </mesh>
      {/* 3D floating cube */}
      <mesh position={[2, 1, 0]} scale={[1, 1, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} metalness={0.8} />
      </mesh>
      {/* 3D floating cylinder */}
      <mesh position={[-2, -1, 0]} scale={[1, 1, 1]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#FF6F20" roughness={0.5} metalness={0.8} />
      </mesh>
    </Canvas>
  );
};

export default FloatingElements;