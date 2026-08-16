"use client";

import dynamic from "next/dynamic";

// Dynamically import the heavy Three.js canvas to avoid SSR issues
// and reduce initial bundle size. Shows a subtle loading state while loading.
const SceneCanvas = dynamic(() => import("./SceneCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 bg-black" />
  ),
});

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <SceneCanvas />
    </div>
  );
}
