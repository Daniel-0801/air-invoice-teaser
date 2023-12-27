import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"
import { HEADER_FOOTER_MAX_WIDTH_PX } from "components/sizes"

import { createURLWithParameters, Parameter } from "functions/url"

import FacebookLogo from "images/footer/facebook-logo.png"
import RecruitLogo from "images/footer/recruit-logo.png"
import TwitterLogo from "images/footer/twitter-logo.png"

const Container = styled.div`
  background: ${COLOR.grayRollingStone};
`

const Content = styled.div`
  max-width: ${HEADER_FOOTER_MAX_WIDTH_PX}px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 20px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 32px 24px 24px;
  }
`

const RelatedServices = styled.div`
  max-width: 1440px;
  margin-bottom: 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-bottom: 24px;
  }
`

const OtherLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-bottom: 16px;
  }
`

const Title = styled.p`
  color: ${COLOR.white};
  font-size: 14px;
  font-weight: bold;
  margin: 16px 0;
`

const Services = styled.div``

const Documents = styled.div``

const LinkWrapper = styled.div`
  display: inline-block;
  color: ${COLOR.white};
  font-size: 12px;

  &:not(:last-child)::after {
    content: "|";
    margin: 0 10px;
  }
`

const SNSs = styled.div`
  height: fit-content;
  display: flex;
  margin-left: 8px;
`

const Link = styled.a`
  display: inline-block;
  min-width: 48px;
  color: ${COLOR.grayGallery};
  font-size: 12px;
  line-height: 24px;
  text-decoration: none;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 12px 0;
  }

  &:hover {
    text-decoration: underline;
  }
`

const LogoWrapper = styled.a`
  &:not(:first-child) {
    margin-left: 16px;
  }

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 12px 0;
  }
`

const Logo = styled.img`
  max-width: 22px;
  height: auto;
`

const RecruitLogoWrapper = styled.a`
  display: flex;
  align-items: flex-end;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

const RecruitLogoImg = styled.img`
  max-width: 112px;
  height: auto;
  margin-right: 8px;
`

const RecruitLogoCopyright = styled.div`
  color: ${COLOR.grayGallery};
  font-size: 10px;
`

type FooterLinksProps = {
  readonly className?: string
}

export const FooterLinks: React.VFC = ({ className }: FooterLinksProps) => {
  const parameters: Parameter[] = [
    {
      key: "lid",
      value: "lpinvfoot",
    },
  ]
  const relatedServicesWithoutParameters: {
    name: string
    baselink: string
  }[] = [
    {
      name: "Airレジ",
      baselink: "https://airregi.jp/",
    },
    {
      name: "Airレジ オーダー",
      baselink: "https://airregi.jp/order/",
    },
    {
      name: "Airペイ",
      baselink: "https://airregi.jp/payment/",
    },
    {
      name: "Airペイ QR",
      baselink: "https://airregi.jp/mp/",
    },
    {
      name: "Airペイ ポイント",
      baselink: "https://airregi.jp/poichi/",
    },
    {
      name: "Airウェイト",
      baselink: "https://airregi.jp/wait/",
    },
    {
      name: "Airリザーブ",
      baselink: "https://airregi.jp/reserve/",
    },
    {
      name: "Airシフト",
      baselink: "https://airregi.jp/shift/",
    },
    {
      name: "Airメイト",
      baselink: "https://airregi.jp/mate/",
    },
    {
      name: "Airカード",
      baselink: "https://airregi.jp/aircard/",
    },
    {
      name: "Airワーク 採用管理",
      baselink: "https://airregi.jp/work/recruitment/",
    },
    {
      name: "Airワーク 給与支払",
      baselink: "https://airregi.jp/work/payroll/",
    },
    {
      name: "Airキャッシュ",
      baselink: "https://airregi.jp/cash/",
    },
    {
      name: "おみせのでんき produced by Airレジ",
      baselink: "https://airregi.jp/dnk/",
    },
    {
      name: "Airマーケット",
      baselink: "https://market.airregi.jp/",
    },
    {
      name: "Airレジ マガジン",
      baselink: "https://airregi.jp/magazine/",
    },
    {
      name: "レストランボード",
      baselink: "https://airregi.jp/restaurant-board/",
    },
  ]

  const relatedServices: {
    name: string
    link: string
  }[] = relatedServicesWithoutParameters.map(service => ({
    name: service.name,
    link: createURLWithParameters(service.baselink, parameters),
  }))

  const documents: {
    name: string
    link: string
  }[] = [
    {
      name: "Airサービス共通利用約款",
      link: "https://connect.airregi.jp/doc/common_terms.html",
    },
    {
      name: "プライバシーポリシー",
      link: "https://connect.airregi.jp/doc/privacy.html",
    },
  ]

  const snss: {
    logo: string
    alt: string
    link: string
  }[] = [
    {
      logo: FacebookLogo,
      alt: "Facebook",
      link: "https://www.facebook.com/AirREGI",
    },
    {
      logo: TwitterLogo,
      alt: "Twitter",
      link: "https://twitter.com/AirREGI",
    },
  ]

  return (
    <Container className={className}>
      <Content>
        <RelatedServices>
          <Title>Airインボイスの関連サービス</Title>
          <Services>
            {relatedServices.map((relatedService, index) => (
              <LinkWrapper key={index}>
                <Link href={relatedService.link}>{relatedService.name}</Link>
              </LinkWrapper>
            ))}
          </Services>
        </RelatedServices>
        <OtherLinks>
          <Documents>
            {documents.map((documents, index) => (
              <LinkWrapper key={index}>
                <Link href={documents.link}>{documents.name}</Link>
              </LinkWrapper>
            ))}
          </Documents>
          <SNSs>
            {snss.map((sns, index) => (
              <LogoWrapper key={index} href={sns.link}>
                <Logo src={sns.logo} width={22} height={21} alt={sns.alt} />
              </LogoWrapper>
            ))}
          </SNSs>
        </OtherLinks>
        <RecruitLogoWrapper href="https://www.recruit.co.jp/">
          <RecruitLogoImg src={RecruitLogo} width={112} height={30} alt="リクルートロゴ" />
          <RecruitLogoCopyright>(C) Recruit Co., Ltd.</RecruitLogoCopyright>
        </RecruitLogoWrapper>
      </Content>
    </Container>
  )
}
