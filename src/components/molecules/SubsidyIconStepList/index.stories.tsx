import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { COLOR } from "components/color"

import { InvoiceIcon } from "components/atoms/Icon"
import { SubsidyIconStepList } from "components/molecules/SubsidyIconStepList"

export default {
  component: SubsidyIconStepList,
} as ComponentMeta<typeof SubsidyIconStepList>

const Template: ComponentStory<typeof SubsidyIconStepList> = args => <SubsidyIconStepList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  steps: [
    {
      children: <InvoiceIcon size={64} fill={COLOR.main} />,
      stepNum: 1,
      text: "サンプル",
      subText: "サンプル",
    },
    {
      children: <InvoiceIcon size={64} fill={COLOR.main} />,
      stepNum: 2,
      text: "サンプルサンプル",
      subText: "サンプル",
    },
    {
      children: <InvoiceIcon size={64} fill={COLOR.main} />,
      stepNum: 3,
      text: "サンプル",
      subText: "サンプルサンプル",
    },
    {
      children: <InvoiceIcon size={64} fill={COLOR.main} />,
      stepNum: 4,
      text: "サンプル",
    },
  ],
}
