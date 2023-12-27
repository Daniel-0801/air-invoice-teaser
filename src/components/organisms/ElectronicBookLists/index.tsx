import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { ExternalLink } from "components/atoms/ExternalLink"

import ArrowImage from "images/electronic-book/points/arrow.svg"
import Point3Img from "images/electronic-book/points/file-name.svg"
import Label1 from "images/electronic-book/points/label1.svg"
import Label2 from "images/electronic-book/points/label2.svg"
import Label3 from "images/electronic-book/points/label3.svg"
import Point1Img from "images/electronic-book/points/save-data.svg"
import Point4Img from "images/electronic-book/points/save-in-folder.svg"
import Point2Img from "images/electronic-book/points/save-problem.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const SectionSubtitle = styled.h3`
  color: ${COLOR.main};
  font-size: 28px;
  line-height: 36px;
  font-weight: bold;
  position: relative;
  text-align: center;
  &:after {
    content: "";
    position: absolute;
    right: -20px;
    top: -10px;
    width: 2px;
    background-color: ${COLOR.main};
    height: 48px;
    rotate: 15deg;
    border-radius: 5px;
  }
  &:before {
    content: "";
    position: absolute;
    left: -20px;
    top: -10px;
    width: 2px;
    background-color: ${COLOR.main};
    height: 48px;
    rotate: -15deg;
    border-radius: 5px;
  }
  @media (max-width: ${BREAK_POINT.w1024}px) {
    &:after {
      top: 0;
      right: 5%;
    }
    &:before {
      top: 0;
      left: 5%;
    }
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 32px;
    &:after {
      right: -20%;
    }
    &:before {
      left: -20%;
    }
  }
`

const List = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
  }
`

const Br = styled.br`
  display: block;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: none;
  }
`

const BrSp = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
  }
`

interface ElectronicBookListsProps {
  readonly className?: string
  readonly questionOnClick: () => void
}

export const ElectronicBookLists: React.VFC<ElectronicBookListsProps> = props => {
  const { className } = props

  const breakpoint = useBreakpoint()

  const listCards = [
    {
      title: "電子取引（メール等）で請求書を受け取った場合は電子保存が義務化に※",
      label: Label1,
      altTag: "01",
      children: <MandatoryContent />,
      note: "※ 2023年度の税制改正大綱では、システム対応ができない相当の理由があると認められた場合、電子取引記録のデータ保存開始に猶予が与えられました",
    },
    {
      title: "紙で受け取った請求書も「電子データで保存」がおすすめ",
      label: Label2,
      altTag: "02",
      children: <RecommendContent />,
    },
    {
      title: "請求書を検索できる状態にする必要あり",
      label: Label3,
      altTag: "03",
      children: <NecessaryContent />,
      note: "※この管理方法以外にも、ファイルと内容が紐づいて整然と保管されていれば、要件を満たすことができ、問題はありません。",
    },
  ]

  const FAQ = styled.div`
    font-size: 14px;
    color: ${COLOR.black87};
    text-align: center;
    @media (max-width: ${BREAK_POINT.w768}px) {
      text-align: left;
    }
  `
  const StyledExternalLink = styled(ExternalLink)`
    color: ${COLOR.main};
    text-decoration: underline;
  `

  const ListCardItem = styled.div`
    position: relative;
    padding: 44px 75px 40px 75px;
    margin-bottom: 48px;
    background-color: ${COLOR.white};

    @media (max-width: ${BREAK_POINT.w768}px) {
      padding: 32px 20px 32px 20px;
    }
  `

  const ListCardTitle = styled.h4`
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 28px;
    color: ${COLOR.main};
    @media (max-width: ${BREAK_POINT.w768}px) {
      padding-left: 20px;
    }
  `

  const BackgroundImg = styled.img`
    position: absolute;
    top: 99.5%;
    margin: 0 auto;
    height: auto;
  `

  return (
    <Container className={className}>
      {breakpoint.sp ? (
        <SectionSubtitle>
          電子帳簿保存法改正の
          <BrSp />
          3つのポイント
        </SectionSubtitle>
      ) : (
        <SectionSubtitle>電子帳簿保存法改正の3つのポイント</SectionSubtitle>
      )}
      <List>
        {listCards.map((listCard, index) => (
          <ListCardItem key={index}>
            <LabelImg
              src={listCard.label}
              width={breakpoint.sp ? 52 : 100}
              height={breakpoint.sp ? 38 : 54}
              alt={listCard.altTag}
            />
            <ListCardTitle>{listCard.title}</ListCardTitle>
            {listCard.children}
          </ListCardItem>
        ))}
      </List>
      <FAQ>
        ※詳細については、
        <StyledExternalLink
          className="external-link"
          link={"https://faq.airinvoice.jp/hc/ja/articles/21357273204505"}
          onClick={props.questionOnClick}
        >
          FAQの電帳法ページ
        </StyledExternalLink>
        をご確認ください。
      </FAQ>
      <BackgroundImg src={ArrowImage} width={133} height={42} alt="背景画像" />
    </Container>
  )
}

// 各コンテンツの子要素

const Text = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 16px;
  color: ${COLOR.black87};
  white-space: pre-wrap;
`

const TextBold = styled.span`
  font-weight: 600;
`

const ImageWrap = styled.div`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 24px;
`

const ImageSecondWrap = styled.div`
  text-align: center;
  margin-top: 42px;
`

const Img = styled.img`
  &:nth-child(2) {
    margin-top: 10px;
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: 350px;
    margin: 0 auto;
    width: 100%;
    display: block;
  }
`

const LabelImg = styled.img`
  position: absolute;
  left: -4%;
  top: 5%;
  @media (max-width: ${BREAK_POINT.w768}px) {
    top: 4%;
  }
  @media (max-width: ${BREAK_POINT.w769}px) {
    left: -2%;
  }
  @media (max-width: 390px) {
    left: -4%;
  }
`

const ComtentNote = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 16px;
  }
`

const MethodTitle = styled.p`
  text-align: center;
  color: ${COLOR.main};
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 32px;
`

const MethodWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
  }
`

const MandatoryContent: React.VFC = () => {
  return (
    <>
      <Text>
        これまでは受け取った請求書が紙・電子データで混在していても、電子データを紙に出力して「紙で一元管理」することが可能でした。
      </Text>
      <Text>
        しかし、
        <TextBold>
          2024年以降は電子データを紙へ出力して紙だけで保存することができず、電子データでの保存が必須となります。
          <Br />
          <BrSp />
          請求書をデータで受け取った場合はデータ保存が必須となり、紙に印刷して保存ができません。
        </TextBold>
        ※
      </Text>
      <ImageWrap>
        <Img
          src={Point1Img}
          width="454"
          height="329"
          alt="イラストイメージ：買い手事業者が請求書をデータで受け取った場合の保存方法。紙での保存はできなくなり、データでの保存が必須となる。対象データは、メール添付のPDFやダウンロード形式の請求書など"
        />
      </ImageWrap>
      <ComtentNote>
        ※2023年度の税制改正大綱では、システム対応ができない相当の理由があると認められた場合、電子取引記録のデータ保存開始に猶予が与えられました
      </ComtentNote>
    </>
  )
}

const RecommendContent: React.VFC = () => {
  return (
    <>
      <Text>
        受け取る請求書が紙と電子データで混在している場合、
        <TextBold>
          電子データで一元管理しなければ「紙で保存」「電子データで保存」の二重管理が発生し、業務負荷が高まる
        </TextBold>
        ことが想定されます。
      </Text>
      <ImageSecondWrap>
        <Img
          src={Point2Img}
          width="388"
          height="258"
          alt="イラストイメージ：紙での保存と、電子保存の二重管理に困っている様子"
        />
      </ImageSecondWrap>
    </>
  )
}

const NecessaryContent: React.VFC = () => {
  return (
    <>
      <Text>
        <TextBold>
          電子データ保存した請求書は「取引年月日」「取引先」「取引金額」で検索できる状態にしておく必要があります。
        </TextBold>
      </Text>
      <Text>
        専用ソフトウェアに頼らずとも、取引先や月ごとにフォルダを分けて管理することで要件を満たすことは可能ですが、業務負荷が高まることが想定されます。
      </Text>
      <MethodTitle>要件を満たすファイル管理方法※</MethodTitle>
      <MethodWrap>
        <Img
          src={Point3Img}
          width="327"
          height="295"
          alt="イラストイメージ：ルール1：規則性のあるファイル名をつける。取引年月日、取引先、取引金額がわかるようにファイルを命名。例として、2023年10月31日にA社に1,100,000円を請求された場合にはファイル名は「20231031_A_1,100,000」と命名"
        />
        <Img
          src={Point4Img}
          width="327"
          height="291"
          alt="ルール2：フォルダに保存する。取引先ごとや月ごとでフォルダを分ける。例として、取引先ごとであればA社B社C社とフォルダ分け、月ごとであれば10月11月12月とフォルダ分けする"
        />
      </MethodWrap>
      <ComtentNote>
        ※この管理方法以外にも、ファイルと内容が紐づいて整然と保管されていれば、要件を満たすことができ、問題はありません。
      </ComtentNote>
    </>
  )
}
