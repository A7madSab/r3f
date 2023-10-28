import { Suspense, FC } from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "../components/Avatar/Scene"

const AvatarScene: FC = () => {
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <Scene />
      </Canvas>
    </Suspense>
  )
}

export default AvatarScene
