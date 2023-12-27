import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { MediumCard } from "components/organisms/Footer/MediumCard"

import WaitLogo from "images/footer/wait-logo.png"
import WaitImage from "images/footer/wait.png"

export default {
  title: "organisms/Footer/MediumCard",
  component: MediumCard,
} as ComponentMeta<typeof MediumCard>

const Template: ComponentStory<typeof MediumCard> = args => <MediumCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  link: "https://airregi.jp/wait/",
  image: WaitImage,
  alt: "Airウェイト",
  headlinePC: "待ちの不満を\n解決する\n受付管理アプリ",
  headlineSP: "待ちの不満を解決する\n受付管理アプリ",
  logo: WaitLogo,
  logoAlt: "Airウェイトロゴ",
}
