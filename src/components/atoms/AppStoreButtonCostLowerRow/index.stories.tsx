import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppStoreButtonCostLowerRow } from "components/atoms/AppStoreButtonCostLowerRow"

export default {
  component: AppStoreButtonCostLowerRow,
} as ComponentMeta<typeof AppStoreButtonCostLowerRow>

const Template: ComponentStory<typeof AppStoreButtonCostLowerRow> = args => <AppStoreButtonCostLowerRow {...args} />

export const Normal = Template.bind({})
