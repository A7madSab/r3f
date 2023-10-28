import * as THREE from "three"
import { useRef, useState, FC } from "react"
import { ThreeElements } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

const Box: FC<ThreeElements["mesh"]> = props => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}

const BoxScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault fov={33} position={[-0.07, 0, -10]} />
      <OrbitControls
        target={[0.02, 0.806, 0.427]}
        maxDistance={35}
        maxPolarAngle={Math.PI * 0.45}
      />

      <color args={[0.9, 0.9, 0.9]} attach="background" />

      <ambientLight />
      <pointLight position={[0, 0, 0]} />

      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  )
}

export default BoxScene
