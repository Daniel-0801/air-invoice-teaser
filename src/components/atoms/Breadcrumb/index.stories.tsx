import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Breadcrumb } from "components/atoms/Breadcrumb"

export default {
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = args => <Breadcrumb {...args} />

export const Normal = Template.bind({})
Normal.args = {
  pageName: "サンプル",
  pageLink: "/",
  queryParameters: [
    {
      key: "ref",
      value: "pageName_contentheader",
    },
  ],
}
