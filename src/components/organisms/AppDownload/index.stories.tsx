import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppDownload } from "components/organisms/AppDownload"

export default {
  component: AppDownload,
} as ComponentMeta<typeof AppDownload>

const Template: ComponentStory<typeof AppDownload> = args => <AppDownload {...args} />

export const Normal = Template.bind({})
