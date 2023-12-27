import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidySectionHero } from "components/organisms/SubsidySectionHero"

export default {
  component: SubsidySectionHero,
} as ComponentMeta<typeof SubsidySectionHero>

const Template: ComponentStory<typeof SubsidySectionHero> = args => <SubsidySectionHero {...args} />

export const Normal = Template.bind({})
