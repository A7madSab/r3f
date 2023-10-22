import { Suspense, FC } from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "../components/Box/Scene"

const BoxScene: FC = () => {
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      <Canvas>
        <Scene />
      </Canvas>
    </Suspense>
  )
}

export default BoxScene
