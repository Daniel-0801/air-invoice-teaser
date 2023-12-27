import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SimpleIntroductionStepCardList } from "components/organisms/SimpleIntroductionStepCardList"

import { PageName } from "functions/adobeAnalytics/common"

export default {
  component: SimpleIntroductionStepCardList,
} as ComponentMeta<typeof SimpleIntroductionStepCardList>

const Template: ComponentStory<typeof SimpleIntroductionStepCardList> = args => (
  <SimpleIntroductionStepCardList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  pageName: PageName.Top,
  transitionToFlow: () => console.log("click transition to flow button"),
}
