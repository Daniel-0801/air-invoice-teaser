import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppStoreButtonTopFv } from "components/atoms/AppStoreButtonTopFv"

export default {
  component: AppStoreButtonTopFv,
} as ComponentMeta<typeof AppStoreButtonTopFv>

const Template: ComponentStory<typeof AppStoreButtonTopFv> = args => <AppStoreButtonTopFv {...args} />

export const Normal = Template.bind({})
