import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { OptionService } from "components/organisms/Footer/OptionService"

import OrderLogo from "images/footer/order-logo.png"
import OrderImage from "images/footer/order.png"

export default {
  title: "organisms/Footer/OptionService",
  component: OptionService,
} as ComponentMeta<typeof OptionService>

const Template: ComponentStory<typeof OptionService> = args => <OptionService {...args} />

export const Normal = Template.bind({})
Normal.args = {
  size: "large",
  description: "飲食店の業務をカンタンにする\nオーダーシステム",
  parent: "Airレジ",
  link: "https://airregi.jp/order/",
  image: OrderImage,
  imageWidth: 104,
  imageHeight: 87,
  alt: "Airレジ オーダー",
  imageWidthSP: 60,
  logo: OrderLogo,
  logoWidth: 180,
  logoHeight: 24,
  logoAlt: "Airレジ オーダーロゴ",
}
