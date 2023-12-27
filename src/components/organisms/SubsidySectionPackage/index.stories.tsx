import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidySectionPackage } from "components/organisms/SubsidySectionPackage"

export default {
  component: SubsidySectionPackage,
} as ComponentMeta<typeof SubsidySectionPackage>

const Template: ComponentStory<typeof SubsidySectionPackage> = args => <SubsidySectionPackage {...args} />

export const Normal = Template.bind({})
