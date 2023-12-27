import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { InfoServices } from "components/organisms/Footer/InfoServices"

import MarketLogo from "images/footer/market-logo.png"
import MagazineLogo from "images/footer/regi-magazine-logo.png"

export default {
  title: "organisms/Footer/InfoServices",
  component: InfoServices,
} as ComponentMeta<typeof InfoServices>

const Template: ComponentStory<typeof InfoServices> = args => <InfoServices {...args} />

export const Normal = Template.bind({})
Normal.args = {
  services: [
    {
      link: "https://market.airregi.jp/",
      headline: "お店に役立つサービス提案サイト",
      logo: MarketLogo,
      logoWidth: 164,
      logoHeight: 24,
      logoAlt: "Airマーケットロゴ",
    },
    {
      link: "https://airregi.jp/magazine/",
      headline: "自分らしいお店づくりを応援する情報サイト",
      logo: MagazineLogo,
      logoWidth: 171,
      logoHeight: 24,
      logoAlt: "Airレジ マガジンロゴ",
    },
  ],
}
