import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SimpleCostExplanation } from "components/organisms/SimpleCostExplanation"

export default {
  component: SimpleCostExplanation,
} as ComponentMeta<typeof SimpleCostExplanation>

const Template: ComponentStory<typeof SimpleCostExplanation> = args => <SimpleCostExplanation {...args} />

export const Normal = Template.bind({})
