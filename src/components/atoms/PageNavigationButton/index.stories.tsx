import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { PageNavigationButton } from "components/atoms/PageNavigationButton"

export default {
  component: PageNavigationButton,
} as ComponentMeta<typeof PageNavigationButton>

const Template: ComponentStory<typeof PageNavigationButton> = args => <PageNavigationButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "ボタン",
  link: "/",
}

export const Small = Template.bind({})
Small.args = {
  children: "ボタン",
  link: "/",
  size: "small",
}
