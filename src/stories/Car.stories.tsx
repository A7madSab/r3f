import type { Meta, StoryObj } from "@storybook/react"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"

import CarScene from "../components/Car/CarShow"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Scenes/Car",
  component: CarScene,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  decorators: [
    Story => (
      <Suspense fallback={<h1>...loading</h1>}>
        <Canvas style={{ width: "100vw", height: "100vh" }}>
          <Story />
        </Canvas>
      </Suspense>
    )
  ]
} satisfies Meta<typeof CarScene>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}
