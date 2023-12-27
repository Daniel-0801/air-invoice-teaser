import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { FeatureList } from "components/organisms/FeatureList"

export default {
  component: FeatureList,
} as ComponentMeta<typeof FeatureList>

const Template: ComponentStory<typeof FeatureList> = args => <FeatureList {...args} />

export const Normal = Template.bind({})
