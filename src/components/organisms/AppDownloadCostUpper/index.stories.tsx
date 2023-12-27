import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppDownloadCostUpper } from "components/organisms/AppDownloadCostUpper"

export default {
  component: AppDownloadCostUpper,
} as ComponentMeta<typeof AppDownloadCostUpper>

const Template: ComponentStory<typeof AppDownloadCostUpper> = args => <AppDownloadCostUpper {...args} />

export const Normal = Template.bind({})
