import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { FreeRegistrationButton } from "components/atoms/FreeRegistrationButton"

export default {
  component: FreeRegistrationButton,
} as ComponentMeta<typeof FreeRegistrationButton>

const Template: ComponentStory<typeof FreeRegistrationButton> = args => <FreeRegistrationButton {...args} />

export const Normal = Template.bind({})
