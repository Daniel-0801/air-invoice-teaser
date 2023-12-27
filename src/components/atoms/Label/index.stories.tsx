import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Label } from "components/atoms/Label"

export default {
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = args => <Label {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "サンプル",
}
