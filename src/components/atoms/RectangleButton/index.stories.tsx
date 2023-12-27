import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { RectangleButton } from "components/atoms/RectangleButton"

export default {
  component: RectangleButton,
} as ComponentMeta<typeof RectangleButton>

const Template: ComponentStory<typeof RectangleButton> = args => <RectangleButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  onClick: () => console.log("sample"),
  children: "サンプルサンプル",
}
