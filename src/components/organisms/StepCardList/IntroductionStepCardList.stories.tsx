import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { IntroductionStepCardList } from "components/organisms/StepCardList/IntroductionStepCardList"

export default {
  component: IntroductionStepCardList,
} as ComponentMeta<typeof IntroductionStepCardList>

const Template: ComponentStory<typeof IntroductionStepCardList> = args => <IntroductionStepCardList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  stepCardIds: ["sample-id-0", "sample-id-1"],
}
