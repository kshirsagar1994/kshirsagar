"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import HeroObject from "./HeroObject";

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        depth: true,
        stencil: false,
      }}
      dpr={[1, 1.25]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <HeroObject />
      </Float>
      
      <Sparkles count={20} scale={8} size={1.5} speed={0.3} opacity={0.15} color="#ffffff" />
    </Canvas>
  );
}
