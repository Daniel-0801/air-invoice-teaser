import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { StepCardList } from "components/organisms/StepCardList"

import Step1Img from "images/flow/step1.svg"

export default {
  component: StepCardList,
} as ComponentMeta<typeof StepCardList>

const Template: ComponentStory<typeof StepCardList> = args => <StepCardList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  stepCards: [
    {
      id: "sample-id-0",
      title: "サンプル",
      children: "サンプルサンプルサンプルサンプルサンプルサンプル",
      image: {
        src: Step1Img,
        width: 222,
        height: 243,
        alt: "サンプルalt",
      },
    },
    {
      id: "sample-id-1",
      title: "サンプル",
      children: "サンプルサンプルサンプルサンプルサンプルサンプル",
    },
    {
      id: "sample-id-2",
      title: "サンプル",
      children:
        "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
      image: {
        src: Step1Img,
        width: 222,
        height: 243,
        alt: "サンプルalt",
      },
    },
  ],
}
