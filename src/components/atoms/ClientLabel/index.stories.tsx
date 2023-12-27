import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ClientLabel } from "components/atoms/ClientLabel"

export default {
  component: ClientLabel,
} as ComponentMeta<typeof ClientLabel>

const Template: ComponentStory<typeof ClientLabel> = args => <ClientLabel {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "サンプル",
}
