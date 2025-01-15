
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
  tilt?: number;
  rings?: {
    innerRadius: number;
    outerRadius: number;
    color: string;
  };
}

/**
 * Component representing a planet with optional rings in a 3D space.
 *
 * @param {PlanetProps} props - The properties for the Planet component.
 * @param {[number, number, number]} props.position - The initial position of the planet.
 * @param {number} props.size - The size of the planet.
 * @param {string} [props.color] - The color of the planet.
 * @param {number} props.orbitRadius - The radius of the planet's orbit.
 * @param {number} props.orbitSpeed - The speed of the planet's orbit.
 * @param {string} [props.textureUrl] - The URL of the texture to apply to the planet.
 * @param {string} [props.name] - The name of the planet.
 * @param {boolean} [props.castShadow] - Whether the planet casts a shadow.
 * @param {boolean} [props.receiveShadow] - Whether the planet receives shadows.
 * @param {number} [props.tilt] - The tilt of the planet.
 * @param {Object} [props.rings] - The properties of the planet's rings.
 * @param {number} props.rings.innerRadius - The inner radius of the rings.
 * @param {number} props.rings.outerRadius - The outer radius of the rings.
 * @param {string} props.rings.color - The color of the rings.
 *
 * @returns {JSX.Element} The rendered Planet component.
 */
export function Planet({ position, size, color, orbitRadius, orbitSpeed, textureUrl, rings, tilt }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitAngle = useRef(Math.random() * Math.PI * 2);
  const ringsRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      orbitAngle.current += orbitSpeed * delta;
      meshRef.current.position.x = Math.cos(orbitAngle.current) * orbitRadius;
      meshRef.current.position.z = Math.sin(orbitAngle.current) * orbitRadius;
      meshRef.current.rotation.y += delta * 0.5;

      if (tilt)  {
        meshRef.current.rotation.x = tilt;
      }

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
                {/* <Html position={[0, 6, 0]} center>
                  <div style={{ color: 'red', fontSize: '1.5em' }}>{}</div>
                </Html> */}
      </Sphere>

      {rings && (
        <Ring
          ref={ringsRef}
          args={[rings.innerRadius, rings.outerRadius, 64]}
          position={[
            Math.cos(orbitAngle.current) * orbitRadius,
            position[1],
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