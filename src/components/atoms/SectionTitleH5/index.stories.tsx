import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SectionTitleH5 } from "components/atoms/SectionTitleH5"

export default {
  component: SectionTitleH5,
} as ComponentMeta<typeof SectionTitleH5>

const Template: ComponentStory<typeof SectionTitleH5> = args => <SectionTitleH5 {...args} />

export const White = Template.bind({})
White.args = {
  children: "サンプルテキスト",
  color: "white",
}

export const Blue = Template.bind({})
Blue.args = {
  children: "サンプルテキスト",
}
