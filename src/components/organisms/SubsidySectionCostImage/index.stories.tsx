import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidySectionCostImage } from "components/organisms/SubsidySectionCostImage"

export default {
  component: SubsidySectionCostImage,
} as ComponentMeta<typeof SubsidySectionCostImage>

const Template: ComponentStory<typeof SubsidySectionCostImage> = args => <SubsidySectionCostImage {...args} />

export const Normal = Template.bind({})
