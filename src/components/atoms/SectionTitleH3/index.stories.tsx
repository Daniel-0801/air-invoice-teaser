import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SectionTitleH3 } from "components/atoms/SectionTitleH3"

export default {
  component: SectionTitleH3,
} as ComponentMeta<typeof SectionTitleH3>

const Template: ComponentStory<typeof SectionTitleH3> = args => <SectionTitleH3 {...args} />

export const White = Template.bind({})
White.args = {
  children: "サンプルテキスト",
  color: "white",
}

export const Blue = Template.bind({})
Blue.args = {
  children: "サンプルテキスト",
}
