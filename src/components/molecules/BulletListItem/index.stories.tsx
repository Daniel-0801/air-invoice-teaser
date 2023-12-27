import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { BulletListItem } from "components/molecules/BulletListItem"

export default {
  component: BulletListItem,
} as ComponentMeta<typeof BulletListItem>

const Template: ComponentStory<typeof BulletListItem> = args => <BulletListItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
  labelText: "サンプルテキスト",
}
