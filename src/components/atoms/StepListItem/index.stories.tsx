import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { COLOR } from "components/color"

import { StepListItem } from "components/atoms/StepListItem"

export default {
  component: StepListItem,
} as ComponentMeta<typeof StepListItem>

const Template: ComponentStory<typeof StepListItem> = args => <StepListItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
  stepNum: 1,
  children: "サンプル",
}

export const Long = Template.bind({})
Long.args = {
  stepNum: 1,
  children: "サンプルサンプルサンプルサンプルサンプルサンプル",
}

export const DifferentColor = Template.bind({})
DifferentColor.args = {
  stepNum: 1,
  children: "サンプル",
  color: COLOR.black,
}
