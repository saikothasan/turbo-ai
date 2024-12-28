import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

const BrainModel = () => {
  const meshRef = useRef<Mesh>(null);
  const { nodes, materials } = useGLTF('/models/brain.glb');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#4299e1"
        metalness={0.7}
        roughness={0.2}
        wireframe
      />
    </mesh>
  );
};

export default BrainModel;