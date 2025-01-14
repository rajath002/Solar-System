import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

import sunTextureMap from "../assets/textures/sunmap.jpg";

export function Sun() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  const sunShader = {
    uniforms: {
      time: { value: 0 },
      sunTexture: { value: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/sun.jpg') }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform sampler2D sunTexture;
      varying vec2 vUv;
      varying vec3 vNormal;
      
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = vUv;
        float t = time * 0.5;
        
        // Base texture with less distortion
        vec2 distortedUV = uv + vec2(
          sin(uv.y * 10.0 + t) * 0.02,
          cos(uv.x * 10.0 + t) * 0.02
        );
        
        vec4 texColor = texture2D(sunTexture, distortedUV);
        
        // Stable glow effect
        float glow = 0.8 + 0.2 * sin(time);
        vec3 baseColor = vec3(1.0, 0.6, 0.1);
        vec3 glowColor = mix(baseColor, vec3(1.0, 0.3, 0.0), 0.5 + 0.5 * sin(time));
        
        // Ensure minimum brightness
        vec3 finalColor = max(texColor.rgb * 1.2, vec3(0.8, 0.3, 0.0));
        finalColor += glowColor * glow * 0.3;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  };

  const glowShader = {
    uniforms: {
      time: { value: 0 }
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec3 vNormal;
      
      void main() {
        float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        intensity = clamp(intensity, 0.0, 1.0);
        vec3 glowColor = mix(vec3(1.0, 0.6, 0.1), vec3(1.0, 0.4, 0.0), intensity);
        gl_FragColor = vec4(glowColor, intensity * 0.8);
      }
    `
  };

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
    if (glowRef.current) {
      (glowRef.current.material as THREE.ShaderMaterial).uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <group>
      <Sphere args={[5.5, 64, 64]} receiveShadow>
        {/* <shaderMaterial
          ref={materialRef}
          args={[sunShader]}
          transparent
          attach="material"
        /> */}
        <meshPhysicalMaterial
          metalness={2.5}
          roughness={5}
          clearcoat={0.1}
          clearcoatRoughness={1}
          map={new THREE.TextureLoader().load(sunTextureMap)}
          envMapIntensity={5}
        />
      </Sphere>
      
      <Sphere ref={glowRef} args={[6.0, 32, 32]} receiveShadow>
        <shaderMaterial
          args={[glowShader]}
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          attach="material"
        />
      </Sphere>
    </group>
  );
}