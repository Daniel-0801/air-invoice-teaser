import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { DetailedGuide } from "components/organisms/DetailedGuide"

export default {
  component: DetailedGuide,
} as ComponentMeta<typeof DetailedGuide>

const Template: ComponentStory<typeof DetailedGuide> = args => <DetailedGuide {...args} />

export const Normal = Template.bind({})
