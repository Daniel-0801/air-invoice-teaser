import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { COLOR } from "components/color"

import { CameraIcon } from "components/atoms/Icon"
import { LabelWithIcon } from "components/molecules/LabelWithIcon"

export default {
  component: LabelWithIcon,
} as ComponentMeta<typeof LabelWithIcon>

const Template: ComponentStory<typeof LabelWithIcon> = args => <LabelWithIcon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  labelText: "テストテストテスト",
  icon: <CameraIcon size={24} fill={COLOR.main} />,
}
