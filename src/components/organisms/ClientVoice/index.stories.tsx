import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ClientVoice } from "components/organisms/ClientVoice"

import { PageName } from "functions/adobeAnalytics/common"

export default {
  component: ClientVoice,
} as ComponentMeta<typeof ClientVoice>

const Template: ComponentStory<typeof ClientVoice> = args => <ClientVoice {...args} />

export const Normal = Template.bind({})
Normal.args = {
  pageName: PageName.Top,
}
