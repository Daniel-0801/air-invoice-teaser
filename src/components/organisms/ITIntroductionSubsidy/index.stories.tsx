import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ITIntroductionSubsidy } from "components/organisms/ITIntroductionSubsidy"

export default {
  component: ITIntroductionSubsidy,
} as ComponentMeta<typeof ITIntroductionSubsidy>

const Template: ComponentStory<typeof ITIntroductionSubsidy> = args => <ITIntroductionSubsidy {...args} />

export const Normal = Template.bind({})
