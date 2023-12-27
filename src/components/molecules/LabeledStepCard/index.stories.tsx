import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { LabeledStepCard } from "components/molecules/LabeledStepCard"

import Image from "images/top/introduction-step/installation.svg"

export default {
  component: LabeledStepCard,
} as ComponentMeta<typeof LabeledStepCard>

const Template: ComponentStory<typeof LabeledStepCard> = args => <LabeledStepCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  stepNumber: 1,
  title: "タイトル",
  image: {
    src: Image,
    alt: "初期設定",
    width: 306,
    height: 260,
  },
  description:
    "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明",
  notes: ["* test"],
}
