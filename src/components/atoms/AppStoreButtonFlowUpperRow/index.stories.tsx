import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppStoreButtonFlowUpperRow } from "components/atoms/AppStoreButtonFlowUpperRow"

export default {
  component: AppStoreButtonFlowUpperRow,
} as ComponentMeta<typeof AppStoreButtonFlowUpperRow>

const Template: ComponentStory<typeof AppStoreButtonFlowUpperRow> = args => <AppStoreButtonFlowUpperRow {...args} />

export const Normal = Template.bind({})
