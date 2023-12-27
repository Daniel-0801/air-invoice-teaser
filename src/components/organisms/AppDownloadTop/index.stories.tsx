import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppDownloadTop } from "components/organisms/AppDownloadTop"

export default {
  component: AppDownloadTop,
} as ComponentMeta<typeof AppDownloadTop>

const Template: ComponentStory<typeof AppDownloadTop> = args => <AppDownloadTop {...args} />

export const Normal = Template.bind({})
