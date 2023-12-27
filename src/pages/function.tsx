import { PageProps } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { ContentHeader } from "components/organisms/ContentHeader"
import { DetailedGuide } from "components/organisms/DetailedGuide"
import { EXJS } from "components/organisms/EXJS"
import { FaqFunctionStructured } from "components/organisms/FaqFunctionStructured"
import { FooterLinks } from "components/organisms/FooterLinks"
import { FreeTrial } from "components/organisms/FreeTrial"
import { MainFunctionList } from "components/organisms/FunctionList/MainFunctionList"
import { OtherFunctionList } from "components/organisms/FunctionList/OtherFunctionList"
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

const StyledMainFunctionList = styled(MainFunctionList)`
  ${SectionStyle}
`

const StyledFaqFunctionStructured = styled(FaqFunctionStructured)`
  ${SectionStyle}
`

const StyledOtherFunctionList = styled(OtherFunctionList)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const StyledFreeTrial = styled(FreeTrial)`
  ${SectionStyle}
`

const StyledDetailedGuide = styled(DetailedGuide)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const Function: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const pageName = "機能紹介"
  const description =
    "リクルート：Airインボイス】機能をご紹介します。請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = "請求書 作成, 請求書 発行, 支払い, 請求書 支払い"

  const freeTrialId = "free-trial"

  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.Function, undefined, vosQueryParam)

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
          currentPath="/function/"
          loginOnClick={() => {
            sendCustomLink(PageName.Function, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.Function, clAction.Question, clOption.Number1)}
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
          description="Airインボイスの機能についてご紹介します。"
        />
        <StyledMainFunctionList className="main-function-list" />
        <StyledOtherFunctionList className="other-function-list" />
        <StyledFreeTrial
          id={freeTrialId}
          className="free-trial"
          title="Airインボイスを今すぐ無料体験"
          spTitle="Airインボイスを\n今すぐ無料体験"
          withTrasitionButton={true}
          pageName={PageName.Function}
          transitionToCost={() => sendCustomLink(PageName.Function, clAction.LookCost)}
        />
        <StyledFaqFunctionStructured />
        <StyledDetailedGuide
          className="detailed-guide"
          downloadDocumentOnClick={() => sendCustomLink(PageName.Function, clAction.DLDocument)}
          questionOnClick={() => sendCustomLink(PageName.Function, clAction.Question, clOption.Number2)}
        />
        <FooterLinks />
      </Main>
    </>
  )
}

export default Function
