import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { COLOR } from "components/color"

import { InvoiceIcon } from "components/atoms/Icon"
import { IconStepList } from "components/molecules/IconStepList"

export default {
  component: IconStepList,
} as ComponentMeta<typeof IconStepList>

const Template: ComponentStory<typeof IconStepList> = args => <IconStepList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  steps: [
    {
      icon: <InvoiceIcon size={64} fill={COLOR.main} />,
      stepNum: 1,
      text: "サンプル",
      subText: "サンプル",
    },
    {
      icon: <InvoiceIcon size={64} fill={COLOR.main} />,
      stepNum: 2,
      text: "サンプルサンプル",
      subText: "サンプル",
    },
    {
      icon: <InvoiceIcon size={64} fill={COLOR.main} />,
      stepNum: 3,
      text: "サンプル",
      subText: "サンプルサンプル",
    },
    {
      icon: <InvoiceIcon size={64} fill={COLOR.main} />,
      stepNum: 4,
      text: "サンプル",
    },
  ],
}
