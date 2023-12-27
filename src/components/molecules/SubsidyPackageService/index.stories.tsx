import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidyPackageService } from "components/molecules/SubsidyPackageService"

export default {
  component: SubsidyPackageService,
} as ComponentMeta<typeof SubsidyPackageService>

const Template: ComponentStory<typeof SubsidyPackageService> = args => <SubsidyPackageService {...args} />

export const Normal = Template.bind({})
