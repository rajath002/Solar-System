import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  color?: string;
  orbitRadius: number;
  orbitSpeed: number;
  textureUrl?: string;
  name?: string;
  castShadow?: boolean;
  receiveShadow?: boolean;
  rings?: {
    innerRadius: number;
    outerRadius: number;
    color: string;
  };
}

export function Planet({ position, size, color, orbitRadius, orbitSpeed, textureUrl, rings }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitAngle = useRef(Math.random() * Math.PI * 2);
  const ringsRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      orbitAngle.current += orbitSpeed * delta;
      meshRef.current.position.x = Math.cos(orbitAngle.current) * orbitRadius;
      meshRef.current.position.z = Math.sin(orbitAngle.current) * orbitRadius;
      meshRef.current.rotation.y += delta * 0.5;

      const newX = Math.cos(orbitAngle.current) * orbitRadius;
      const newZ = Math.sin(orbitAngle.current) * orbitRadius;

      // Update rings position if they exist, but don't rotate them
      if (ringsRef.current) {
        ringsRef.current.position.x = newX;
        ringsRef.current.position.z = newZ;
        // Keep rings tilted but don't rotate them
        ringsRef.current.rotation.x = Math.PI / 3;
      }
    }
  });

  return (
    <>
      <Sphere ref={meshRef} position={position} args={[size, 32, 32]} castShadow receiveShadow>
        <meshPhysicalMaterial
          color={color}
          metalness={0.1}
          roughness={0.9}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
          map={textureUrl ? new THREE.TextureLoader().load(textureUrl) : undefined}
          envMapIntensity={1}
        />
      </Sphere>
      {rings && (
        <Ring
          ref={ringsRef}
          args={[rings.innerRadius, rings.outerRadius, 64]}
          position={[
            Math.cos(orbitAngle.current) * orbitRadius,
            0,
            Math.sin(orbitAngle.current) * orbitRadius
          ]}
          receiveShadow
        >
          <meshPhysicalMaterial
            color={rings.color}
            side={THREE.DoubleSide}
            transparent
            opacity={0.8}
            metalness={0.4}
            roughness={0.3}
          />
        </Ring>
      )}
    </>
  );
}