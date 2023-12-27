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

import Article01 from "images/case/labo-verde/article-1-pc.jpg"
import Article02 from "images/case/labo-verde/article-2-pc.jpg"
import Article03 from "images/case/labo-verde/article-3-pc.jpg"
import ShopImg from "images/case/labo-verde/shop-pc.jpg"

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

  const pageName = "導入事例｜labo verde"
  const description =
    "リクルート：Airインボイス】機能をご紹介します。請求書支払いの煩わしさをスマホひとつで解決できます。無料体験期間として最大2か月は0円でお試し可能。振込までの操作はたった3ステップ①請求書を撮影・自動でデータ化②複数の請求書をまとめて振込予約③振込指定日に自動で振込。振込手数料もおトクです。"
  const keywords = "請求書 作成, 請求書 発行, 支払い, 請求書 支払い"

  const freeTrialId = "free-trial"

  const [vosQueryParam] = useQueryParam("vos", StringParam)

  const caseDetails: CaseSectionsProps[] = [
    {
      title: "月に３、４回は車でATMへ行く必要があり、業務に支障が出ていました",
      src: Article01,
      comment: "▲ お菓子をはじめとした料理のクオリティは、お店の生命線なので、特に注力しています",
      descriptions: (
        <>
          <Description>
            「labo
            verde」は兵庫県の中央に位置する西脇市に店を構える、お菓子や軽食のテイクアウト専門店で、地元の方を中心にご利用いただいています。街に洋菓子店や洋食店がないこともあり、特にオーダーメイドのケーキやオードブルは人気です。それ以外にも、当店ではふるさと納税の返礼品も作っていて、食を通じて西脇市の魅力を全国に発信することを目指しています。{" "}
          </Description>
          <Description>
            一方で、ビジネスの性質上、私の負担が大きくなってしまう課題がありました。料理はお客様が私を信頼してオーダーしてくれるため誰かに任せるわけにはいきませんし、経理関係はスモールビジネスのため専門のスタッフを雇うわけにはいきません。
          </Description>
          <Description>
            そこで私一人で全ての業務をこなすようにしていますが、振込み一つとっても一苦労です。そもそも銀行まで車で10分はかかる上に、ATMを使った振込みなどの業務で1時間近くは掛かります。それを月に３、４回はやっていたので、他の業務の支障になることも増えていました。そこで何か便利なサービスがあればと考えていたとき、『Airインボイス』を紹介されました。
          </Description>
        </>
      ),
    },
    {
      title: "ATMに行かなくても、手元のスマホで振込みが完了するメリットは大きいです",
      src: Article02,
      comment: "▲ 請求書が届いたら、スマホで振込登録まで行うので、対応し忘れることがありません",
      descriptions: (
        <>
          <Description>
            『Airインボイス』は月額5,500円かかります。当初、それだけの価値があるのか迷ったのは事実です。それでも最終的に導入を決めたのは、会計をサポートしてくれている税理士までの業務の流れがスムーズになるからです。{" "}
          </Description>
          <Description>
            以前まで、毎月末になると請求書などを税理士に郵送する必要がありました。しかし、当店は繁閑差が激しいビジネスです。例えば、返礼品の時期などはアルバイトの力も借りて、その作製に付きっきりになります。そうなると請求書の処理だけで精一杯で、税理士への郵送業務がとても遅くなっていました。『Airインボイス』なら税理士事務所との共有機能があるので、書類を送らなくても画面上で状況が確認できます。それによって大幅な業務軽減が期待できると思い、導入を決めました。
          </Description>
          <Description>
            結果的に導入は大成功です。月末の請求書の郵送業務がなくなったのはもちろん、スマートフォンで請求書を撮影すれば振込予約までできるのでATMに行く必要もなくなりました。これまで３、４時間はかかっていた業務が数十分で終わるメリットはとても大きいです。
          </Description>
        </>
      ),
    },
    {
      title: "取引履歴がスムーズに振り返りができるので、仕入れの最適化が実現しました",
      src: Article03,
      comment: "▲ 以前にも増して、スタッフとの会話も増えて、お店全体の雰囲気が良くなっています",
      descriptions: (
        <>
          <Description>
            『Airインボイス』は振込手数料が143円で済むことも大きな魅力です。これまでは一件振り込むのに800円近くかかるケースがありました。それが月に７、８件あったので、合計するとかなりの額になります。しかし、今は143円で済むため、5分の1ほどコストの削減に成功しました。{" "}
          </Description>
          <Description>
            また、振込履歴を確認できる機能も便利だと感じています。『Airインボイス』を活用する前までは、どちらかというと漫然と仕入れを行い、ロスを発生させていました。しかし、『Airインボイス』なら、過去の取引が可視化されるため、その数字を見ながらどの取引先からどの程度の仕入れをしていて、どのように価格が推移しているのかなどを確認しています。そういった振り返りをするようになってから、仕入れの無駄が少なくなり、原価の高騰にも柔軟に対応ができるようになりました。{" "}
          </Description>
          <Description>
            振込業務の負担が削減した結果、今後の店作りのビジョンを考える時間も増えています。『Airインボイス』のおかげで、私自身、経営者として成長ができたといっても過言ではありません。
          </Description>
        </>
      ),
    },
  ]

  // 店舗情報
  const shopInfo: ShopInfoProps = {
    src: ShopImg,
    name: "labo verde",
    description: (
      <>
        <ShopDescription>
          2020年１月にオープン。すぐ近くに「ベルデ・ヴェール」という姉妹店があり、喫茶店として35年近くの歴史を持つ。ベルデ・ヴェールがイートイン、labo
          verdeがテイクアウトのニーズに応え、街になくてはならない店として大きな支持を集めている。
        </ShopDescription>
        <Address>兵庫県西脇市黒田庄町船町６１８ー１</Address>
      </>
    ),
    labels: ["小売", "1店舗", "月8枚の請求書"],
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
          currentPath="/case/02/"
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
            mainVisual="labo-verde"
            cardDescription="税理士と情報を共有でき、スムーズな会計業務が実現\n過去の取引の振り返りで、オーナーとしても成長できています"
            storeName="labo verde　松本 恵利 様"
            labels={["小売", "1店舗", "月8枚の請求書"]}
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
