import React from "react"
import styled from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { BREAK_POINT } from "components/sizes"

import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { DocumentDownload } from "components/organisms/DocumentDownload"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { SEO } from "components/organisms/SEO"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink, sendCustomLinkAsync } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { pvEvents, useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

const Main = styled.main``

const DocumentDownloadContainer = styled.div`
  padding: 96px 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const Thanks: React.VFC = () => {
  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.DocumentRequestThanks, pvEvents.Event41, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグ
  useAdsPVReport()

  return (
    <>
      <GTM />
      <SEO noindex />
      <AdobeTargetTag />
      <Main>
        <Header
          currentPath="/document_request/"
          loginOnClick={() => {
            sendCustomLinkAsync(PageName.DocumentRequestThanks, clAction.LookLoginHeader),
              sendCustomLink(PageName.DocumentRequestThanks, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.DocumentRequestThanks, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.Top, clAction.LookInquiryHeader)
            sendAdsCVReport()
          }}
          freeStartHref=""
        />
        <DocumentDownloadContainer>
          <DocumentDownload
            pageName={PageName.DocumentRequestThanks}
            DLDocumentOnClick={() => sendCustomLink(PageName.DocumentRequestThanks, clAction.DLDocument)}
            returnTopOnClick={() => sendCustomLink(PageName.DocumentRequestThanks, clAction.ReturnTop)}
          />
        </DocumentDownloadContainer>
      </Main>
    </>
  )
}

export default Thanks
