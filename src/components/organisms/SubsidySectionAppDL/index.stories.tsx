import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidySectionAppDL } from "."

export default {
  component: SubsidySectionAppDL,
} as ComponentMeta<typeof SubsidySectionAppDL>

const Template: ComponentStory<typeof SubsidySectionAppDL> = args => <SubsidySectionAppDL {...args} />

export const Normal = Template.bind({})
