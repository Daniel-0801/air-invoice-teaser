import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { GuidanceByTarget } from "components/molecules/GuidanceByTarget"

export default {
  component: GuidanceByTarget,
} as ComponentMeta<typeof GuidanceByTarget>

const Template: ComponentStory<typeof GuidanceByTarget> = args => <GuidanceByTarget {...args} />

export const Normal = Template.bind({})
Normal.args = {
  targetUser: "対象ユーザー",
  title: "Airインボイス導入資料",
  description: "導入の参考資料を無料でダウンロードいただけます。お気軽にご覧ください。",
  buttonText: "資料ダウンロード",
  link: "/",
}
