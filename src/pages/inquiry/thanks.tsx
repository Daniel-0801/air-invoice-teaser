import React from "react"
import styled from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { BREAK_POINT } from "components/sizes"

import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { InquiryThanks } from "components/organisms/InquiryThanks"
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

const StyledInquiryThanks = styled(InquiryThanks)`
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const Thanks: React.VFC = () => {
  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.InquiryThanks, pvEvents.Event41, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグ
  useAdsPVReport()

  return (
    <>
      <GTM />
      <SEO noindex />
      <AdobeTargetTag />
      <Main>
        <Header
          currentPath="/inquiry/"
          loginOnClick={() => {
            sendCustomLinkAsync(PageName.InquiryThanks, clAction.LookLoginHeader),
              sendCustomLink(PageName.InquiryThanks, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.InquiryThanks, clAction.Question, clOption.Number1)}
          freeStartHref=""
          inquiryOnClick={() => {
            sendCustomLink(PageName.Top, clAction.LookInquiryHeader)
            sendAdsCVReport()
          }}
        />
        <DocumentDownloadContainer>
          <StyledInquiryThanks />
        </DocumentDownloadContainer>
      </Main>
    </>
  )
}

export default Thanks
