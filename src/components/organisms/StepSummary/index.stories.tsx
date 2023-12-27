import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { StepSummary } from "components/organisms/StepSummary"

export default {
  component: StepSummary,
} as ComponentMeta<typeof StepSummary>

const Template: ComponentStory<typeof StepSummary> = args => <StepSummary {...args} />

export const Normal = Template.bind({})
Normal.args = {
  onClicks: [
    () => console.log("sample1"),
    () => console.log("sample2"),
    () => console.log("sample3"),
    () => console.log("sample4"),
    () => console.log("sample5"),
  ],
}
