import * as React from "react"
import styled from "styled-components"

import { BREAK_POINT } from "components/sizes"

import { InfoServices, InfoServicesProps } from "components/organisms/Footer/InfoServices"
import { LargeCard, LargeCardProps } from "components/organisms/Footer/LargeCard"
import { MediumCard, MediumCardProps } from "components/organisms/Footer/MediumCard"
import { RelatedService, RelatedServiceProps } from "components/organisms/Footer/RelatedService"

import { createURLWithParameters, Parameter } from "functions/url"

import CardLogo from "images/footer/card-logo.png"
import CardImage from "images/footer/card.png"
import CashLogo from "images/footer/cash-logo.png"
import CashImage from "images/footer/cash.png"
import DenkiLogo from "images/footer/dnk-logo.png"
import DenkiImage from "images/footer/dnk.png"
import MarketLogo from "images/footer/market-logo.png"
import MateLogo from "images/footer/mate-logo.png"
import MateImage from "images/footer/mate.png"
import OrderLogo from "images/footer/order-logo.png"
import OrderImage from "images/footer/order.png"
import PayLogo from "images/footer/pay-logo.png"
import PointLogo from "images/footer/pay-point-logo.png"
import PointImage from "images/footer/pay-point.png"
import QRLogo from "images/footer/pay-qr-logo.png"
import QRImage from "images/footer/pay-qr.png"
import PayImage from "images/footer/pay.png"
import PayrollLogo from "images/footer/payroll-logo.png"
import PayrollImage from "images/footer/payroll.png"
import RegiLogo from "images/footer/regi-logo.png"
import MagazineLogo from "images/footer/regi-magazine-logo.png"
import RegiImage from "images/footer/regi.png"
import ReserveLogo from "images/footer/reserve-logo.png"
import ReserveImage from "images/footer/reserve.png"
import RestaurantLogo from "images/footer/restaurant-board.png"
import ShiftLogo from "images/footer/shift-logo.png"
import ShiftImage from "images/footer/shift.png"
import WaitLogo from "images/footer/wait-logo.png"
import WaitImage from "images/footer/wait.png"
import WorkLogo from "images/footer/work-logo.png"
import WorkImage from "images/footer/work.png"

const Container = styled.div`
  max-width: 1040px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (not (translate: none)) {
      > div {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`

const LargeCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (not (translate: none)) {
      > div {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }

        @media (max-width: ${BREAK_POINT.w768}px) {
          margin-right: 0;
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`

const MediumCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  &::after {
    content: "";
    flex: auto;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    &::after {
      content: none;
    }
  }

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution:.001dpcm) {
    @supports (not (translate: none)) {
      > a {
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-child(3n) {
          margin-right: 0;
        }

        &:nth-child(7, 8) {
          margin-bottom: 0;
        }

        @media (max-width: ${BREAK_POINT.w768}px) {
          margin-right: 0;
        }
      }
    }
  }
}
`

const SmallCards = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
    align-items: center;
  }

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (not (translate: none)) {
      > div {
        margin-right: 10px;

        &:nth-child(2) {
          margin-right: 0;
        }

        @media (max-width: ${BREAK_POINT.w768}px) {
          margin-right: 0;
          margin-bottom: 10px;

          &:nth-child(2) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`

export const Services: React.VFC = () => {
  const parameters: Parameter[] = [
    {
      key: "lid",
      value: "lpinvhead",
    },
  ]

  const largeElements: LargeCardProps[] = [
    {
      link: createURLWithParameters("https://airregi.jp/", parameters),
      image: RegiImage,
      imageWidth: 168,
      imageHeight: 99,
      alt: "Airレジ",
      headlinePC: "0円で\nカンタンに使える\nPOSレジアプリ",
      headlineSP: "0円でカンタンに使える\nPOSレジアプリ",
      logo: RegiLogo,
      logoWidth: 122,
      logoHeight: 26,
      logoAlt: "Airレジロゴ",
      optionServices: [
        {
          size: "large",
          description: "飲食店の業務をカンタンにする\nオーダーシステム",
          parent: "Airレジ",
          link: createURLWithParameters("https://airregi.jp/order/", parameters),
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
    },
    {
      link: createURLWithParameters("https://airregi.jp/payment/", parameters),
      image: PayImage,
      imageWidth: 168,
      imageHeight: 121,
      alt: "Airペイ",
      headlinePC: "カード・電マネ・\nQR・ポイントも使える\nお店の決済サービス",
      headlineSP: "カード・電マネ・\nQR・ポイントも使える\nお店の決済サービス",
      logo: PayLogo,
      logoWidth: 115,
      logoHeight: 26,
      logoAlt: "Airペイロゴ",
      optionServices: [
        {
          size: "small",
          description: null,
          parent: "Airペイ",
          link: createURLWithParameters("https://airregi.jp/mp/", parameters),
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
          link: createURLWithParameters("https://airregi.jp/poichi/", parameters),
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
    },
  ]

  const midiumElements: MediumCardProps[] = [
    {
      link: createURLWithParameters("https://airregi.jp/wait/", parameters),
      image: WaitImage,
      imageWidth: 90,
      imageHeight: 56,
      alt: "Airウェイト",
      headlinePC: "待ちの不満を\n解決する\n受付管理アプリ",
      headlineSP: "待ちの不満を解決する\n受付管理アプリ",
      logo: WaitLogo,
      logoWidth: 122,
      logoHeight: 24,
      logoAlt: "Airウェイトロゴ",
    },
    {
      link: createURLWithParameters("https://airregi.jp/reserve/", parameters),
      image: ReserveImage,
      imageWidth: 90,
      imageHeight: 48,
      alt: "Airリザーブ",
      headlinePC: "毎日の業務が\nカンタンになる\n予約システム",
      headlineSP: "毎日の業務がカンタンになる\n予約システム",
      logo: ReserveLogo,
      logoWidth: 165,
      logoHeight: 24,
      logoAlt: "Airリザーブロゴ",
    },
    {
      link: createURLWithParameters("https://airregi.jp/shift/", parameters),
      image: ShiftImage,
      imageWidth: 90,
      imageHeight: 46,
      alt: "Airシフト",
      headlinePC: "やりとりも作成も\nラクになる\nシフト管理サービス",
      headlineSP: "やりとりも作成もラクになる\nシフト管理サービス",
      logo: ShiftLogo,
      logoWidth: 130,
      logoHeight: 24,
      logoAlt: "Airシフトロゴ",
    },
    {
      link: createURLWithParameters("https://airregi.jp/mate/", parameters),
      image: MateImage,
      imageWidth: 90,
      imageHeight: 56,
      alt: "Airメイト",
      headlinePC: "お店の\n経営アシスタント",
      headlineSP: "お店の経営アシスタント",
      logo: MateLogo,
      logoWidth: 129,
      logoHeight: 24,
      logoAlt: "Airメイトロゴ",
    },
    {
      link: createURLWithParameters("https://airregi.jp/aircard/", parameters),
      image: CardImage,
      imageWidth: 90,
      imageHeight: 57,
      alt: "Airカード",
      headlinePC: "経費管理がラクになり\nポイントもたまる\nおトクなビジネスカード",
      headlineSP: "経費管理がラクになり\nポイントもたまる\nおトクなビジネスカード",
      logo: CardLogo,
      logoWidth: 127,
      logoHeight: 24,
      logoAlt: "Airカードロゴ",
    },
    {
      link: createURLWithParameters("https://airregi.jp/work/recruitment/", parameters),
      image: WorkImage,
      imageWidth: 90,
      imageHeight: 48,
      alt: "Airワーク 採用管理",
      headlinePC: "0円でカンタンに\n求人募集ができる\n採用管理サービス",
      headlineSP: "0円でカンタンに\n求人募集ができる\n採用管理サービス",
      logo: WorkLogo,
      logoWidth: 206,
      logoHeight: 24,
      logoAlt: "Airワーク 採用管理ロゴ",
    },
    {
      link: createURLWithParameters("https://airregi.jp/work/payroll/", parameters),
      image: PayrollImage,
      imageWidth: 90,
      imageHeight: 48,
      alt: "Airワーク 給与支払",
      headlinePC: "毎月の振込みが\nラクになる\n給与支払サービス",
      headlineSP: "毎月の振込みが\nラクになる\n給与支払サービス",
      logo: PayrollLogo,
      logoWidth: 206,
      logoHeight: 24,
      logoAlt: "Airワーク 給与支払ロゴ",
    },
    {
      link: createURLWithParameters("https://airregi.jp/cash/", parameters),
      image: CashImage,
      imageWidth: 36,
      imageHeight: 72,
      alt: "Airキャッシュ",
      headlinePC: "将来の売上を\n今のお金にかえる\n資金調達サービス",
      headlineSP: "将来の売上を\n今のお金にかえる\n資金調達サービス",
      logo: CashLogo,
      logoWidth: 121,
      logoHeight: 23,
      logoAlt: "Airキャッシュロゴ",
    },
    {
      link: createURLWithParameters("https://airregi.jp/dnk/", parameters),
      image: DenkiImage,
      imageWidth: 90,
      imageHeight: 52,
      alt: "おみせのでんき produced by Airレジ",
      headlinePC: "カンタンに\nはじめられる\nおトクな電力サービス",
      headlineSP: "カンタンにはじめられる\nおトクな電力サービス",
      logo: DenkiLogo,
      logoAlt: "おみせのでんき produced by Airレジロゴ",
      logoWidth: 189,
      logoHeight: 18,
    },
  ]

  const relatedService: RelatedServiceProps = {
    service: {
      link: createURLWithParameters("https://airregi.jp/restaurant-board/", parameters),
      headline: "集客と接客に効く予約台帳アプリ",
      logo: RestaurantLogo,
      logoWidth: 91,
      logoHeight: 24,
      logoAlt: "レストランボードロゴ",
    },
  }

  const infoServices: InfoServicesProps = {
    services: [
      {
        link: createURLWithParameters("https://market.airregi.jp/", parameters),
        headline: "お店に役立つサービス提案サイト",
        logo: MarketLogo,
        logoWidth: 164,
        logoHeight: 24,
        logoAlt: "Airマーケットロゴ",
      },
      {
        link: createURLWithParameters("https://airregi.jp/magazine/", parameters),
        headline: "自分らしいお店づくりを応援する情報サイト",
        logo: MagazineLogo,
        logoWidth: 171,
        logoHeight: 24,
        logoAlt: "Airレジ マガジンロゴ",
      },
    ],
  }

  return (
    <Container>
      <LargeCards>
        {largeElements.map((largeElement, index) => (
          <LargeCard key={index} {...largeElement} />
        ))}
      </LargeCards>
      <MediumCards>
        {midiumElements.map((mediumElement, index) => (
          <MediumCard key={index} {...mediumElement} />
        ))}
      </MediumCards>
      <SmallCards>
        <RelatedService {...relatedService} />
        <InfoServices {...infoServices} />
      </SmallCards>
    </Container>
  )
}
