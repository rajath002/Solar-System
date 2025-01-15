import { FC, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Linkedin } from 'lucide-react';

import { Sun } from './Sun';
import { Comet } from './Comet';
import Planets from './Planets';

const DisplayName = memo(() => (
  <div className='absolute bottom-10 right-10 text-white text-2xl opacity-50'>
    <a href="https://www.linkedin.com/in/rajath-acharya/" className='flex gap-2 items-center' target='_blank' rel='noreferrer'>
      <Linkedin size={25} /> Rajath Kumar
    </a>
  </div>
));

type Props = {
  showCreatorInfo?: boolean;
}

export const SolarSystem: FC<Props> = (props = { showCreatorInfo: true }) => {
  return (
    <>
      <Canvas camera={{ position: [0, 20, 35], fov: 60 }} shadows>
        {/* <color attach="background" args={['#000010']} /> */}
        {/* blue background color */}
        {/* <color attach="background" args={['#020721']} /> */}
        {/* <ambientLight intensity={0.5} /> */}
        <pointLight
          position={[0, 0, 0]}
          intensity={1500}
          color="#fff"
          distance={100}
          decay={2}
          castShadow
        />

        <hemisphereLight
          groundColor="#fff"
          intensity={1}
          position={[0, 0, 0]}
        />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.5}
          panSpeed={0.5}
          rotateSpeed={0.4}
          maxDistance={100}
          minDistance={15}
        />

        {/* Comets */}
        <Comet orbitRadius={15} orbitSpeed={0.5} size={0.01} trailLength={9} inclination={0.3} />
        <Comet orbitRadius={23} orbitSpeed={0.3} size={0.01} trailLength={7} inclination={-0.4} />
        <Comet orbitRadius={19} orbitSpeed={0.4} size={0.01} trailLength={11} inclination={0.6} />
        <Comet orbitRadius={27} orbitSpeed={0.25} size={0.01} trailLength={6} inclination={-0.2} />

        <Sun />

        <Planets />

      </Canvas>

      {props.showCreatorInfo && <DisplayName />}
    </>
  );
}
