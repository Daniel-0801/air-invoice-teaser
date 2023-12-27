import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Header } from "components/organisms/Header"

export default {
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const Normal = Template.bind({})
Normal.args = {
  currentPath: "/",
  loginOnClick: () => console.log("clicked login"),
  questionOnClick: () => console.log("clicked question"),
}

export const Highlighted = Template.bind({})
Highlighted.args = {
  currentPath: "/function/",
  loginOnClick: () => console.log("clicked login"),
  questionOnClick: () => console.log("clicked question"),
}
