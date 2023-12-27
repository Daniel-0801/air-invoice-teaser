import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { TaglineBar } from "components/molecules/TaglineBar"

export default {
  component: TaglineBar,
} as ComponentMeta<typeof TaglineBar>

const Template: ComponentStory<typeof TaglineBar> = args => <TaglineBar {...args} />

export const Normal = Template.bind({})
