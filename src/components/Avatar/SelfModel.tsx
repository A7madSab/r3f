import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useEffect, useRef, FC } from "react"
import { Group, Object3DEventMap, Vector3 } from "three"
import { GLTF } from "three-stdlib"

interface IProps {
  animation: string
}

interface IGLTF extends Omit<GLTF, "nodes" | "materials"> {
  nodes: {
    Wolf3D_Body: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
    Wolf3D_Outfit_Top: THREE.SkinnedMesh
    Wolf3D_Hair: THREE.SkinnedMesh
    EyeLeft: THREE.SkinnedMesh
    EyeRight: THREE.SkinnedMesh
    Wolf3D_Head: THREE.SkinnedMesh
    Wolf3D_Teeth: THREE.SkinnedMesh
    Hips: THREE.Bone
  }
  materials: {
    Wolf3D_Body: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
    Wolf3D_Hair: THREE.MeshStandardMaterial
    Wolf3D_Eye: THREE.MeshStandardMaterial
    Wolf3D_Skin: THREE.MeshStandardMaterial
    Wolf3D_Teeth: THREE.MeshStandardMaterial
  }
}

const SelfModel: FC<IProps> = ({ animation = "Typing" }) => {
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false
  })

  const group = useRef<Group<Object3DEventMap> | null>(null)

  const { materials, scene } = useGLTF(
    "assets/portfolio/Self.glb"
  ) as unknown as IGLTF

  const { animations: typingAnimations } = useFBX("assets/portfolio/Typing.fbx")
  const { animations: fallingAnimations } = useFBX(
    "assets/portfolio/Falling.fbx"
  )
  const { animations: backflipAnimations } = useFBX(
    "assets/portfolio/Backflip.fbx"
  )

  typingAnimations[0].name = "Typing"
  fallingAnimations[0].name = "Falling"
  backflipAnimations[0].name = "Backflip"

  const { actions } = useAnimations(
    [...typingAnimations, ...fallingAnimations, ...backflipAnimations],
    group
  )

  useFrame(state => {
    if (headFollow) {
      const target = new Vector3(state.mouse.x, state.mouse.y, 1)
      group.current?.getObjectByName("Head")?.lookAt(target)
    }
    if (cursorFollow) {
      const target = new Vector3(state.mouse.x, state.mouse.y, 1)
      group.current?.getObjectByName("Spine2")?.lookAt(target)
    }
  })

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play()
    return () => {
      actions[animation]?.reset().fadeOut(0.5)
    }
  }, [actions, animation])

  useEffect(() => {
    Object.values(materials).forEach(material => {
      material.wireframe = wireframe
    })
  }, [materials, wireframe])

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

export default SelfModel
