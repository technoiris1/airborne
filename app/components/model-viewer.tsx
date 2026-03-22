"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function Model({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const gltf = useLoader(GLTFLoader, modelPath);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((node: any) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
          if (node.material) {
            if (Array.isArray(node.material)) {
              node.material.forEach((mat: any) => {
                mat.needsUpdate = true;
                mat.side = THREE.DoubleSide;
              });
            } else {
              node.material.needsUpdate = true;
              node.material.side = THREE.DoubleSide;
            }
          }
        }
      });
    }
  }, [gltf]);

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
}

function ModelLoading() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#888888" wireframe />
    </mesh>
  );
}

export default function ModelViewer({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: ModelViewerProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[0, 20, 0]} intensity={1.2} color="#ffffff" />

        <pointLight position={[0, 0, -10]} intensity={1} color="#ffffff" />

        <ambientLight intensity={1.8} color="#ffffff" />

        <Suspense fallback={<ModelLoading />}>
          <Model
            modelPath={modelPath}
            scale={scale}
            position={position}
            rotation={rotation}
          />
        </Suspense>

        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
