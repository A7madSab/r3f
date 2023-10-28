import { ContactShadows, OrbitControls, Sky } from "@react-three/drei"
import { useControls } from "leva"
import SelfModel from "./SelfModel"

const Scene = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Backflip"]
    },
    boxPosition: {
      x: 0,
      y: -0.8,
      z: 0
    },
    boxSize: {
      x: 1.0,
      y: 0.5,
      z: 0.45
    }
  })

  return (
    <>
      <color attach="background" args={["#ececec"]} />

      <OrbitControls />
      <Sky />

      <spotLight intensity={40} position={[3, 3, 3]} />

      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <group>
          <SelfModel animation={animation} />
        </group>
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  )
}

export default Scene
