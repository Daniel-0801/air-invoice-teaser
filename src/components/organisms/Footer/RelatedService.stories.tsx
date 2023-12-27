import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { RelatedService } from "components/organisms/Footer/RelatedService"

import RestaurantLogo from "images/footer/restaurant-board.png"

export default {
  title: "organisms/Footer/RelatedService",
  component: RelatedService,
} as ComponentMeta<typeof RelatedService>

const Template: ComponentStory<typeof RelatedService> = args => <RelatedService {...args} />

export const Normal = Template.bind({})
Normal.args = {
  service: {
    link: "https://airregi.jp/restaurant-board/",
    headline: "集客と接客に効く予約台帳アプリ",
    logo: RestaurantLogo,
    logoWidth: 91,
    logoHeight: 24,
    logoAlt: "レストランボードロゴ",
  },
}
