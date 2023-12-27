import { PageProps } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { StringParam, useQueryParam } from "use-query-params"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { CaseCV } from "components/organisms/CaseCV"
import { CaseEvenSection } from "components/organisms/CaseEvenSection"
import { CaseSectionsProps } from "components/organisms/CaseOddSection"
import { CaseOddSection } from "components/organisms/CaseOddSection"
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

import Article01 from "images/case/sanukis/article-1-pc.jpg"
import Article02 from "images/case/sanukis/article-2-pc.jpg"
import Article03 from "images/case/sanukis/article-3-pc.jpg"
import ShopImg from "images/case/sanukis/shop-pc.jpg"

const Main = styled.main``

const Contents = styled.div``

const SectionStyle = css`
  padding: 68px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 16px;
  }
`

const StyledCaseVisual = styled(CaseVisual)`
  /* margin-bottom: 162px; */

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

const Case01: React.VFC<PageProps> = props => {
  const { location } = props

  const pathWithPrefix = location.pathname

  const pageName = "導入事例｜sanukis"
  const description =
    "【リクルート：Airインボイス】請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = "インボイス, 請求書, 支払い, 請求書 支払い, 請求書 管理, 請求書 自動化, 請求書 効率化"

  const freeTrialId = "free-trial"
  const [vosQueryParam] = useQueryParam("vos", StringParam)

  const caseDetails: CaseSectionsProps[] = [
    {
      title: "請求書の確認や振込みに毎月かなりの時間がかかり、負担を感じていました",
      src: Article01,
      comment: "▲ 香川県内を中心に、価値ある野菜を集めると、どうしても取引先は多岐になってしまいます",
      descriptions: (
        <>
          <Description>
            「sanukis」は、地元である香川県の農家から野菜を直接買い取って、販売まで行う八百屋です。当店では、私が直接農家の方とお会いして、本当に自信を持ってお勧めできる商品だけを揃え、地元経済を活性化するハブになることを目指しています。こうしたメッセージを普段から発信しているため、お客様の中心は当店が提案する価値を分かってくださる方々ばかりです。{" "}
          </Description>
          <Description>
            一方で、こうしたビジネスモデルを成り立たせるため、常時取引している農家は50軒近くあります。加えて、それぞれの農家の方への振込みも自分で行っているので、昔はかなりの手間がかかっていました。取引先から請求書がちゃんと届いているかを確認してから、ネットバンキングですべての振込みが完了するまで2時間はかかるのが当たり前です。
          </Description>
          <Description>
            振込み金額が間違っていないかどうかも慎重にチェックしないといけないので、毎回、かなりのストレスが掛かっていました。こうした作業をどうにかして削減できないかと考えていたとき、紹介されたのが『Airインボイス』です。
          </Description>
        </>
      ),
    },
    {
      title: "振込手数料や業務負担の削減など、月額5,500円以上のメリットを感じています",
      src: Article02,
      comment: "▲ リクルートのサービスに対する信頼感があったため、使い勝手に対する疑いはありませんでした",
      descriptions: (
        <>
          <Description>
            『Airインボイス』で、まず驚いたのはサービスのリーズナブルさです。実をいうと、以前、振込代行や請求書作成といったサービスの活用を検討したのですが、費用が高くて断念したことがあります。{" "}
          </Description>
          <Description>
            しかし、『Airインボイス』なら一店舗当たり5,500円で使用できて、振込手数料も一件当たり143円しかかりません
            。これまで振込手数料だけでも1ヶ月で1万円は超えていたので、それが半分以上削減されることに驚きました。{" "}
          </Description>
          <Description>
            また、リクルートのサービスに対する信頼感も大きかったです。もともと当店では『Airレジ』を使っており、Airのサービスの使い勝手の良さを実感していました。そのため、スマートフォンで請求書を撮影して日時を予約すれば、自動で振込みまでしてくれるという『Airインボイス』のサービス概要を聞いたとき、迷わず導入を決めました。月額の利用料はかかるものの、手数料や作業負担の軽減など、それを上回るメリットがあり、非常にコストパフォーマンスの高いサービスだと感じました。
          </Description>
        </>
      ),
    },
    {
      title: "価値ある野菜を手頃な価格で販売するため、『Airインボイス』は必須のツールです",
      src: Article03,
      comment: " ▲ 直感的な操作で、スムーズに振込予約までできるので、空き時間に振込業務が終わります",
      descriptions: (
        <>
          <Description>
            スマートフォン1台あれば、振込業務が完結します。ネットバンキングで振込みをしていたときは、一つ一つ振り込むたびに第二パスワードの入力まで必要でしたが、『Airインボイス』は登録した6桁のパスワードを片手で打つだけです。{" "}
          </Description>
          <Description>
            また、請求書が来たらすぐに撮影をし、振込日の設定までしてしまうので、振込みのためにまとまった時間を取る必要もなくなりました。振込みは、店舗運営の中でも重要度の高い仕事です。振込漏れやミスがあると、お取引先にご迷惑をかけ、私たちの信用にも傷が付くでしょう。そうした慎重さが必要な業務の負担が軽くなったおかげで、香川県を車で回って農家の方と会うといった、より価値を生む仕事に集中できていると感じています。{" "}
          </Description>
          <Description>
            そもそも野菜はそんなに利益率の高い商品ではありません。だからこそ、手数料の負担を、価格に転嫁せざるを得な一面もあります。価値の高い野菜を、できる限りお求めやすい価格で届けるためにも、『Airインボイス』が果たす役割は大きいです。
          </Description>
        </>
      ),
    },
  ]

  // 店舗情報
  const shopInfo: ShopInfoProps = {
    src: ShopImg,
    name: "sanukis",
    description: (
      <>
        <ShopDescription>
          2022年7月にオープン。本店は高松市の中心街にあり、同店は２号店目。味や品質はもちろん、鮮度や取り扱い方、梱包まで、一つ一つこだわり、野菜本来の価値をお客様に届けている。店内には、香川県の野菜だけでなく。地元の食材で作ったお弁当や調味料なども並ぶ。{" "}
        </ShopDescription>
        <Address>香川県高松市林町6-25 Gallery sizucu内</Address>
      </>
    ),
    labels: ["小売", "２店舗", "月50枚の請求書"],
  }

  // AdobeAnalyticsにページビューデータを送信するスクリプトタグを追加
  useAdobeAnalyticsPVReport(PageName.ElectronicBook, undefined, vosQueryParam)

  // 広告プラットフォームにページビューデータを送信するスクリプトタグと、
  // コンバージョン(アプリダウンロード)データを送るための関数を定義するスクリプトタグを追加
  useAdsPVReport()

  return (
    <>
      <GTM />
      <EXJS />
      <SEO title={pageName} description={description} keywords={keywords} pathWithPrefix={pathWithPrefix} />
      <Main>
        <Header
          currentPath="/case/01/"
          loginOnClick={() => {
            sendCustomLink(PageName.Case01, clAction.LookLoginHeader, clOption.Number1)
          }}
          questionOnClick={() => sendCustomLink(PageName.Case01, clAction.Question, clOption.Number1)}
          inquiryOnClick={() => {
            sendCustomLink(PageName.Case01, clAction.LookInquiryHeader)
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
            mainVisual="sanukis"
            cardDescription="請求書の振込みがスマホ一台で完結する便利さ\n手数料も50％以上削減でき、コスパの良さに驚いています"
            storeName="sanukis 鹿庭 大智 様"
            labels={["小売", "２店舗", "月50枚の請求書"]}
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
            pageName={PageName.Case01}
            transitionToCost={() => sendCustomLink(PageName.Case01, clAction.LookCost)}
          />
          <StyledCaseCV
            className="electronic-book-CV"
            CVTitle="Airインボイスを今すぐダウンロード"
            CVTitleSp="Airインボイスを\n今すぐダウンロード"
            CVSubTitle="初めての方でもカンタンにご利用いただけます。"
            CVSubTitleSp="初めての方でもカンタンに\nご利用いただけます。"
            documentRequestButtonOnClick={() => sendCustomLink(PageName.Case01, clAction.DLDocument, clOption.Number2)}
            inquiryButtonOnClick={() => sendCustomLink(PageName.Case01, clAction.LookInquiry, clOption.Number2)}
          />
          <StyledDetailedGuide
            className="detailed-guide"
            downloadDocumentOnClick={() => sendCustomLink(PageName.Case01, clAction.DLDocument)}
            questionOnClick={() => sendCustomLink(PageName.Case01, clAction.Question, clOption.Number2)}
          />
        </Contents>
        <FooterLinks />
      </Main>
    </>
  )
}

export default Case01
