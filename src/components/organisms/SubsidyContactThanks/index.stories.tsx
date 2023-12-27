import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidyContactThanks } from "components/organisms/SubsidyContactThanks"

export default {
  component: SubsidyContactThanks,
} as ComponentMeta<typeof SubsidyContactThanks>

const Template: ComponentStory<typeof SubsidyContactThanks> = args => <SubsidyContactThanks {...args} />

export const Normal = Template.bind({})
