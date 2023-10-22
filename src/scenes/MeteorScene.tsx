import { Suspense, FC } from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "../components/Meteor/Scene"

interface IProps {
  color?: string
  beamColorLight?: string
  beamColorDark?: string
}

const MeteorScene: FC<IProps> = ({ color, beamColorLight, beamColorDark }) => {
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      <Canvas>
        <Scene
          color={color}
          beamColorLight={beamColorLight}
          beamColorDark={beamColorDark}
        />
      </Canvas>
    </Suspense>
  )
}

MeteorScene.defaultProps = {
  color: "#b68432",
  beamColorLight: "#fff7ed",
  beamColorDark: "#feedd7"
}

export default MeteorScene
