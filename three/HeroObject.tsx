"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";

export default function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer, viewport } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Slowly rotate over time
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;

    // Subtle reaction to mouse pointer
    // We use lerp to make the movement smooth
    const targetX = (pointer.x * viewport.width) / 20;
    const targetY = (pointer.y * viewport.height) / 20;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 2]} position={[0, 0, 0]}>
      {/* Premium dark metallic material with a subtle glow */}
      <MeshDistortMaterial
        color="#111111"
        emissive="#1a1a24"
        roughness={0.2}
        metalness={0.8}
        distort={0.2}
        speed={1.5}
      />
    </Icosahedron>
  );
}
