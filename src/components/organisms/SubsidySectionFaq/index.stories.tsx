import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidySectionFaq } from "."

export default {
  component: SubsidySectionFaq,
} as ComponentMeta<typeof SubsidySectionFaq>

const Template: ComponentStory<typeof SubsidySectionFaq> = args => <SubsidySectionFaq {...args} />

export const Normal = Template.bind({})
