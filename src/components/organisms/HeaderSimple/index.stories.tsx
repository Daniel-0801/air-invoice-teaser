import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { HeaderSimple } from "components/organisms/HeaderSimple"

export default {
  component: HeaderSimple,
} as ComponentMeta<typeof HeaderSimple>

const Template: ComponentStory<typeof HeaderSimple> = args => <HeaderSimple {...args} />

export const Normal = Template.bind({})
