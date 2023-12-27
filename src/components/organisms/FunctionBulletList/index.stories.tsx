import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { FunctionBulletList } from "components/organisms/FunctionBulletList"

export default {
  component: FunctionBulletList,
} as ComponentMeta<typeof FunctionBulletList>

const Template: ComponentStory<typeof FunctionBulletList> = args => <FunctionBulletList {...args} />

export const Normal = Template.bind({})
