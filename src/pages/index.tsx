import { PageProps } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

// import { ITIntroductionSubsidyFixedBanner } from "components/atoms/ITIntroductionSubsidyFixedBanner"
//anti-flicker
// import { ANTI } from "components/organisms/ANTI"
// import { ITIntroductionSubsidyFixedBanner } from "components/atoms/ITIntroductionSubsidyFixedBanner"
import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { CaseCV } from "components/organisms/CaseCV"
import { ClientVoice } from "components/organisms/ClientVoice"
import { ContentHierarchy } from "components/organisms/ContentHierarchy"
import { DetailedGuide } from "components/organisms/DetailedGuide"
import { EXJS } from "components/organisms/EXJS"
import { FaqTopStructured } from "components/organisms/FaqTopStructured"
import { FeatureList } from "components/organisms/FeatureList"
import { Footer } from "components/organisms/Footer"
import { FooterLinks } from "components/organisms/FooterLinks"
import { FreeTrial } from "components/organisms/FreeTrial"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { KeyVisual } from "components/organisms/KeyVisual"
import { LowCost } from "components/organisms/LowCost"
import { SEO } from "components/organisms/SEO"
import { SimpleIntroductionStepCardList } from "components/organisms/SimpleIntroductionStepCardList"
import { SupplementaryNotesONLowest } from "components/organisms/SupplementaryNotesONLowest"
import { UsageStepList } from "components/organisms/UsageStepList"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

export const freeTrialId = "free-trial"

const Main = styled.main``

const Contents = styled.div``

const SectionStyle = css`
  padding: 68px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const StyledFeatureList = styled(FeatureList)`
  ${SectionStyle}
`

const StyledLowCost = styled(LowCost)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const StyledClientVoice = styled(ClientVoice)`
  ${SectionStyle}
`

const StyledUsageStepList = styled(UsageStepList)`
  ${SectionStyle}
`

const StyledFreeTrial = styled(FreeTrial)`
  ${SectionStyle}
`

const StyledCaseCV = styled(CaseCV)`
  ${SectionStyle}
`

const StyledSimpleIntroductionStepCardList = styled(SimpleIntroductionStepCardList)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const StyledFaqTopStructured = styled(FaqTopStructured)`
  ${SectionStyle}
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

const Home: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const pageName = ""
  const title = ""
  const description =
    "【リクルート：Airインボイス】請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = "インボイス, 請求書, 支払い, 請求書 支払い, 請求書 管理, 請求書 自動化, 請求書 効率化"

  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.Top, undefined, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグと、
  // コンバージョン(アプリダウンロード)データを送るための関数を定義するスクリプトタグを追加
  useAdsPVReport()

  return (
    <>
      <GTM />
      <EXJS />
      <AdobeTargetTag />
      <SEO title={title} description={description} keywords={keywords} pathWithPrefix={pathWithPrefix} />
      <Main>
        <Header
          currentPath="/"
          loginOnClick={() => {
            sendCustomLink(PageName.Top, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.Top, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.Top, clAction.LookInquiryHeader)
            sendAdsCVReport()
          }}
        />
        <Contents>
          <ContentHierarchy
            breadcrumbs={[
              { pageName: "Air ビジネスツールズ", pageLink: "https://airregi.jp/top/" },
              { pageName: "Airインボイス" },
            ]}
            contentName={pageName}
          />
          <KeyVisual
            documentRequestButtonOnClick={() => {
              sendCustomLink(PageName.Top, clAction.DLDocumentFV, clOption.Number1)
              sendAdsCVReport()
            }}
            inquiryButtonOnClick={() => {
              sendCustomLink(PageName.Top, clAction.LookInquiryFV, clOption.Number1)
              sendAdsCVReport()
            }}
          />
          <StyledFeatureList className="feature-list" />
          <StyledLowCost
            className="low-cost"
            withTrasitionButton={true}
            pageName={PageName.Top}
            transitionToCost={() => sendCustomLink(PageName.Top, clAction.LookCost)}
          />
          <StyledClientVoice className="client-voice" pageName={PageName.Top} position="top" />
          <StyledUsageStepList
            className="usage-step-list"
            pageName={PageName.Top}
            navigationButtonOnClick={() => sendCustomLink(PageName.Top, clAction.LookFunction)}
          />
          <StyledFreeTrial
            id={freeTrialId}
            className="free-trial"
            title="Airインボイスを今すぐ無料体験"
            spTitle="Airインボイスを\n今すぐ無料体験"
            withTrasitionButton={true}
            pageName={PageName.Top}
            transitionToCost={() => sendCustomLink(PageName.Top, clAction.LookCost)}
          />
          <StyledCaseCV
            className="electronic-book-CV"
            CVTitle="Airインボイスを今すぐダウンロード"
            CVTitleSp="Airインボイスを\n今すぐダウンロード"
            CVSubTitle="初めての方でもカンタンにご利用いただけます。"
            CVSubTitleSp="初めての方でもカンタンに\nご利用いただけます。"
            documentRequestButtonOnClick={() =>
              sendCustomLink(PageName.ElectronicBook, clAction.DLDocument, clOption.Number2)
            }
            inquiryButtonOnClick={() => sendCustomLink(PageName.ElectronicBook, clAction.LookInquiry, clOption.Number2)}
          />
          <StyledSimpleIntroductionStepCardList
            className="simple-introduction-step-card-list"
            pageName={PageName.Top}
            transitionToFlow={() => sendCustomLink(PageName.Top, clAction.LookFlow)}
          />
          <StyledFaqTopStructured />
          <StyledDetailedGuide
            className="detailed-guide"
            downloadDocumentOnClick={() => sendCustomLink(PageName.Top, clAction.DLDocument)}
            questionOnClick={() => sendCustomLink(PageName.Top, clAction.Question, clOption.Number2)}
          />
          <StyledSupplementaryNotesONLowest className="supplementary-notes-on-lowest" />
          {/* <ITIntroductionSubsidyFixedBanner onClick={() => sendCustomLink(PageName.Top, clAction.ITSubsidyBanner)} /> */}
        </Contents>
        <Footer />
        <FooterLinks />
      </Main>
    </>
  )
}

export default Home
