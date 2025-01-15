import * as THREE from 'three';

import { Planet } from "./Planet";

import venusImgTexture from "../assets/textures/venusmap.jpg";
import uranusImgTexture from "../assets/textures/uranusmap.jpg";
import neptuneImgTexture from "../assets/textures/neptunemap.jpg";

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
            // textureUrl={mercuryImgTexture}
            textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/7/5/75acb3ebf6cc25845fa52981eadfb4a1f91d61b7.jpeg"
            castShadow
            receiveShadow
        />

        {/* Venus */}
        <Planet
            name="Venus"
            position={[0, 0, 0]}
            size={0.9}
            // color="#e3a372"
            orbitRadius={10}
            orbitSpeed={0.587} // 1.174 / 2
            textureUrl={venusImgTexture}
            // textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/5/1/510b0bdc3aa89ae91ab91718cec0c01f41798082.jpeg"
            castShadow
            receiveShadow
        />

        {/* Earth */}
        <Planet
            name="Earth"
            position={[0, 0, 0]}
            size={1}
            // color="#4287f5"
            orbitRadius={14}
            orbitSpeed={0.5} // 1 / 2
            tilt={THREE.MathUtils.degToRad(23.5)}
            textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/5/1/51d3b482c420866efdfd64f6abafc3917a0f86d3.jpeg"
            castShadow
            receiveShadow
        />

        {/* Mars */}
        <Planet
            name="Mars"
            position={[0, 0, 0]}
            size={0.5}
            // color="#c1440e"
            orbitRadius={17}
            orbitSpeed={0.401} // 0.802 / 2
            textureUrl='https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/7/7/77793f9bc2e9e1c1274b929cf2b7121191e25138.jpeg'
            castShadow
            receiveShadow
        />

        {/* Jupiter */}
        <Planet
            name="Jupiter"
            position={[0, 0, 0]}
            size={2.5}
            // color="#e3a372"
            orbitRadius={22}
            orbitSpeed={0.217} // 0.434 / 2
            textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/2/8/28e78a1aa1594ffd8e0f746729c09418bec5d9cf.jpeg"
            castShadow
            receiveShadow
        />

        {/* Saturn */}
        <Planet
            name="Saturn"
            position={[0, 0, 0]}
            size={1.5}
            // color="#e3c072"
            orbitRadius={31}
            orbitSpeed={0.1615} // 0.323 / 2
            rings={{
                innerRadius: 2,
                outerRadius: 5,
                color: "#d4af37"
            }}
            textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/6/8/6802b3e1a008f462fdbcab65f682e50a6e64ac16.jpeg"
            castShadow
            receiveShadow
        />

        {/* Uranus */}
        <Planet
            name="Uranus"
            position={[0, 0, 0]}
            size={1.3}
            // color="#72a3e3"
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
            // color="#4287f5"
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
            // color="#b3b3b3"
            orbitRadius={47}
            orbitSpeed={0.0795} // 0.159 / 2
            textureUrl="https://global.discourse-cdn.com/flex035/uploads/threejs/original/3X/8/7/8779a5ac9a3d7c9c5bc281e45dd51906ad564d2f.jpeg"
            castShadow
            receiveShadow
        />
    </>;
}

export default Planets;