import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidyEntryThanks } from "components/organisms/SubsidyEntryThanks"

export default {
  component: SubsidyEntryThanks,
} as ComponentMeta<typeof SubsidyEntryThanks>

const Template: ComponentStory<typeof SubsidyEntryThanks> = args => <SubsidyEntryThanks {...args} />

export const Normal = Template.bind({})
