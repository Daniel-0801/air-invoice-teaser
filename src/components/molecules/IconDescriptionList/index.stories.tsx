import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { COLOR } from "components/color"

import { BookIcon, ScreeningIcon, CallIcon, InvoiceIcon } from "components/atoms/Icon"
import { IconDescriptionList } from "components/molecules/IconDescriptionList"

export default {
  component: IconDescriptionList,
} as ComponentMeta<typeof IconDescriptionList>

const Template: ComponentStory<typeof IconDescriptionList> = args => <IconDescriptionList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  descriptions: [
    {
      children: <InvoiceIcon size={36} fill={COLOR.black60} />,
      text: "サンプル",
      subText: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
    },
    {
      children: <InvoiceIcon size={36} fill={COLOR.black60} />,
      text: "サンプル",
      subText: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
    },
    {
      children: <InvoiceIcon size={36} fill={COLOR.black60} />,
      text: "サンプル",
      subText: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
    },
  ],
}
export const Example = Template.bind({})
Example.args = {
  descriptions: [
    {
      children: <BookIcon size={36} fill={COLOR.black60} />,
      text: "マニュアルや記入例を各種ご用意",
      subText: "マニュアルをご用意してますので、難解な交付申請や報告書も迷わず作成できます。",
    },
    {
      children: <ScreeningIcon size={36} fill={COLOR.black60} />,
      text: "交付申請・報告書作成をサポート",
      subText: "申請書の書き方や言葉の意味、計算方法まで手続きに必要な書類の準備も安心です。",
    },
    {
      children: <CallIcon size={36} fill={COLOR.black60} />,
      text: "お困りごとをいつでも相談",
      subText:
        "平日10:00 - 17:00（土日祝日 / 年末年始を除く）の間、TRIPORT株式会社のコールセンターが対応し伴走いたします。お気軽にご相談ください。",
    },
  ],
}
