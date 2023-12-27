import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ExternalLinkButton } from "components/atoms/ExternalLinkButton"

export default {
  component: ExternalLinkButton,
} as ComponentMeta<typeof ExternalLinkButton>

const Template: ComponentStory<typeof ExternalLinkButton> = args => <ExternalLinkButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "ダウンロードボタン",
  link: "/",
}
