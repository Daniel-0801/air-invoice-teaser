import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppStoreButtonFlowLowerRow } from "components/atoms/AppStoreButtonFlowLowerRow"

export default {
  component: AppStoreButtonFlowLowerRow,
} as ComponentMeta<typeof AppStoreButtonFlowLowerRow>

const Template: ComponentStory<typeof AppStoreButtonFlowLowerRow> = args => <AppStoreButtonFlowLowerRow {...args} />

export const Normal = Template.bind({})
