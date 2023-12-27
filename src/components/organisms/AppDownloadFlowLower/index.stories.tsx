import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppDownloadFlowLower } from "components/organisms/AppDownloadFlowLower"

export default {
  component: AppDownloadFlowLower,
} as ComponentMeta<typeof AppDownloadFlowLower>

const Template: ComponentStory<typeof AppDownloadFlowLower> = args => <AppDownloadFlowLower {...args} />

export const Normal = Template.bind({})
