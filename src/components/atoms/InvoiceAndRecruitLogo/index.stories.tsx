import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { InvoiceAndRecruitLogo } from "components/atoms/InvoiceAndRecruitLogo"

export default {
  component: InvoiceAndRecruitLogo,
} as ComponentMeta<typeof InvoiceAndRecruitLogo>

const Template: ComponentStory<typeof InvoiceAndRecruitLogo> = args => <InvoiceAndRecruitLogo {...args} />

export const Normal = Template.bind({})
Normal.args = {
  path: "/",
  width: 235,
  height: 50,
}
