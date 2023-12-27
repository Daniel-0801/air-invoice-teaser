import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidySectionProcess } from "components/organisms/SubsidySectionProcess"

export default {
  component: SubsidySectionProcess,
} as ComponentMeta<typeof SubsidySectionProcess>

const Template: ComponentStory<typeof SubsidySectionProcess> = args => <SubsidySectionProcess {...args} />

export const Normal = Template.bind({})
