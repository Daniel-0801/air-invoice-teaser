import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { PrimaryButton } from "components/atoms/PrimaryButton"

export default {
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>

const Template: ComponentStory<typeof PrimaryButton> = args => <PrimaryButton {...args} />

export const Normal = Template.bind({})
