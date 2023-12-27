import { PageProps } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT, HEADER_NAVBAR_HEIGHT_PC_PX, HEADER_NAVBAR_HEIGHT_SP_PX } from "components/sizes"

import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { ContentHeader } from "components/organisms/ContentHeader"
import { DetailedGuide } from "components/organisms/DetailedGuide"
import { EXJS } from "components/organisms/EXJS"
import { FooterLinks } from "components/organisms/FooterLinks"
import { FreeTrial } from "components/organisms/FreeTrial"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { SEO } from "components/organisms/SEO"
import { IntroductionStepCardList } from "components/organisms/StepCardList/IntroductionStepCardList"
import { StepSummary } from "components/organisms/StepSummary"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink, sendCustomLinkWithEvent2 } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { scrollToId } from "functions/scroll"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

const Main = styled.main``

const StyledStepSummary = styled(StepSummary)`
  padding: 68px 32px 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px 0;
  }
`

const StyledIntroductionStepCardList = styled(IntroductionStepCardList)`
  padding: 48px 32px 64px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 48px 16px 56px;
  }
`

const StyledFreeTrial = styled(FreeTrial)`
  background-color: ${COLOR.main05};
  padding: 64px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const StyledDetailedGuide = styled(DetailedGuide)`
  background-color: ${COLOR.main05};
  padding: 64px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const Flow: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const pageName = "導入の流れ"
  const description =
    "【リクルート：Airインボイス】導入の流れをご紹介します。請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = ""
  const freeTrialId = "free-trial"

  // ボタン押下時のスクロール遷移のために必要
  const stepCardIds = [
    "flow-app-download",
    "flow-air-id-registration",
    "flow-invoice-shooting",
    "flow-sbps-application",
    "flow-payment-reservation",
  ]

  const actions = [
    clAction.StepAppDownload,
    clAction.StepRegistration,
    clAction.StepInvoiceShooting,
    clAction.StepApplication,
    clAction.StepPaymentReservation,
  ]

  const breakpoint = useBreakpoint()
  const offset = breakpoint.sp ? HEADER_NAVBAR_HEIGHT_SP_PX : HEADER_NAVBAR_HEIGHT_PC_PX

  const onClicks = constructOnClicks(stepCardIds, offset, actions)

  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.Flow, undefined, vosQueryParam)

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
          currentPath="/flow/"
          loginOnClick={() => {
            sendCustomLink(PageName.Flow, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.Flow, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.Top, clAction.LookInquiryHeader)
            sendAdsCVReport()
          }}
        />
        <ContentHeader
          breadcrumbs={[
            { pageName: "Air ビジネスツールズ", pageLink: "https://airregi.jp/top/" },
            { pageName: "Airインボイス", pageLink: "/" },
            { pageName: pageName },
          ]}
          contentName={pageName}
          description="Airインボイスは、アプリをダウンロードすればすぐご利用できます。"
        />
        <StyledStepSummary className="step-summary" onClicks={onClicks} />
        <StyledIntroductionStepCardList
          className="introduction-step-card-list"
          stepCardIds={stepCardIds}
          appStoreButtonOnClick={() => {
            sendCustomLinkWithEvent2(PageName.Flow, clAction.AppStore, clOption.Number1)
            sendAdsCVReport()
          }}
        />
        <StyledFreeTrial
          id={freeTrialId}
          className="free-trial"
          title="Airインボイスを今すぐ無料体験"
          spTitle="Airインボイスを\n今すぐ無料体験"
          withTrasitionButton={true}
          pageName={PageName.Flow}
          transitionToCost={() => sendCustomLink(PageName.Flow, clAction.LookCost)}
        />
        <StyledDetailedGuide
          className="detailed-guide"
          downloadDocumentOnClick={() => sendCustomLink(PageName.Flow, clAction.DLDocument)}
          questionOnClick={() => sendCustomLink(PageName.Flow, clAction.Question, clOption.Number2)}
        />
        <FooterLinks />
      </Main>
    </>
  )
}

const constructOnClicks = (destinationIds: string[], offset: number, actions: clAction[]) => {
  const onClicks = []
  for (let i = 0; i < destinationIds.length; i++) {
    onClicks.push(() => {
      scrollToId(destinationIds[i], offset)
      sendCustomLink(PageName.Flow, actions[i])
    })
  }
  return onClicks
}

export default Flow
