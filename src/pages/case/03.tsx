import { PageProps } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { AdobeTargetTag } from "components/organisms/AdobeTarget"
import { CaseCV } from "components/organisms/CaseCV"
import { CaseEvenSection } from "components/organisms/CaseEvenSection"
import { CaseOddSection, CaseSectionsProps } from "components/organisms/CaseOddSection"
import { CaseVisual } from "components/organisms/CaseVisual"
import { ContentHeader } from "components/organisms/ContentHeader"
import { DetailedGuide } from "components/organisms/DetailedGuide"
import { EXJS } from "components/organisms/EXJS"
import { FooterLinks } from "components/organisms/FooterLinks"
import { FreeTrial } from "components/organisms/FreeTrial"
import { GTM } from "components/organisms/GTM"
import { Header } from "components/organisms/Header"
import { SEO } from "components/organisms/SEO"
import { ShopInfo, ShopInfoProps } from "components/organisms/ShopInfo"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, clOption, sendCustomLink } from "functions/adobeAnalytics/customLink"
import { sendAdsCVReport } from "functions/ads"
import { useAdobeAnalyticsPVReport } from "hooks/useAdobeAnalyticsPVReport"
import { useAdsPVReport } from "hooks/useAdsPVReport"

import Article01 from "images/case/arashio/article-1-pc.jpg"
import Article02 from "images/case/arashio/article-2-pc.jpg"
import Article03 from "images/case/arashio/article-3-pc.jpg"
import Article04 from "images/case/arashio/article-4-pc.jpg"
import ShopImg from "images/case/arashio/shop-pc.jpg"

const Main = styled.main``

const Contents = styled.div``

const SectionStyle = css`
  padding: 68px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const StyledCaseVisual = styled(CaseVisual)`
  @media (max-width: ${BREAK_POINT.w768}px) {
    /* margin-bottom: 206px; */
  }
`

const CaseWrapper = styled.div`
  margin-top: 200px;

  @media (max-width: 800px) {
    margin-top: 250px;
  }

  @media (min-width: 1800px) {
    padding: 0 150px;
  }

  @media (min-width: 1920px) {
    padding: 0 200px;
  }

  @media (min-width: 2500px) {
    padding: 0 400px;
  }
`

const StyledCaseEvenSection = styled(CaseEvenSection)``

const StyledShopInfo = styled(ShopInfo)`
  ${SectionStyle}
`

const StyledFreeTrial = styled(FreeTrial)`
  ${SectionStyle}
`

const StyledCaseCV = styled(CaseCV)`
  ${SectionStyle}
`

const StyledDetailedGuide = styled(DetailedGuide)`
  background-color: ${COLOR.main05};
  ${SectionStyle}
`

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  white-space: pre-wrap;
  color: ${COLOR.black60};
  &:not(:first-child) {
    margin-top: 16px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: none;
    margin-top: 8px;
  }
`

const ShopDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  color: ${COLOR.black60};
  margin: 16px 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const Address = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  color: ${COLOR.black60};

  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const Case02: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const pageName = "導入事例｜あらしお株式会社"
  const description =
    "リクルート：Airインボイス】機能をご紹介します。請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = "請求書 作成, 請求書 発行, 支払い, 請求書 支払い"

  const freeTrialId = "free-trial"

  const [vosQueryParam] = useQueryParam("vos", StringParam)

  const caseDetails: CaseSectionsProps[] = [
    {
      title: "電子帳簿保存法の改正を前に、請求書にまつわる業務をスマートにしたいと考えていました",
      src: Article01,
      comment: "▲ プロに選ばれる商品として、高い品質を保つことに、特にこだわっています",
      descriptions: (
        <>
          <Description>
            あらしお株式会社は、平釜塩「あらしお」の製造、販売を行っている企業です。当社のルーツはとても古く、江戸時代まで遡ります。もともと本社を構える静岡県駿河区は、広大な駿河湾に面していることもあり、昔から塩の産地として有名です。当社は1963年から平釜塩「あらしお」の製造を開始し、雪のような結晶となめらかな味という特徴が支持されて、首都圏の料亭などで重宝されてきました。
          </Description>
          <Description>
            当社が「Airインボイス」の導入を検討し始めたのは、電子帳簿保存法の改正に伴って電子取引の電子保存義務化が決まったことがきっかけです。請求書の振込みや管理といった手間の掛かっていた業務を、このタイミングでスマートにカンタンにしようと思い、最適なサービスを探していました。その中で出合ったのが「Airインボイス」です。
          </Description>
          <Description>
            当社は静岡駅前で運営しているアンテナショップで「Airレジ」を活用しています。それを通して、使い勝手の良さに魅力を感じるとともに、リクルートのサービスに対する信頼感を持っていました。そうした前提があったからこそ、新しいサービスである「Airインボイス」に対する信頼感も自然と持つこともでき、2023年3月から活用を始めた背景があります。
          </Description>
        </>
      ),
    },
    {
      title: "会計士との情報共有がスムーズになり、振込み関連の業務がスムーズになりました",
      src: Article02,
      comment: "▲ 振込み金額が大きいとプレッシャーもありましたが、今は何の負担もありません",
      descriptions: (
        <>
          <Description>
            「Airインボイス」の導入後、振込業務が劇的に楽になりました。現在、お取引先様から請求書が届いたら、PDFファイルをアップロードするか、またはタブレットで読み込むだけで作業が終わります。複数の請求書もまとめて振込みの予約ができるので、対応し忘れる心配もありません。
          </Description>
          <Description>
            これまでは、お取引先から請求書が郵送で届いたら、ある程度溜まった段階で、ネットバンキングで振込みをしていました。しかし、数十件の請求書の金額を間違えないように、1件1件振込むことに大きなプレッシャーがあったのも事実です。「Airインボイス」だと数字のミスもないので、心理的な負担も大きく減っています。
          </Description>
          <Description>
            また、「Airインボイス」の活用を始めて、特に便利に感じたのは会計理士事務所と画面を共有できることです。以前は、確認が必要な請求書があると会計士から電話があって、それをPDFにした上でパスワード付きのメールを送信していました。1枚の書類を送るのにもかなりの手間がかかっていたのですが、今はその必要がありません。会計士の方で必要な情報があれば、「Airインボイス」上で確認してもらえるので、互いにスムーズな業務ができるようになりました。
          </Description>
        </>
      ),
    },
    {
      title: "振込業務の負担が減った代わりに、より価値を生む仕事に注力できています",
      src: Article03,
      img: Article04,
      comment: "▲ ヘルプデスクの対応も丁寧で、何の問題もなく使うことができます",
      descriptions: (
        <>
          <Description>
            振込業務は毎月必ず発生する業務で、しかもミスが許されません。そのため、そうした作業はテクノロジーに任せて、人は人にしかできない業務に注力できないものかと考えていましたが、「Airインボイス」の導入でそうした環境が実現しました。
          </Description>
          <Description>
            現在、経理に力を入れてもらっているのは、取引先様からの問い合わせへの対応です。「あらしお」は100年以上の歴史がある商品なので、古くから使ってくださっているお客様もたくさんいます。電話対応はそうしたお客様とダイレクトに関係性を構築できるチャンスです。窓口の対応次第で、関係が途切れてしまう危険性もあるため、丁寧な対応が欠かせません。その意味で、「Airインボイス」の果たす役割は大きいです。
          </Description>
          <Description>
            当社では、「Airインボイス」を活用してから、請求書の電子帳簿保存法対応はもちろん、日常の振込業務の手間も削減できた上、価値を生む仕事に注力できるようになりました。「Airインボイス」が当社のファンづくりに欠かせないツールになっているといっても過言ではありません。今後も、その力を借りながら長く愛される商品づくりを行っていきたいです。
          </Description>
        </>
      ),
    },
  ]

  // 店舗情報
  const shopInfo: ShopInfoProps = {
    src: ShopImg,
    name: "あらしお株式会社",
    description: (
      <>
        <ShopDescription>
          江戸時代、静岡県の久能浜で行われていた塩づくりの技術をルーツに持つ同社の商品は、「雪のような結晶」で「丸みのある味」と評判が高い。家庭はもちろん、老舗料亭でも広く使われており、プロから選ばれる商品としても知られている。
        </ShopDescription>
        <Address>静岡県静岡市駿河区広野2308−1</Address>
      </>
    ),
    labels: ["製造", "1店舗", "請求書枚数非公開"],
  }

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
          currentPath="/case/03/"
          loginOnClick={() => {
            sendCustomLink(PageName.Case02, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.Case02, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.Case02, clAction.LookInquiryHeader)
            sendAdsCVReport()
          }}
        />
        <ContentHeader
          breadcrumbs={[
            { pageName: "Air ビジネスツールズ", pageLink: "https://airregi.jp/top/" },
            { pageName: "Airインボイス", pageLink: "/" },
            { pageName: "導入事例", pageLink: "/case" },
            { pageName: pageName },
          ]}
          contentName={pageName}
          description=""
        />
        <Contents>
          <StyledCaseVisual
            mainVisual="arashio"
            cardDescription="普段の振込みに関する業務負担が劇的に軽減\n電子帳簿保存法にもスムーズに対応できて助かっています"
            storeName="あらしお株式会社 （左）A.N様、（右）Y.K 様"
            labels={["製造", "1店舗", "請求書枚数非公開"]}
          />
          <CaseWrapper>
            <CaseOddSection {...caseDetails[0]} />
            <StyledCaseEvenSection {...caseDetails[1]} />
            <CaseOddSection {...caseDetails[2]} />
          </CaseWrapper>
          <StyledShopInfo {...shopInfo} />
          <StyledFreeTrial
            id={freeTrialId}
            className="free-trial"
            title="Airインボイスを今すぐ無料体験"
            spTitle="Airインボイスを\n今すぐ無料体験"
            withTrasitionButton={true}
            pageName={PageName.Case02}
            transitionToCost={() => sendCustomLink(PageName.Case02, clAction.LookCost)}
          />
          <StyledCaseCV
            className="electronic-book-CV"
            CVTitle="Airインボイスを今すぐダウンロード"
            CVTitleSp="Airインボイスを\n今すぐダウンロード"
            CVSubTitle="初めての方でもカンタンにご利用いただけます。"
            CVSubTitleSp="初めての方でもカンタンに\nご利用いただけます。"
            documentRequestButtonOnClick={() => sendCustomLink(PageName.Case02, clAction.DLDocument, clOption.Number2)}
            inquiryButtonOnClick={() => sendCustomLink(PageName.Case02, clAction.LookInquiry, clOption.Number2)}
          />
          <StyledDetailedGuide
            className="detailed-guide"
            downloadDocumentOnClick={() => sendCustomLink(PageName.Case02, clAction.DLDocument)}
            questionOnClick={() => sendCustomLink(PageName.Case02, clAction.Question, clOption.Number2)}
          />
        </Contents>
        <FooterLinks />
      </Main>
    </>
  )
}

export default Case02
