import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ContentHeader } from "components/organisms/ContentHeader"

export default {
  component: ContentHeader,
} as ComponentMeta<typeof ContentHeader>

const Templete: ComponentStory<typeof ContentHeader> = args => <ContentHeader {...args} />

export const Normal = Templete.bind({})
Normal.args = {
  breadcrumbs: [
    {
      pageName: "サンプル",
      pageLink: "/",
    },
    {
      pageName: "サンプル",
    },
  ],
  contentName: "ページ名",
  description: "テストテストテストテストテストテストテストテスト",
}

export const WithNotes = Templete.bind({})
WithNotes.args = {
  breadcrumbs: [
    {
      pageName: "サンプル",
      pageLink: "/",
    },
    {
      pageName: "サンプル",
    },
  ],
  contentName: "ページ名",
  description: "テストテストテストテストテストテストテストテスト",
  notes: ["※1: test\n改行", "※2: テスト"],
}
