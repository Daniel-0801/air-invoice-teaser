import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SpecialOffer } from "components/organisms/SpecialOffer"

export default {
  component: SpecialOffer,
} as ComponentMeta<typeof SpecialOffer>

const Template: ComponentStory<typeof SpecialOffer> = args => <SpecialOffer {...args} />

export const Normal = Template.bind({})
