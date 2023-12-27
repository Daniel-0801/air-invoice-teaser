import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Notes } from "components/molecules/Notes"

export default {
  component: Notes,
} as ComponentMeta<typeof Notes>

const Template: ComponentStory<typeof Notes> = args => <Notes {...args} />

export const Normal = Template.bind({})
Normal.args = {
  notes: [
    "※1：銀行133行（※2）の振込手数料を、以下の条件で比較調査（※3）した結果（2021年11月22日時点）\n比較条件：通常時の他行宛の振込手数料で比較。条件付きの振込手数料は考慮せず。",
    "※2：金融庁、免許・許可・登録等を受けている業者一覧のうち、預金取扱等金融機関で銀行として登録されているもの ※外国銀行支店を除く133行",
    "※3：調査主体：株式会社リクルート／調査会社：インテージ／調査方法：法人のお客様の振込が可能な銀行のうち、通常時の他行宛の振込手数料で比較",
  ],
}
