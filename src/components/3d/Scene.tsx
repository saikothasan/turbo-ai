import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import BrainModel from './BrainModel';
import LoadingSpinner from '../common/LoadingSpinner';

const Scene = () => {
  return (
    <div className="w-full h-[600px] md:h-[800px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <BrainModel />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      <LoadingSpinner />
    </div>
  );
};

export default Scene;