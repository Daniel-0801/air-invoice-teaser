import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { InvoiceLogo } from "components/atoms/InvoiceLogo"

export default {
  component: InvoiceLogo,
} as ComponentMeta<typeof InvoiceLogo>

const Template: ComponentStory<typeof InvoiceLogo> = args => <InvoiceLogo {...args} />

export const Normal = Template.bind({})
Normal.args = {
  path: "/",
  width: 128,
  height: 20,
}
