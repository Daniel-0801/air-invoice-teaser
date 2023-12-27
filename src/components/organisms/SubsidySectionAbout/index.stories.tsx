import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidySectionAbout } from "components/organisms/SubsidySectionAbout"

export default {
  component: SubsidySectionAbout,
} as ComponentMeta<typeof SubsidySectionAbout>

const Template: ComponentStory<typeof SubsidySectionAbout> = args => <SubsidySectionAbout {...args} />

export const Normal = Template.bind({})
