import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { PaidVersionApplicationStep } from "components/organisms/PaidVersionApplicationStep"

export default {
  component: PaidVersionApplicationStep,
} as ComponentMeta<typeof PaidVersionApplicationStep>

const Template: ComponentStory<typeof PaidVersionApplicationStep> = args => <PaidVersionApplicationStep {...args} />

export const Normal = Template.bind({})
