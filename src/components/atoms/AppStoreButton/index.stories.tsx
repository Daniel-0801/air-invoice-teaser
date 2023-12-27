import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppStoreButton } from "components/atoms/AppStoreButton"

export default {
  component: AppStoreButton,
} as ComponentMeta<typeof AppStoreButton>

const Template: ComponentStory<typeof AppStoreButton> = args => <AppStoreButton {...args} />

export const Normal = Template.bind({})
