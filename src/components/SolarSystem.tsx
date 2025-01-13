import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Planet } from './Planet';
import { Sun } from './Sun';

export function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 35], fov: 60 }}>
      <color attach="background" args={['#000010']} />
      <ambientLight intensity={0.3} />
      <pointLight positioman={[0, 0, 0]} intensity={1500} color="#ffd700" />
      
      <Sun />

      <Planet
        position={[0, 0, 0]}
        size={0.4}
        color="#c37d5e"
        orbitRadius={4}
        orbitSpeed={1.607}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mercury.jpg"
      />
      <Planet
        position={[0, 0, 0]}
        size={0.9}
        color="#e3a372"
        orbitRadius={7}
        orbitSpeed={1.174}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/venus_surface.jpg"
      />
      <Planet
        position={[0, 0, 0]}
        size={1}
        color="#4287f5"
        orbitRadius={10}
        orbitSpeed={1}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
      />
      <Planet
        position={[0, 0, 0]}
        size={0.5}
        color="#c1440e"
        orbitRadius={13}
        orbitSpeed={0.802}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mars_1k_color.jpg"
      />
      <Planet
        position={[0, 0, 0]}
        size={1.8}
        color="#e3a372"
        orbitRadius={17}
        orbitSpeed={0.434}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/jupiter_1k.jpg"
      />
      <Planet
        position={[0, 0, 0]}
        size={1.5}
        color="#e3c072"
        orbitRadius={21}
        orbitSpeed={0.323}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/saturn_1k.jpg"
      />
      <Planet
        position={[0, 0, 0]}
        size={1.3}
        color="#72a3e3"
        orbitRadius={25}
        orbitSpeed={0.228}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/uranus_1k.jpg"
      />
      <Planet
        position={[0, 0, 0]}
        size={1.2}
        color="#4287f5"
        orbitRadius={28}
        orbitSpeed={0.182}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/neptune_1k.jpg"
      />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
    </Canvas>
  );
}