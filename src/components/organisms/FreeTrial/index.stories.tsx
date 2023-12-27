import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { FreeTrial } from "components/organisms/FreeTrial"

export default {
  component: FreeTrial,
} as ComponentMeta<typeof FreeTrial>

const Template: ComponentStory<typeof FreeTrial> = args => <FreeTrial {...args} />

export const Normal = Template.bind({})
Normal.args = {
  title: "サンプルタイトル",
}
