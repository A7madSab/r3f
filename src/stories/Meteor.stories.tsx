import type { Meta, StoryObj } from "@storybook/react"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"

import MeteorScene from "../components/Meteor/Scene"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Scenes/Meteor",
  component: MeteorScene,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "color" }
    },
    beamColorLight: {
      control: { type: "color" }
    },
    beamColorDark: {
      control: { type: "color" }
    }
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
} satisfies Meta<typeof MeteorScene>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: "#b68432",
    beamColorLight: "#fff7ed",
    beamColorDark: "#feedd7"
  }
}
