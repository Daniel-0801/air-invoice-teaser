import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SectionDescription } from "components/atoms/SectionDescription"

export default {
  component: SectionDescription,
} as ComponentMeta<typeof SectionDescription>

const Template: ComponentStory<typeof SectionDescription> = args => <SectionDescription {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "サンプルテキスト",
}
