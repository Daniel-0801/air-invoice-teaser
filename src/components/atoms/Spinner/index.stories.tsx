import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Spinner } from "components/atoms/Spinner"

export default {
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const Normal = Template.bind({})

export const Small = Template.bind({})
Small.args = {
  size: 30,
}
