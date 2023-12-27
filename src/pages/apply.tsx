import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { EXJS } from "components/organisms/EXJS"
import { FAQ } from "components/organisms/FAQ"
import { GTM } from "components/organisms/GTM"
import { HeaderSimple } from "components/organisms/HeaderSimple"
import { PaidVersionApplication } from "components/organisms/PaidVersionApplication"
import { PaidVersionApplicationStep } from "components/organisms/PaidVersionApplicationStep"
import { SEO } from "components/organisms/SEO"
import { SimpleCostExplanation } from "components/organisms/SimpleCostExplanation"
import { SpecialOffer } from "components/organisms/SpecialOffer"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

const SectionStyle = css`
  padding: 64px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 20px;
  }
`

const StyledSimpleCostExplanation = styled(SimpleCostExplanation)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const StyledPaidVersionApplication = styled(PaidVersionApplication)`
  background-color: ${COLOR.grayAlabaster};
  padding: 32px 20px;
`

const StyledSpecialOffer = styled(SpecialOffer)`
  ${SectionStyle}
`

const StyledPaidVersionApplicationStep = styled(PaidVersionApplicationStep)`
  ${SectionStyle}
`

const StyledFAQ = styled(FAQ)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const Main = styled.main``

const Contents = styled.div``

const Apply: React.VFC = () => {
  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.Apply, undefined, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグ
  useAdsPVReport()

  // クエリパラメータから client_id を取得
  const [clientIdQueryParam] = useQueryParam("client_id", StringParam)
  const [clientId, setClientId] = useState<string>("")
  useEffect(() => {
    if (clientIdQueryParam) {
      setClientId(clientIdQueryParam)
    }
  }, [clientIdQueryParam])

  return (
    <>
      <GTM />
      <EXJS />
      <SEO noindex />
      <AdobeTargetTag />
      <Main>
        <HeaderSimple pageName={PageName.Apply} />
        <Contents>
          <StyledSimpleCostExplanation className="simple-cost-explanation" isShort />
          {getStyledPaidVersionApplication(1, clOption.Number1, clientId)}
          <StyledSpecialOffer className="special-offer" />
          {getStyledPaidVersionApplication(2, clOption.Number2, clientId)}
          <StyledPaidVersionApplicationStep className="paid-version-application-step" />
          {getStyledPaidVersionApplication(3, clOption.Number3, clientId)}
          <StyledFAQ className="faq" />
          {getStyledPaidVersionApplication(4, clOption.Number4, clientId)}
        </Contents>
      </Main>
    </>
  )
}

const getStyledPaidVersionApplication = (sectionNumber: number, option: clOption, clientId: string) => {
  return (
    <StyledPaidVersionApplication
      className="paid-version-application"
      pageName={PageName.Apply}
      clientId={clientId}
      sectionNumber={sectionNumber}
      termsOnClick={() => sendCustomLinkOfTermsOfUse(option)}
      paidVersionApplicationOnClick={() => {
        sendCustomLinkOfPaidVersionApplication(option)
        sendAdsCVReport()
      }}
    />
  )
}

const sendCustomLinkOfTermsOfUse = (option: clOption) => {
  sendCustomLink(PageName.Apply, clAction.TermsOfUse, option)
}

const sendCustomLinkOfPaidVersionApplication = (option: clOption) => {
  sendCustomLink(PageName.Apply, clAction.PaidApply, option)
}

export default Apply
