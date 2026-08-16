"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import HeroObject from "./HeroObject";

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <HeroObject />
      </Float>
      
      <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.2} color="#ffffff" />
      
    </Canvas>
  );
}
