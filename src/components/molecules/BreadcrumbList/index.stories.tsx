import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { BreadcrumbList } from "components/molecules/BreadcrumbList"

export default {
  component: BreadcrumbList,
} as ComponentMeta<typeof BreadcrumbList>

const Template: ComponentStory<typeof BreadcrumbList> = args => <BreadcrumbList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  breadcrumbs: [
    {
      pageName: "サンプル",
      pageLink: "/",
      queryParameters: [
        {
          key: "ref",
          value: "pageName_contentheader",
        },
      ],
    },
    {
      pageName: "サンプル",
    },
  ],
}

export const Long = Template.bind({})
Long.args = {
  breadcrumbs: [
    {
      pageName: "サンプル",
      pageLink: "/",
      queryParameters: [
        {
          key: "ref",
          value: "pageName_contentheader",
        },
      ],
    },
    {
      pageName: "サンプル",
      pageLink: "/first/",
      queryParameters: [
        {
          key: "ref",
          value: "pageName_contentheader",
        },
      ],
    },
    {
      pageName: "サンプル",
      pageLink: "/first/second/",
      queryParameters: [
        {
          key: "ref",
          value: "pageName_contentheader",
        },
      ],
    },
    {
      pageName: "サンプル",
    },
  ],
}
