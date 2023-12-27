import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SubsidyLinkButton } from "components/atoms/SubsidyLinkButton"

export default {
  component: SubsidyLinkButton,
} as ComponentMeta<typeof SubsidyLinkButton>

const Template: ComponentStory<typeof SubsidyLinkButton> = args => <SubsidyLinkButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "導入について相談する",
  link: "/",
}

export const Primary = Template.bind({})
Primary.args = {
  children: "IT導入補助金 対応商品に申し込む",
  link: "/",
  kind: "primary",
}

export const IconSize = Template.bind({})
IconSize.args = {
  children: "アイコンサイズの変更",
  iconSize: 20,
  link: "/",
}
