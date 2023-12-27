import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppStoreButtonCostUpperRow } from "components/atoms/AppStoreButtonCostUpperRow"

export default {
  component: AppStoreButtonCostUpperRow,
} as ComponentMeta<typeof AppStoreButtonCostUpperRow>

const Template: ComponentStory<typeof AppStoreButtonCostUpperRow> = args => <AppStoreButtonCostUpperRow {...args} />

export const Normal = Template.bind({})
