import { PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { BREAK_POINT } from "components/sizes"

import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { ContentHeader } from "components/organisms/ContentHeader"
import { FooterLinks } from "components/organisms/FooterLinks"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { InquiryForm } from "components/organisms/InquiryForm"
import { SEO } from "components/organisms/SEO"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink, sendCustomLinkAsync } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

const Main = styled.main``

const RequestDocumentFormContainer = styled.div`
  padding: 43px 32px 51px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 24px 20px;
  }
  display: flex;
  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-flow: column;
    align-items: center;
  }
  justify-content: center;
  @media (min-width: ${BREAK_POINT.w769}px) {
    max-width: 1080px !important;
    margin: 0 auto;
  }
`

// 575(px)はフォームのwidthの実数値
const DocumentRequestFormWrapper = styled.div`
  width: calc(575 / 1016 * 100%) !important;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100% !important;
  }
`

const DocumentRequest: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const pageName = "お問い合わせ"
  const description =
    "【リクルート：Airインボイス】機能・価格・サポート体制などがわかる資料のダウンロード、導入相談（無料）はこちらからお申込みください。"
  const keywords = ""
  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.Inquiry, undefined, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグを追加
  useAdsPVReport()

  return (
    <>
      <GTM />
      <SEO title={pageName} description={description} keywords={keywords} pathWithPrefix={pathWithPrefix} />
      <AdobeTargetTag />
      <Main>
        <Header
          currentPath="/"
          loginOnClick={() => {
            sendCustomLinkAsync(PageName.Inquiry, clAction.LookLoginHeader)
            sendCustomLink(PageName.Inquiry, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.Inquiry, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.Top, clAction.LookInquiryHeader)
            sendAdsCVReport()
          }}
          freeStartHref=""
        />
        <ContentHeader
          breadcrumbs={[
            { pageName: "Air ビジネスツールズ", pageLink: "https://airregi.jp/top/" },
            { pageName: "Airインボイス", pageLink: "/" },
            { pageName: pageName },
          ]}
          contentName={pageName}
          description="お問い合わせありがとうございます。下記フォームに必要事項をご入力ください。"
        />
        <RequestDocumentFormContainer>
          <DocumentRequestFormWrapper>
            <InquiryForm />
          </DocumentRequestFormWrapper>
        </RequestDocumentFormContainer>
        <FooterLinks />
      </Main>
    </>
  )
}

export default DocumentRequest
