import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidyPackagePrice } from "components/molecules/SubsidyPackagePrice"

export default {
  component: SubsidyPackagePrice,
} as ComponentMeta<typeof SubsidyPackagePrice>

const Template: ComponentStory<typeof SubsidyPackagePrice> = args => <SubsidyPackagePrice {...args} />

export const Normal = Template.bind({})
