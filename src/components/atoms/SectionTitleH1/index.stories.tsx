import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SectionTitleH1 } from "components/atoms/SectionTitleH1"

export default {
  component: SectionTitleH1,
} as ComponentMeta<typeof SectionTitleH1>

const Template: ComponentStory<typeof SectionTitleH1> = args => <SectionTitleH1 {...args} />

export const White = Template.bind({})
White.args = {
  children: "サンプルテキスト",
  color: "white",
}

export const Blue = Template.bind({})
Blue.args = {
  children: "サンプルテキスト",
}
