import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { CircledImage } from "components/atoms/CircledImage"

import SampleImage from "images/top/features/trouble_1.svg"

export default {
  component: CircledImage,
} as ComponentMeta<typeof CircledImage>

const Template: ComponentStory<typeof CircledImage> = args => <CircledImage {...args} />

export const Normal = Template.bind({})
Normal.args = {
  image: {
    src: SampleImage,
    alt: "サンプル",
    size: 220,
    height: 306,
  },
}
