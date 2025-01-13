import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  textureUrl?: string;
}

export function Planet({ position, size, color, orbitRadius, orbitSpeed, textureUrl }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitAngle = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    if (meshRef.current) {
      orbitAngle.current += orbitSpeed * delta;
      meshRef.current.position.x = Math.cos(orbitAngle.current) * orbitRadius;
      meshRef.current.position.z = Math.sin(orbitAngle.current) * orbitRadius;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[size, 32, 32]}>
      <meshPhysicalMaterial
        color={color}
        metalness={0.4}
        roughness={0.7}
        clearcoat={0.5}
        clearcoatRoughness={0.3}
        map={textureUrl ? new THREE.TextureLoader().load(textureUrl) : undefined}
        envMapIntensity={1}
      />
    </Sphere>
  );
}