import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = ({ position, color, speed }) => {
  return (
    <Float
      speed={speed}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.1, 0.1]}
    >
      <Sphere args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ParticleField = () => {
  return (
    <>
      <Stars
        radius={300}
        depth={60}
        count={1000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <AnimatedSphere position={[-4, 0, -5]} color="#6366f1" speed={1} />
      <AnimatedSphere position={[4, 2, -8]} color="#8b5cf6" speed={1.5} />
      <AnimatedSphere position={[0, -3, -6]} color="#06b6d4" speed={0.8} />
      <AnimatedSphere position={[-2, 4, -10]} color="#ec4899" speed={1.2} />
      <AnimatedSphere position={[6, -1, -12]} color="#10b981" speed={0.9} />
    </>
  );
};

const Background3D = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <ParticleField />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;

