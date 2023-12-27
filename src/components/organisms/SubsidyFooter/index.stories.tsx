import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidyFooter } from "components/organisms/SubsidyFooter"

export default {
  component: SubsidyFooter,
} as ComponentMeta<typeof SubsidyFooter>

const Template: ComponentStory<typeof SubsidyFooter> = args => <SubsidyFooter {...args} />

export const Normal = Template.bind({})
