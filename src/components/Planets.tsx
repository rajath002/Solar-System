import * as THREE from 'three';

import { Planet } from "./Planet";

import venusImgTexture from "../assets/textures/venusmap.jpg";
import uranusImgTexture from "../assets/textures/uranusmap.jpg";
import neptuneImgTexture from "../assets/textures/neptunemap.jpg";
import mercuryImgTexture from "../assets/textures/mercurymap.jpg";
import earthImgTexture from "../assets/textures/earthmap.jpg";
import marsImgTexture from "../assets/textures/marsmap.jpg";
import saturnImgTexture from "../assets/textures/saturnmap.jpg";
import jupiterImgTexture from "../assets/textures/jupitermap.jpg";
import plutoImgTexture from "../assets/textures/plutomap.jpg";

/**
 * Renders planets in 3D space using THREE.js.
 * Each planet has properties like name, position, size, orbit, texture, and shadows.
 * 
 * Planets:
 * - Mercury
 * - Venus
 * - Earth
 * - Mars
 * - Jupiter
 * - Saturn
 * - Uranus
 * - Neptune
 * - Pluto
 * 
 * @component
 */
const Planets = () => {
    return <>
        {/* Mercury */}
        <Planet
            name="Mercury"
            position={[0, 0, 0]}
            size={0.4}
            color="#c37d5e"
            orbitRadius={7}
            orbitSpeed={0.8035} // 1.607 / 2
            textureUrl={mercuryImgTexture}
            castShadow
            receiveShadow
        />

        {/* Venus */}
        <Planet
            name="Venus"
            position={[0, 0, 0]}
            size={0.9}
            orbitRadius={10}
            orbitSpeed={0.587} // 1.174 / 2
            textureUrl={venusImgTexture}
            castShadow
            receiveShadow
        />

        {/* Earth */}
        <Planet
            name="Earth"
            position={[0, 0, 0]}
            size={1}
            orbitRadius={14}
            orbitSpeed={0.5} // 1 / 2
            tilt={THREE.MathUtils.degToRad(23.5)}
            textureUrl={earthImgTexture}
            castShadow
            receiveShadow
        />

        {/* Mars */}
        <Planet
            name="Mars"
            position={[0, 0, 0]}
            size={0.5}
            orbitRadius={17}
            orbitSpeed={0.401} // 0.802 / 2
            textureUrl={marsImgTexture}
            castShadow
            receiveShadow
        />

        {/* Jupiter */}
        <Planet
            name="Jupiter"
            position={[0, 0, 0]}
            size={2.5}
            orbitRadius={22}
            orbitSpeed={0.217} // 0.434 / 2
            textureUrl={jupiterImgTexture}
            castShadow
            receiveShadow
        />

        {/* Saturn */}
        <Planet
            name="Saturn"
            position={[0, 0, 0]}
            size={1.5}
            orbitRadius={31}
            orbitSpeed={0.1615} // 0.323 / 2
            rings={{
                innerRadius: 2,
                outerRadius: 5,
                color: "#d4af37"
            }}
            textureUrl={saturnImgTexture}
            castShadow
            receiveShadow
        />

        {/* Uranus */}
        <Planet
            name="Uranus"
            position={[0, 0, 0]}
            size={1.3}
            orbitRadius={37}
            orbitSpeed={0.114} // 0.228 / 2
            textureUrl={uranusImgTexture}
            rings={{
                innerRadius: 3.5,
                outerRadius: 4,
                color: "#d4af37"
            }}
            castShadow
            receiveShadow
        />

        {/* Neptune */}
        <Planet
            name="Neptune"
            position={[0, 0, 0]}
            size={1.2}
            orbitRadius={43}
            orbitSpeed={0.091} // 0.182 / 2
            textureUrl={neptuneImgTexture}
            castShadow
            receiveShadow
        />

        {/* Pluto */}
        <Planet
            name="Pluto"
            position={[0, 0, 0]}
            size={0.40} // 0.18
            orbitRadius={47}
            orbitSpeed={0.0795} // 0.159 / 2
            textureUrl={plutoImgTexture}
            castShadow
            receiveShadow
        />
    </>;
}

export default Planets;