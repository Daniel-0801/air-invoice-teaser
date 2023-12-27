import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ExternalLink } from "components/atoms/ExternalLink"

export default {
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>

const Template: ComponentStory<typeof ExternalLink> = args => <ExternalLink {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "外部リンク",
  link: "/",
}
