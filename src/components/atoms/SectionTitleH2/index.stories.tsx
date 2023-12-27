import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SectionTitleH2 } from "components/atoms/SectionTitleH2"

export default {
  component: SectionTitleH2,
} as ComponentMeta<typeof SectionTitleH2>

const Template: ComponentStory<typeof SectionTitleH2> = args => <SectionTitleH2 {...args} />

export const White = Template.bind({})
White.args = {
  children: "サンプルテキスト",
  color: "white",
}

export const Blue = Template.bind({})
Blue.args = {
  children: "サンプルテキスト",
}
