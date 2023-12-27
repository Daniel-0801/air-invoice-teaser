import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppDownloadCostLower } from "components/organisms/AppDownloadCostLower"

export default {
  component: AppDownloadCostLower,
} as ComponentMeta<typeof AppDownloadCostLower>

const Template: ComponentStory<typeof AppDownloadCostLower> = args => <AppDownloadCostLower {...args} />

export const Normal = Template.bind({})
