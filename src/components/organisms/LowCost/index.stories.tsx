import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { LowCost } from "components/organisms/LowCost"

import { PageName } from "functions/adobeAnalytics/common"

export default {
  component: LowCost,
} as ComponentMeta<typeof LowCost>

const Template: ComponentStory<typeof LowCost> = args => <LowCost {...args} />

export const Normal = Template.bind({})

export const WithButton = Template.bind({})
WithButton.args = {
  withTrasitionButton: true,
  pageName: PageName.Top,
  transitionToCost: () => console.log("click trasition to cost button"),
}

export const WithoutButton = Template.bind({})
WithoutButton.args = {
  withTrasitionButton: false,
}
