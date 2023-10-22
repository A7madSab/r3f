import { NodeToyMaterial } from "@nodetoy/react-nodetoy"
import { useGLTF, useTexture } from "@react-three/drei"
import { data as fragmentsShaderData } from "../../shaders/Meteor/fragments-shader"
import { FC, useEffect, Suspense } from "react"
import {
  OrbitControls,
  PerspectiveCamera,
  Environment
} from "@react-three/drei"

import { useThree } from "@react-three/fiber"
import Meteor from "./Meteor"
import Beams from "./Beams"

interface IProps {
  color?: string
  beamColorLight?: string
  beamColorDark?: string
}

const Scene: FC<IProps> = ({ color, beamColorLight, beamColorDark }) => {
  /**
    Models used:
    https://sketchfab.com/3d-models/astronaut-dfde0bf25e2b44809c08105c30610694
    https://sketchfab.com/3d-models/tripod-omni-directional-lamp-d7ee949704c24ddab792184fcfde0016#download
    https://sketchfab.com/3d-models/steampunk-pipes-and-valves-9d0d9bd35e1744a4a7b258299c0cffaa#download
    https://sketchfab.com/3d-models/explorer-t30-concept-rover-cf05f52b5d364a00a7af3e94731055bf
   */
  const { nodes } = useGLTF("assets/models/scene.glb")

  const [
    ground,
    ground2,
    ground_debris,
    pipes_and_rover,
    astronauts_white,
    astronauts_orange,
    fragments,
    debris
  ] = useTexture([
    "assets/textures/ground.png",
    "assets/textures/ground2.png",
    "assets/textures/ground_debris.png",
    "assets/textures/pipes_and_rover.png",
    "assets/textures/astronauts_white.png",
    "assets/textures/astronauts_orange.png",
    "assets/textures/fragments.png",
    "assets/textures/debris.png"
  ])

  const { gl } = useThree()

  useEffect(() => {
    gl.toneMappingExposure = 5
  }, [gl])

  return (
    <>
      {/* simple ground */}
      <Environment
        background={"only"}
        files={"assets/textures/envmap_blur.hdr"}
        ground={{ height: 100, radius: 300 }}
      />

      {/* to calculate the reflection of the scene */}
      <Environment background={false} files={"assets/textures/envmap.hdr"} />

      <PerspectiveCamera
        makeDefault
        fov={33}
        position={[-0.07, 16.41, -24.1]}
      />
      <OrbitControls
        target={[0.02, 0.806, 0.427]}
        maxDistance={35}
        maxPolarAngle={Math.PI * 0.45}
      />

      <Suspense>
        <>
          <mesh geometry={nodes.ground.geometry}>
            <meshBasicMaterial map={ground} />
          </mesh>

          <mesh geometry={nodes.ground2.geometry}>
            <meshBasicMaterial map={ground2} />
          </mesh>

          <mesh geometry={nodes.ground_debris.geometry}>
            <meshBasicMaterial map={ground_debris} />
          </mesh>

          <mesh geometry={nodes.pipes_and_rover.geometry}>
            <meshBasicMaterial map={pipes_and_rover} />
          </mesh>

          <mesh geometry={nodes.astronauts_white.geometry}>
            <meshBasicMaterial map={astronauts_white} />
          </mesh>

          <mesh geometry={nodes.astronauts_orange.geometry}>
            <meshBasicMaterial map={astronauts_orange} />
          </mesh>

          <mesh geometry={nodes.fragments.geometry}>
            <meshBasicMaterial map={fragments} />
          </mesh>

          <mesh geometry={nodes.ground.geometry}>
            <NodeToyMaterial data={fragmentsShaderData} />
          </mesh>

          <mesh geometry={nodes.debris.geometry}>
            <meshBasicMaterial map={debris} />
          </mesh>

          <mesh geometry={nodes.astronauts_visors.geometry}>
            <meshStandardMaterial roughness={0} metalness={1} color={color} />
          </mesh>
        </>
        <Meteor />
        <Beams beamColorLight={beamColorLight} beamColorDark={beamColorDark} />
      </Suspense>
    </>
  )
}

export default Scene
