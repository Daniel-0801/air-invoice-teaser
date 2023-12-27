import { PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { ContentHeader } from "components/organisms/ContentHeader"
import { DocumentRequestForm } from "components/organisms/DocumentRequestForm"
import { FooterLinks } from "components/organisms/FooterLinks"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { SEO } from "components/organisms/SEO"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink, sendCustomLinkAsync } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

import DetailImgContent from "images/common/document-request_detail.png"

const Main = styled.main``

const RequestDocumentFormContainer = styled.div`
  padding: 64px 32px;
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

// 377(px)は資料詳細のwidthの実数値
const DetaiInformation = styled.div`
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
    padding: 24px;
    margin-bottom: 20px;
  }
  @media (min-width: ${BREAK_POINT.w769}px) {
    width: calc(377 / 1016 * 100%) !important;
    align-self: start;
    margin-right: 64px;
  }
  background-color: ${COLOR.gallery};
  border-radius: 8px;
  padding: 32px;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 24px;
`

const MainDetailExplaination = styled.div`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 20px;
`

const SubDetailExplainationList = styled.ul`
  list-style-type: disc;
  margin-left: 23px;
`

const SecondDetailExplaination = styled.div`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 4px;
`

const SubDetailExplaination = styled.li`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 2px;

  &::marker {
    font-size: 17px;
    color: ${COLOR.grayEmperor};
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

  const pageName = "資料ダウンロード"
  const description =
    "【リクルート：Airインボイス】機能・価格・サポート体制などがわかる資料のダウンロード、導入相談（無料）はこちらからお申込みください。"
  const keywords = ""
  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.DocumentRequest, undefined, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグを追加
  useAdsPVReport()

  return (
    <>
      <GTM />
      <SEO title={pageName} description={description} keywords={keywords} pathWithPrefix={pathWithPrefix} />
      <AdobeTargetTag />
      <Main>
        <Header
          currentPath="/document_request/"
          loginOnClick={() => {
            sendCustomLinkAsync(PageName.DocumentRequest, clAction.LookLoginHeader)
            sendCustomLink(PageName.DocumentRequest, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.DocumentRequest, clAction.Question, clOption.Number1)}
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
          description="下記フォームに必要事項をご入力いただき、ダウンロードページへお進みください。"
        />
        <RequestDocumentFormContainer>
          <DetaiInformation>
            <Img src={DetailImgContent} width={313} height={233} />
            <MainDetailExplaination>
              <p>サービス概要から導入まで</p>
              <p>これひとつでわかる「Airインボイス」</p>
            </MainDetailExplaination>
            <SecondDetailExplaination>この資料でわかること</SecondDetailExplaination>
            <SubDetailExplainationList>
              <SubDetailExplaination>サービス概要</SubDetailExplaination>
              <SubDetailExplaination>機能紹介</SubDetailExplaination>
              <SubDetailExplaination>料金と導入の流れ</SubDetailExplaination>
            </SubDetailExplainationList>
          </DetaiInformation>
          <DocumentRequestFormWrapper>
            <DocumentRequestForm />
          </DocumentRequestFormWrapper>
        </RequestDocumentFormContainer>
        <FooterLinks />
      </Main>
    </>
  )
}

export default DocumentRequest
