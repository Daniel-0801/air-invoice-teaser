import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { SmallCard } from "components/organisms/Footer/SmallCard"

import MarketLogo from "images/footer/market-logo.png"

export default {
  title: "organisms/Footer/SmallCard",
  component: SmallCard,
} as ComponentMeta<typeof SmallCard>

const Template: ComponentStory<typeof SmallCard> = args => <SmallCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  link: "https://market.airregi.jp/",
  headline: "お店に役立つサービス提案サイト",
  logo: MarketLogo,
  logoAlt: "Airマーケットロゴ",
}
