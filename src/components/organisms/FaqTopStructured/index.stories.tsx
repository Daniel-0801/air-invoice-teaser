import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { FaqTopStructured } from "components/organisms/FaqTopStructured"

export default {
  component: FaqTopStructured,
} as ComponentMeta<typeof FaqTopStructured>

const Template: ComponentStory<typeof FaqTopStructured> = args => <FaqTopStructured {...args} />

export const Normal = Template.bind({})
