import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { StepCard } from "components/molecules/StepCard"

import Step1Img from "images/flow/step1.svg"

export default {
  component: StepCard,
} as ComponentMeta<typeof StepCard>

const Template: ComponentStory<typeof StepCard> = args => <StepCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  id: "sample-id",
  title: "サンプル",
  children: "サンプルサンプルサンプルサンプルサンプルサンプル",
  image: {
    src: Step1Img,
    width: 222,
    height: 243,
    alt: "サンプルalt",
  },
}

export const NoImage = Template.bind({})
NoImage.args = {
  id: "sample-id",
  title: "サンプル",
  children: "サンプルサンプルサンプルサンプルサンプルサンプル",
}

export const Long = Template.bind({})
Long.args = {
  id: "sample-id",
  title: "サンプル",
  children:
    "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
  image: {
    src: Step1Img,
    width: 222,
    height: 243,
    alt: "サンプルalt",
  },
}

const textWithNote = (text: string, note: string) => {
  const Text = styled.p``
  const Note = styled.p`
    font-size: 12px;
    color: ${COLOR.black60};
    margin-top: 24px;
  `

  return (
    <>
      <Text>{text}</Text>
      <Note>{note}</Note>
    </>
  )
}

export const WithNote = Template.bind({})
WithNote.args = {
  id: "sample-id",
  title: "サンプル",
  children: textWithNote("サンプル", "サンプルサンプルサンプルサンプルサンプルサンプル"),
  image: {
    src: Step1Img,
    width: 222,
    height: 243,
    alt: "サンプルalt",
  },
}
