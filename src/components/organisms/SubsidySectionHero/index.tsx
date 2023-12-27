import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SubsidyLinkButton } from "components/atoms/SubsidyLinkButton"
import { Notes } from "components/molecules/Notes"

import { createURLWithParameters } from "functions/url"

import Subsidy75 from "images/common/subsidy-hero-75.svg"
import SubsidyHeroCost from "images/common/subsidy-hero-cost.svg"
import SubsidyHeroCostSP from "images/common/subsidy-hero-cost_sp.svg"
import SubsidyHeroDevice from "images/common/subsidy-hero-device.png"
import SubsidyHeroNewsPcImage from "images/common/subsidy-hero-news_pc.svg"
import SubsidyHeroNewsSpImage from "images/common/subsidy-hero-news_sp.svg"

const Container = styled.div`
  padding: 68px 20px;
  background-color: ${COLOR.grayAlabaster};

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 34px 20px 56px;
  }
`

const GridContentWrapper = styled.div`
  display: grid;
  width: fit-content;
  margin: 0 auto;
  grid-template-areas:
    "titleArea deviceArea"
    "costArea deviceArea"
    "buttonArea deviceArea"
    "noteArea deviceArea";

  @media (max-width: ${BREAK_POINT.w768}px) {
    grid-template-areas:
      "subsidyArea"
      "titleArea"
      "costArea"
      "deviceArea"
      "buttonArea"
      "noteArea";
  }
`

const SubsidyWrapper = styled.div`
  display: none;

  @media (max-width: ${BREAK_POINT.w768}px) {
    grid-area: subsidyArea;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const SubsidyLabelWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`
const SubsidyLabel = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${COLOR.main};
`

const SubsidyLargeLabel = styled.span`
  font-weight: bold;
  font-size: 26px;
  line-height: 28px;
  color: ${COLOR.main};
  margin: 0 6px;
`

const Line = styled.hr`
  width: 100%;
  size: 1px;
  color: ${COLOR.main};
  margin-top: 6px;
`
const TitleWrapper = styled.div`
  grid-area: titleArea;
  display: flex;
  align-items: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    justify-items: center;
    margin-top: 8px;
  }
`

const Title = styled.h1`
  color: ${COLOR.main};
  font-weight: bold;
  font-size: 40px;
  line-height: 62px;
  margin-right: 10px;
  white-space: nowrap;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 40px;
    margin: 0 auto;
  }
`

const SubsidyImage = styled.img`
  width: 122px;
  height: 122px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: none;
  }
`

const CostImage = styled.img`
  grid-area: costArea;
  margin-top: 34px;
  width: 606px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: none;
  }
`

const CostImageSP = styled.img`
  display: none;

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
    grid-area: costArea;
    width: 296px;
    margin: 16px auto 0;
  }
`

const DeviceImage = styled.img`
  grid-area: deviceArea;
  width: 208px;
  margin-left: 98px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 90px;
    margin: 22px auto 0;
  }
`

const ButtonContainer = styled.div`
  grid-area: buttonArea;
  display: flex;
  flex-direction: row;
  margin: 40px 48px 0 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column-reverse;
    width: 334px;
    margin: 32px auto 0;
  }
`
const StyledSubsidyLinkButton = styled(SubsidyLinkButton)`
  & + & {
    margin-left: 20px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    &:first-child {
      margin-top: 24px;
    }
    & + & {
      margin-left: 0;
    }
  }
`

const AnchorLink = styled.a`
  color: ${COLOR.blueCerulean};
  text-decoration: underline;
`

const StyledNotes = styled(Notes)`
  grid-area: noteArea;
  width: 620px;
  margin-top: 40px;
  line-height: 16px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
    margin: 32px auto 0;
  }
`

const Img = styled.img`
  margin: 42px auto 0;
  display: block;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 24px auto 0;
  }
`

interface SubsidySectionHeroProps {
  readonly className?: string
}

export const SubsidySectionHero: React.VFC<SubsidySectionHeroProps> = props => {
  const { className } = props
  const breakpoint = useBreakpoint()

  return (
    <Container className={className}>
      <GridContentWrapper>
        <SubsidyWrapper>
          <SubsidyLabelWrapper>
            <SubsidyLabel>最大</SubsidyLabel>
            <SubsidyLargeLabel>75%</SubsidyLargeLabel>
            <SubsidyLabel>補助</SubsidyLabel>
          </SubsidyLabelWrapper>
          <Line />
        </SubsidyWrapper>
        <TitleWrapper>
          <Title>
            「IT導入補助金」のご活用で
            <br />
            実質費用負担を軽減します。
          </Title>
          <SubsidyImage src={Subsidy75} alt="最大75%補助" />
        </TitleWrapper>
        <CostImage src={SubsidyHeroCost} alt="料金説明画像" />
        <CostImageSP src={SubsidyHeroCostSP} alt="料金説明画像" />
        <ButtonContainer>
          <StyledSubsidyLinkButton link={createURLWithParameters("/invoice/it-hojo/contact/", [])}>
            導入について相談する
          </StyledSubsidyLinkButton>
          <StyledSubsidyLinkButton link={createURLWithParameters("/invoice/it-hojo/entry/", [])} kind="primary">
            IT導入補助金 対応商品に申し込む
          </StyledSubsidyLinkButton>
        </ButtonContainer>
        <DeviceImage src={SubsidyHeroDevice} alt="Airインボイスのアプリ画面" />
        <StyledNotes
          notes={[
            <>
              ※IT導入補助金 対応商品へのお申込みには
              <b>「Airインボイスの無料体験を利用したことがある（または利用中）」</b>
              場合にご案内が可能です。まだの方は<AnchorLink href="#subsidySectionAppDL">こちら</AnchorLink>
              からアプリをダウンロードください。
            </>,
            "※IT導入補助金の交付は、Airインボイスのクラウド月額利用料2年分のお支払いと、継続的に活用していることを証する書類等を提出・報告（事業実績報告）した後に、補助金交付手続きを経て交付されます。",
            "※IT導入補助金は、申請をしても適切な条件を満たさなかった場合に交付されない場合があります。",
          ]}
          marginBetweenNotes={"8px"}
        ></StyledNotes>
      </GridContentWrapper>
      <Img
        src={breakpoint.sp ? SubsidyHeroNewsSpImage : SubsidyHeroNewsPcImage}
        alt="IT導入補助金の登録ITツールに申請中"
      />
    </Container>
  )
}
