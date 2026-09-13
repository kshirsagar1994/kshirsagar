"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";

export default function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer, viewport } = useThree();

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Clamp delta to avoid massive jumps during backgrounding/tab-switching
    const safeDelta = Math.min(delta, 0.05);

    // Slowly rotate over time
    meshRef.current.rotation.x += safeDelta * 0.08;
    meshRef.current.rotation.y += safeDelta * 0.12;

    // Subtle reaction to mouse pointer with lerp
    const targetX = (pointer.x * viewport.width) / 20;
    const targetY = (pointer.y * viewport.height) / 20;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 2]} position={[0, 0, 0]}>
      {/* Dark metallic material with subtle distortion */}
      <MeshDistortMaterial
        color="#111111"
        emissive="#1a1a24"
        roughness={0.25}
        metalness={0.75}
        distort={0.15}
        speed={1.0}
      />
    </Icosahedron>
  );
}
