import { PageProps } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { CaseCV } from "components/organisms/CaseCV"
import { ClientVoice } from "components/organisms/ClientVoice"
import { ContentHeader } from "components/organisms/ContentHeader"
import { DetailedGuide } from "components/organisms/DetailedGuide"
import { EXJS } from "components/organisms/EXJS"
import { FooterLinks } from "components/organisms/FooterLinks"
import { FreeTrial } from "components/organisms/FreeTrial"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { SEO } from "components/organisms/SEO"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

const Main = styled.main``

const SectionStyle = css`
  padding: 68px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const StyledClientVoice = styled(ClientVoice)`
  ${SectionStyle}
`

const StyledFreeTrial = styled(FreeTrial)`
  ${SectionStyle}
`

const StyledDetailedGuide = styled(DetailedGuide)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const StyledCaseCV = styled(CaseCV)`
  ${SectionStyle}
`

const Case: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const pageName = "導入事例"
  const description =
    "リクルート：Airインボイス】機能をご紹介します。請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = "請求書 作成, 請求書 発行, 支払い, 請求書 支払い"

  const freeTrialId = "free-trial"

  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.Case, undefined, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグ
  useAdsPVReport()

  return (
    <>
      <GTM />
      <EXJS />
      <SEO title={pageName} description={description} keywords={keywords} pathWithPrefix={pathWithPrefix} />
      <Main>
        <Header
          currentPath="/case/"
          loginOnClick={() => {
            sendCustomLink(PageName.Case, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.Case, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.Case, clAction.LookInquiryHeader)
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
          description="Airインボイスをご利用の方に、導入した成果や活用方法をお聞きしました。"
        />
        <StyledClientVoice className="client-voice" pageName={PageName.Top} position="case" />
        <StyledFreeTrial
          id={freeTrialId}
          className="free-trial"
          title="Airインボイスを今すぐ無料体験"
          spTitle="Airインボイスを\n今すぐ無料体験"
          withTrasitionButton={true}
          pageName={PageName.Case}
          transitionToCost={() => sendCustomLink(PageName.Case, clAction.LookCost)}
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
        <StyledDetailedGuide
          className="detailed-guide"
          downloadDocumentOnClick={() => sendCustomLink(PageName.Case, clAction.DLDocument)}
          questionOnClick={() => sendCustomLink(PageName.Case, clAction.Question, clOption.Number2)}
        />
        <FooterLinks />
      </Main>
    </>
  )
}

export default Case
