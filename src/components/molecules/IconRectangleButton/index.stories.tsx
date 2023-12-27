import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { DownloadIcon } from "components/atoms/Icon"
import { IconRectangleButton } from "components/molecules/IconRectangleButton"

export default {
  component: IconRectangleButton,
} as ComponentMeta<typeof IconRectangleButton>

const Template: ComponentStory<typeof IconRectangleButton> = args => <IconRectangleButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  onClick: () => console.log("sample"),
  icon: <DownloadIcon size={54} />,
  children: "サンプルサンプル",
  underText: "サンプル",
}

export const LongCaption = Template.bind({})
LongCaption.args = {
  onClick: () => console.log("sample"),
  icon: <DownloadIcon size={54} />,
  children: "サンプルサンプルサンプルサンプル",
  underText: "サンプル",
}

export const NoUnderText = Template.bind({})
NoUnderText.args = {
  onClick: () => console.log("sample"),
  icon: <DownloadIcon size={54} />,
  children: "サンプルサンプルサンプルサンプル",
}
