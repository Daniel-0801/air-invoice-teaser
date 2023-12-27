import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { LargeCard } from "components/organisms/Footer/LargeCard"

import OrderLogo from "images/footer/order-logo.png"
import OrderImage from "images/footer/order.png"
import PayLogo from "images/footer/pay-logo.png"
import PointLogo from "images/footer/pay-point-logo.png"
import PointImage from "images/footer/pay-point.png"
import QRLogo from "images/footer/pay-qr-logo.png"
import QRImage from "images/footer/pay-qr.png"
import PayImage from "images/footer/pay.png"
import RegiLogo from "images/footer/regi-logo.png"
import RegiImage from "images/footer/regi.png"

export default {
  title: "organisms/Footer/LargeCard",
  component: LargeCard,
} as ComponentMeta<typeof LargeCard>

const Template: ComponentStory<typeof LargeCard> = args => <LargeCard {...args} />

export const OptionServiceLarge = Template.bind({})
OptionServiceLarge.args = {
  link: "/",
  image: RegiImage,
  alt: "Airレジ",
  headlinePC: "0円で\nカンタンに使える\nPOSレジアプリ",
  headlineSP: "0円でカンタンに使える\nPOSレジアプリ",
  logo: RegiLogo,
  logoAlt: "Airレジロゴ",
  optionServices: [
    {
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
    },
  ],
}

export const OptionServiceSmall = Template.bind({})
OptionServiceSmall.args = {
  link: "https://airregi.jp/payment/",
  image: PayImage,
  alt: "Airペイ",
  headlinePC: "カード・電マネ・\nQR・ポイントも使える\nお店の決済サービス",
  headlineSP: "カード・電マネ・\nQR・ポイントも使える\nお店の決済サービス",
  logo: PayLogo,
  logoAlt: "Airペイロゴ",
  optionServices: [
    {
      size: "small",
      description: null,
      parent: "Airペイ",
      link: "https://airregi.jp/mp/",
      image: QRImage,
      imageWidth: 104,
      imageHeight: 68,
      alt: "Airレジ QR",
      imageWidthSP: 60,
      logo: QRLogo,
      logoWidth: 142,
      logoHeight: 24,
      logoAlt: "Airレジ QRロゴ",
    },
    {
      size: "small",
      description: null,
      parent: "Airペイ",
      link: "https://airregi.jp/poichi/",
      image: PointImage,
      imageWidth: 152,
      imageHeight: 60,
      alt: "Airレジ ポイント",
      imageWidthSP: 84,
      logo: PointLogo,
      logoWidth: 168,
      logoHeight: 24,
      logoAlt: "Airレジ ポイントロゴ",
    },
  ],
}
