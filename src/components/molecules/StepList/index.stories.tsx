import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { StepList } from "components/molecules/StepList"

export default {
  component: StepList,
} as ComponentMeta<typeof StepList>

const Template: ComponentStory<typeof StepList> = args => <StepList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  steps: [
    {
      stepNum: 1,
      text: "サンプル",
      subText: "サンプル",
    },
    {
      stepNum: 2,
      text: "サンプル",
      subText: "サンプル",
    },
    {
      stepNum: 3,
      text: "サンプル",
      subText: "サンプル",
    },
    {
      stepNum: 4,
      text: "サンプル",
    },
  ],
}
