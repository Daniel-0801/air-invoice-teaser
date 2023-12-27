import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { BorderedText } from "components/atoms/BorderedText"

export default {
  component: BorderedText,
} as ComponentMeta<typeof BorderedText>

const Template: ComponentStory<typeof BorderedText> = args => <BorderedText {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "サンプルテキスト",
}
