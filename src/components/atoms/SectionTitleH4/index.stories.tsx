import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SectionTitleH4 } from "components/atoms/SectionTitleH4"

export default {
  component: SectionTitleH4,
} as ComponentMeta<typeof SectionTitleH4>

const Template: ComponentStory<typeof SectionTitleH4> = args => <SectionTitleH4 {...args} />

export const White = Template.bind({})
White.args = {
  children: "サンプルテキスト",
  color: "white",
}

export const Blue = Template.bind({})
Blue.args = {
  children: "サンプルテキスト",
}
