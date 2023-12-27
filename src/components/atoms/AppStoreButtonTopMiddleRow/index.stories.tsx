import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppStoreButtonTopMiddleRow } from "components/atoms/AppStoreButtonTopMiddleRow"

export default {
  component: AppStoreButtonTopMiddleRow,
} as ComponentMeta<typeof AppStoreButtonTopMiddleRow>

const Template: ComponentStory<typeof AppStoreButtonTopMiddleRow> = args => <AppStoreButtonTopMiddleRow {...args} />

export const Normal = Template.bind({})
