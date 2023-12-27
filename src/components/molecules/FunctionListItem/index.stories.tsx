import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { COLOR } from "components/color"

import { CameraIcon } from "components/atoms/Icon"
import { FunctionListItem } from "components/molecules/FunctionListItem"

import SampleImage from "images/function/main/digitizing.gif"

export default {
  component: FunctionListItem,
} as ComponentMeta<typeof FunctionListItem>

const Template: ComponentStory<typeof FunctionListItem> = args => <FunctionListItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
  name: "機能名機能名機能名",
  icon: <CameraIcon size={24} fill={COLOR.main} />,
  caption: "キャプション",
  description: "サンプルサンプルサンプルサンプルサンプルサンプル",
  image: {
    src: SampleImage,
    alt: "サンプル",
  },
}

export const WithNote = Template.bind({})
WithNote.args = {
  name: "機能名機能名機能名",
  icon: <CameraIcon size={24} fill={COLOR.main} />,
  caption: "キャプション",
  description: "サンプルサンプルサンプルサンプルサンプルサンプル",
  note: "サンプルサンプル",
  image: {
    src: SampleImage,
    alt: "サンプル",
  },
}
