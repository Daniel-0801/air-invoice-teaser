import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { LinkWithNewTabIcon } from "components/molecules/LinkWithNewTabIcon"

export default {
  component: LinkWithNewTabIcon,
} as ComponentMeta<typeof LinkWithNewTabIcon>

const Template: ComponentStory<typeof LinkWithNewTabIcon> = args => <LinkWithNewTabIcon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: "内部リンク",
  link: "/",
}
