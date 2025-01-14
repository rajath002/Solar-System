import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Trail } from '@react-three/drei';
import * as THREE from 'three';

interface CometProps {
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  trailLength?: number;
  trailWidth?: number;
  inclination?: number;
}

export function Comet({ 
  orbitRadius, 
  orbitSpeed, 
  size, 
  trailLength = 8, 
  trailWidth = 0.5,
  inclination = 0 
}: CometProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitAngle = useRef(Math.random() * Math.PI * 2);
  
  useFrame((_state, delta) => {
    if (meshRef.current) {
      orbitAngle.current += orbitSpeed * delta;
      
      // Calculate position with inclination
      meshRef.current.position.x = Math.cos(orbitAngle.current) * orbitRadius;
      meshRef.current.position.z = Math.sin(orbitAngle.current) * orbitRadius;
      meshRef.current.position.y = Math.sin(orbitAngle.current) * Math.sin(inclination) * orbitRadius;
      
      // Rotate comet to face direction of travel
      const tangentX = -Math.sin(orbitAngle.current);
      const tangentZ = Math.cos(orbitAngle.current);
      meshRef.current.rotation.y = Math.atan2(tangentX, tangentZ);
    }
  });

  return (
    <>
      <Trail
        width={trailWidth}
        length={trailLength}
        color={new THREE.Color(0.4, 0.8, 1)}
        attenuation={(t) => t * t}
      >
        <Sphere ref={meshRef} args={[size, 16, 16]}>
          <meshPhysicalMaterial
            color="#a0c5e7"
            emissive="#304c70"
            emissiveIntensity={0.2}
            roughness={0.4}
            metalness={0.3}
          />
        </Sphere>
      </Trail>
      
      {/* TODO - Remove below code */}
      {/* Additional glowing core */}
      <mesh position={meshRef.current?.position || [0, 0, 0]}>
        <sphereGeometry args={[size * 1.2, 16, 16]} />
        <meshBasicMaterial
          color="#80a0ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}