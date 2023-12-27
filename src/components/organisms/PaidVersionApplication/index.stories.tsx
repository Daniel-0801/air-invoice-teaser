import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { PaidVersionApplication } from "components/organisms/PaidVersionApplication"

export default {
  component: PaidVersionApplication,
} as ComponentMeta<typeof PaidVersionApplication>

const Template: ComponentStory<typeof PaidVersionApplication> = args => <PaidVersionApplication {...args} />

export const Normal = Template.bind({})
