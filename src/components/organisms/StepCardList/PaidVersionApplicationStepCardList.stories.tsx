import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { PaidVersionApplicationStepCardList } from "components/organisms/StepCardList/PaidVersionApplicationStepCardList"

export default {
  component: PaidVersionApplicationStepCardList,
} as ComponentMeta<typeof PaidVersionApplicationStepCardList>

const Template: ComponentStory<typeof PaidVersionApplicationStepCardList> = args => (
  <PaidVersionApplicationStepCardList {...args} />
)

export const Normal = Template.bind({})
