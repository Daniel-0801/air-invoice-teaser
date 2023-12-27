import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { COLOR } from "components/color"

import { CameraIcon } from "components/atoms/Icon"
import { FunctionList } from "components/organisms/FunctionList"

import SampleGifImage from "images/function/main/digitizing.gif"

export default {
  component: FunctionList,
} as ComponentMeta<typeof FunctionList>

const Template: ComponentStory<typeof FunctionList> = args => <FunctionList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  title: "サンプルサンプルサンプルサンプルサンプルサンプル",
  functions: [
    {
      name: "機能名機能名",
      icon: <CameraIcon size={24} fill={COLOR.main} />,
      caption: "キャプション",
      description: "サンプルサンプルサンプルサンプルサンプルサンプル",
      image: {
        src: SampleGifImage,
        alt: "サンプル",
      },
    },
    {
      name: "機能名機能名機能名",
      icon: <CameraIcon size={24} fill={COLOR.main} />,
      caption: "キャプションキャプションキャプション",
      description: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
      note: "※サンプルサンプル",
      image: {
        src: SampleGifImage,
        alt: "サンプル",
      },
    },
  ],
}
