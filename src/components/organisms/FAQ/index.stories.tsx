import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { FAQ } from "components/organisms/FAQ"

export default {
  component: FAQ,
} as ComponentMeta<typeof FAQ>

const Template: ComponentStory<typeof FAQ> = args => <FAQ {...args} />

export const Normal = Template.bind({})
