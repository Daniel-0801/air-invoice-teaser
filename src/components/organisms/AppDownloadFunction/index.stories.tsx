import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppDownloadFunction } from "components/organisms/AppDownloadFunction"

export default {
  component: AppDownloadFunction,
} as ComponentMeta<typeof AppDownloadFunction>

const Template: ComponentStory<typeof AppDownloadFunction> = args => <AppDownloadFunction {...args} />

export const Normal = Template.bind({})
