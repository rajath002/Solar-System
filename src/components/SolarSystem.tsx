import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Planet } from './Planet';
import { Sun } from './Sun';

export function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 35], fov: 60 }}>
      {/* <color attach="background" args={['#000010']} /> */}
      {/* blue background color */}
      <color attach="background" args={['#020930']} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={1500} color="#ffd700" />
      
      <Sun />

      {/* Mercury */}
      <Planet
        name="Mercury"
        position={[0, 0, 0]}
        size={0.4}
        color="#c37d5e"
        orbitRadius={4}
        orbitSpeed={1.607}
        textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/7/5/75acb3ebf6cc25845fa52981eadfb4a1f91d61b7.jpeg"
      />
      {/* Venus */}
      <Planet
        name="Venus"
        position={[0, 0, 0]}
        size={0.9}
        // color="#e3a372"
        orbitRadius={7}
        orbitSpeed={1.174}
        textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/5/1/510b0bdc3aa89ae91ab91718cec0c01f41798082.jpeg"
      />
      {/* Earth */}
      <Planet
        name="Earth"
        position={[0, 0, 0]}
        size={1}
        // color="#4287f5"
        orbitRadius={10}
        orbitSpeed={1}
        // textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
        textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/5/1/51d3b482c420866efdfd64f6abafc3917a0f86d3.jpeg"
      />
      {/* Mars */}
      <Planet
        name="Mars"
        position={[0, 0, 0]}
        size={0.5}
        // color="#c1440e"
        orbitRadius={13}
        orbitSpeed={0.802}
        textureUrl='https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/7/7/77793f9bc2e9e1c1274b929cf2b7121191e25138.jpeg'
        // textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mars_1k_color.jpg"
      />
      {/* Jupiter */}
      <Planet
        name="Jupiter"
        position={[0, 0, 0]}
        size={1.8}
        color="#e3a372"
        orbitRadius={17}
        orbitSpeed={0.434}
        textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/2/8/28e78a1aa1594ffd8e0f746729c09418bec5d9cf.jpeg"
      />
      {/* Saturn */}
      <Planet
        name="Saturn"
        position={[0, 0, 0]}
        size={1.5}
        color="#e3c072"
        orbitRadius={21}
        orbitSpeed={0.323}
        rings={{
          innerRadius: 2,
          outerRadius: 3,
          color: "#d4af37"
        }}
        textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/6/8/6802b3e1a008f462fdbcab65f682e50a6e64ac16.jpeg"
      />
      {/* Uranus */}
      <Planet
        name="Uranus"
        position={[0, 0, 0]}
        size={1.3}
        color="#72a3e3"
        orbitRadius={25}
        orbitSpeed={0.228}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/uranus_1k.jpg"
      />
      {/* Neptune */}
      <Planet
        name="Neptune"
        position={[0, 0, 0]}
        size={1.2}
        color="#4287f5"
        orbitRadius={28}
        orbitSpeed={0.182}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/neptune_1k.jpg"
      />

      {/* Pluto */}
      <Planet
        name="Pluto"
        position={[0, 0, 0]}
        size={0.40} // 0.18
        // color="#b3b3b3"
        orbitRadius={32}
        orbitSpeed={0.159}
        textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/8/7/8779a5ac9a3d7c9c5bc281e45dd51906ad564d2f.jpeg"
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