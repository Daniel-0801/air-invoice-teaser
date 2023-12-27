import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { UsageStepList } from "components/organisms/UsageStepList"

import { PageName } from "functions/adobeAnalytics/common"

export default {
  component: UsageStepList,
} as ComponentMeta<typeof UsageStepList>

const Template: ComponentStory<typeof UsageStepList> = args => <UsageStepList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  pageName: PageName.Top,
  navigationButtonOnClick: () => console.log("sample"),
}
