import { PageProps } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

// import { ITIntroductionSubsidyFixedBanner } from "components/atoms/ITIntroductionSubsidyFixedBanner"
import { RightArrowIcon } from "components/atoms/Icon"
import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { ContentHeader } from "components/organisms/ContentHeader"
import { CostFreeTrial } from "components/organisms/CostFreeTrial"
import { DetailedGuide } from "components/organisms/DetailedGuide"
import { EXJS } from "components/organisms/EXJS"
import { FaqCostStructured } from "components/organisms/FaqCostStructured"
import { FooterLinks } from "components/organisms/FooterLinks"
import { FunctionBulletList } from "components/organisms/FunctionBulletList"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { LowCost } from "components/organisms/LowCost"
import { SEO } from "components/organisms/SEO"
import { SimpleCostExplanation } from "components/organisms/SimpleCostExplanation"
import { SupplementaryNotesONLowest } from "components/organisms/SupplementaryNotesONLowest"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

import AirIdImg from "images/cost/air_id.svg"
import AppDownloadImg from "images/cost/app_download.svg"
import PaymentAgencyImg from "images/cost/payment_agency.svg"
import PhotoShootImg from "images/cost/photo_shoot.svg"
import TransferReservationImg from "images/cost/transfer_reservation.svg"

const SectionStyle = css`
  padding: 64px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const StyledFreeTrial = styled(CostFreeTrial)`
  ${SectionStyle}
`

const StyledFaqCostStructured = styled(FaqCostStructured)`
  ${SectionStyle}
`

const StyledSimpleCostExplanation = styled(SimpleCostExplanation)`
  background-color: ${COLOR.main05};
  padding: 64px 32px 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px 0;
  }
`

const StyledFunctionBulletList = styled(FunctionBulletList)`
  background-color: ${COLOR.main05};
  padding: 48px 32px 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 24px 16px 0;
  }
`

const StyledLowCost = styled(LowCost)`
  background-color: ${COLOR.main05};
  padding: 72px 32px 64px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const StyledDetailedGuide = styled(DetailedGuide)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const StyledSupplementaryNotesONLowest = styled(SupplementaryNotesONLowest)`
  padding: 24px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 24px 16px;
  }
`

const FlowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 15px 56px 20px;
  }
  background-color: ${COLOR.main05};
`

const MainFlow = styled.div`
  font-family: "Hiragino Kaku Gothic Pro";
  text-align: center;
  font-size: 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
  }
  line-height: 36px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 28px;
  }
  color: ${COLOR.main};
  margin-bottom: 24px;
`

const FlowSentence = styled.div`
  font-family: "Hiragino Kaku Gothic Pro";
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 48px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 335px;
  }
`

const IntroductionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
  gap: 36px 0px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: none;
  }
`

const IntroductionContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 132px;
`

const IntroductionSentence = styled.div`
  font-family: "Hiragino Kaku Gothic Pro";
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`

const Img = styled.img`
  margin-bottom: 16px;
`

const ArrowWrapper = styled.div`
  display: flex;
  height: 54px;
  align-items: center;
  margin: 0 24px;
`

const FlowLink = styled.a`
  color: ${COLOR.blueCerulean};
  text-decoration: underline;
  font-size: 16px;
  line-height: 26px;
`

const SpIntroductionWrapper = styled.div`
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 340px;
    padding: 25px 46px 15px 46px;
    background-color: ${COLOR.white};
    margin-bottom: 24px;
  }
`

const FlowTextWrapper = styled.div`
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
`

const EnclosedAlphanumerics = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    border-radius: 50%;
    background-color: ${COLOR.main05};
    color: ${COLOR.blueCerulean};
    font-family: "Avenir Next";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-right: 12px;
  }
`

const FlowText = styled.div`
  @media (min-width: ${BREAK_POINT.w769}px) {
    display: none;
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-family: "Hiragino Kaku Gothic Pro";
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
  }
`

const Main = styled.main``

const Contents = styled.div``

const Cost: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const pageName = "費用・料金"
  const description =
    "【リクルート：Airインボイス】費用・料金をご紹介します。請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = "請求書 費用"
  const freeTrialId = "free-trial"

  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.Cost, undefined, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグ
  useAdsPVReport()

  return (
    <>
      <GTM />
      <EXJS />
      <AdobeTargetTag />
      <SEO title={pageName} description={description} keywords={keywords} pathWithPrefix={pathWithPrefix} />
      <Main>
        <Header
          currentPath="/cost/"
          loginOnClick={() => {
            sendCustomLink(PageName.Cost, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.Cost, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.Top, clAction.LookInquiryHeader)
            sendAdsCVReport()
          }}
        />
        <Contents>
          <ContentHeader
            breadcrumbs={[
              { pageName: "Air ビジネスツールズ", pageLink: "https://airregi.jp/top/" },
              { pageName: "Airインボイス", pageLink: "/" },
              { pageName: pageName },
            ]}
            contentName={pageName}
            description="Airインボイスは、無料体験期間として利用開始月と翌月が0円。振込手数料は業界最安値（※1）でご利用できます。"
            notes={[
              "※1：調査機関による調査（2023年11月6日時点）/ 金融庁、免許・許可・登録等を受けている業者一覧のうち、\n預金取扱等金融機関で銀行として登録されており、外国銀行支店を除く134行の通常時の他行宛の振込手数料で比較。",
            ]}
          />
          <StyledFreeTrial className="free-trial" title="まずはお試しください" />
          <StyledSimpleCostExplanation className="simple-cost-explanation" />
          <StyledFunctionBulletList className="function-bullet-list" />
          <StyledLowCost className="low-cost" />
          {/* <StyledITIntroductionSubsidy
            className="it-introduction-subsidy"
            navigationButtonOnClick={() => sendCustomLink(PageName.Cost, clAction.ITSubsidyAbout)}
          /> */}
          <StyledFreeTrial
            id={freeTrialId}
            className="free-trial"
            title="Airインボイスを今すぐ無料体験"
            spTitle="Airインボイスを\n今すぐ無料体験"
          />
          <FlowWrapper>
            <MainFlow>導入の流れ</MainFlow>
            <FlowSentence>Airインボイスはアプリをダウンロードすればすぐご利用できます。</FlowSentence>
            <IntroductionWrapper>
              <IntroductionContents>
                <Img src={AirIdImg} width={54} height={54} />
                <IntroductionSentence>1. AirID登録</IntroductionSentence>
              </IntroductionContents>
              <ArrowWrapper>
                <RightArrowIcon size={18} fill={COLOR.main} />
              </ArrowWrapper>
              <IntroductionContents>
                <Img src={AppDownloadImg} width={54} height={54} />
                <IntroductionSentence>
                  <p>2. アプリ</p>
                  <p>ダウンロード</p>
                </IntroductionSentence>
              </IntroductionContents>
              <ArrowWrapper>
                <RightArrowIcon size={18} fill={COLOR.main} />
              </ArrowWrapper>
              <IntroductionContents>
                <Img src={PhotoShootImg} width={54} height={54} />
                <IntroductionSentence>
                  <p>3. 請求書撮影</p>
                  <p>（無料体験開始）</p>
                </IntroductionSentence>
              </IntroductionContents>
              <ArrowWrapper>
                <RightArrowIcon size={18} fill={COLOR.main} />
              </ArrowWrapper>
              <IntroductionContents>
                <Img src={PaymentAgencyImg} width={54} height={54} />
                <IntroductionSentence>
                  <p>4. 支払代行</p>
                  <p>サービスお申込み</p>
                </IntroductionSentence>
              </IntroductionContents>
              <ArrowWrapper>
                <RightArrowIcon size={18} fill={COLOR.main} />
              </ArrowWrapper>
              <IntroductionContents>
                <Img src={TransferReservationImg} width={54} height={54} />
                <IntroductionSentence>5. 振込予約</IntroductionSentence>
              </IntroductionContents>
            </IntroductionWrapper>
            <SpIntroductionWrapper>
              <FlowTextWrapper>
                <EnclosedAlphanumerics>1</EnclosedAlphanumerics>
                <FlowText>AirID登録</FlowText>
              </FlowTextWrapper>
              <FlowTextWrapper>
                <EnclosedAlphanumerics>2</EnclosedAlphanumerics>
                <FlowText>アプリダウンロード</FlowText>
              </FlowTextWrapper>
              <FlowTextWrapper>
                <EnclosedAlphanumerics>3</EnclosedAlphanumerics>
                <FlowText>請求書撮影（無料体験開始）</FlowText>
              </FlowTextWrapper>
              <FlowTextWrapper>
                <EnclosedAlphanumerics>4</EnclosedAlphanumerics>
                <FlowText>支払代行サービスお申込み</FlowText>
              </FlowTextWrapper>
              <FlowTextWrapper>
                <EnclosedAlphanumerics>5</EnclosedAlphanumerics>
                <FlowText>振込予約</FlowText>
              </FlowTextWrapper>
            </SpIntroductionWrapper>
            <FlowLink href="https://airregi.jp/invoice/flow/">導入の流れを詳しく見る</FlowLink>
          </FlowWrapper>
          <StyledFaqCostStructured />
          <StyledDetailedGuide
            className="detailed-guide"
            downloadDocumentOnClick={() => sendCustomLink(PageName.Cost, clAction.DLDocument)}
            questionOnClick={() => sendCustomLink(PageName.Cost, clAction.Question, clOption.Number2)}
          />
          <StyledSupplementaryNotesONLowest className="supplementary-notes-on-lowest" />
          {/* <ITIntroductionSubsidyFixedBanner onClick={() => sendCustomLink(PageName.Cost, clAction.ITSubsidyBanner)} /> */}
        </Contents>
        <FooterLinks />
      </Main>
    </>
  )
}

export default Cost
