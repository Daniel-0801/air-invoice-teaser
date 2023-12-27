import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { KeyVisual } from "components/organisms/KeyVisual"

export default {
  component: KeyVisual,
} as ComponentMeta<typeof KeyVisual>

const Template: ComponentStory<typeof KeyVisual> = args => <KeyVisual {...args} />

export const Normal = Template.bind({})
Normal.args = {
  documentRequestButtonOnClick: () => console.log("click document request"),
  inquiryButtonOnClick: () => console.log("click inquiry"),
}
