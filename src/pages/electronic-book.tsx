import { PageProps } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { EXJS } from "components/organisms/EXJS"
import { ElectronicBookCV } from "components/organisms/ElectronicBookCV"
import { ElectronicBookCardList } from "components/organisms/ElectronicBookCardList"
import { ElectronicBookKeyVisual } from "components/organisms/ElectronicBookKeyVisual"
import { ElectronicBookLists } from "components/organisms/ElectronicBookLists"
import { ElectronicBookPrepare } from "components/organisms/ElectronicBookPrepare"
import { FooterLinks } from "components/organisms/FooterLinks"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { SEO } from "components/organisms/SEO"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

const Main = styled.main``

const Contents = styled.div``

const SectionStyle = css`
  padding: 68px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const StyledElectronicBookLists = styled(ElectronicBookLists)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const StyledElectronicBookCardList = styled(ElectronicBookCardList)`
  ${SectionStyle}
`

const StyledElectronicBookPrepare = styled(ElectronicBookPrepare)`
  ${SectionStyle}
`

const StyledBottomElectronicBookCV = styled(ElectronicBookCV)`
  ${SectionStyle}
`

const ElectronicBook: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const title = "電子帳簿保存法について"
  const description =
    "【リクルート：Airインボイス】請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = "インボイス, 請求書, 支払い, 請求書 支払い, 請求書 管理, 請求書 自動化, 請求書 効率化"

  const [vosQueryParam] = useQueryParam("vos", StringParam)

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.ElectronicBook, undefined, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグと、
  // コンバージョン(アプリダウンロード)データを送るための関数を定義するスクリプトタグを追加
  useAdsPVReport()

  return (
    <>
      <GTM />
      <EXJS />
      <SEO title={title} description={description} keywords={keywords} pathWithPrefix={pathWithPrefix} />
      <Main>
        <Header
          currentPath="/electronic-book/"
          loginOnClick={() => {
            sendCustomLink(PageName.ElectronicBook, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.ElectronicBook, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.ElectronicBook, clAction.LookInquiryHeader)
            sendAdsCVReport()
          }}
        />
        <Contents>
          <ElectronicBookKeyVisual />
          <StyledElectronicBookLists
            className="electronic-book-lists"
            questionOnClick={() => sendCustomLink(PageName.ElectronicBook, clAction.Question, clOption.Number1)}
          />
          <StyledElectronicBookCardList
            className="electronic-book-card-list"
            pageName={PageName.Top}
            documentRequestButtonOnClick={() =>
              sendCustomLink(PageName.ElectronicBook, clAction.DLDocument, clOption.Number1)
            }
            inquiryButtonOnClick={() => sendCustomLink(PageName.ElectronicBook, clAction.LookInquiry, clOption.Number1)}
          />
          <StyledElectronicBookPrepare className="electronic-book-prepare" />
          <StyledBottomElectronicBookCV
            className="electronic-book-CV"
            documentRequestButtonOnClick={() =>
              sendCustomLink(PageName.ElectronicBook, clAction.DLDocument, clOption.Number2)
            }
            inquiryButtonOnClick={() => sendCustomLink(PageName.ElectronicBook, clAction.LookInquiry, clOption.Number2)}
          />
        </Contents>
        <FooterLinks />
      </Main>
    </>
  )
}

export default ElectronicBook
