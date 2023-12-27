import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppStoreButtonFunctionIntroduction } from "components/atoms/AppStoreButtonFunctionIntroduction"

export default {
  component: AppStoreButtonFunctionIntroduction,
} as ComponentMeta<typeof AppStoreButtonFunctionIntroduction>

const Template: ComponentStory<typeof AppStoreButtonFunctionIntroduction> = args => (
  <AppStoreButtonFunctionIntroduction {...args} />
)

export const Normal = Template.bind({})
