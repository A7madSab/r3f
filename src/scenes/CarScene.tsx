import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CarShow from "../components/Car/CarShow"

const CarScene = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  )
}

export default CarScene
