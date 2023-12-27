import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT, CONTENTS_MAX_WIDTH_PX } from "components/sizes"

import ArrowImage from "images/electronic-book/prepare/background.svg"
import InfoImage from "images/electronic-book/prepare/info.svg"

const Container = styled.div`
  background-color: ${COLOR.main05};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const ContentSubTitle = styled.p`
  color: ${COLOR.main};
  font-size: 21px;
  font-weight: normal;
  line-height: 32px;
  margin-bottom: 10px;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 19px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  }
`
const ContentTitle = styled.h4`
  color: ${COLOR.main};
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 24px;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 26px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
`

const ContentDiscription = styled.p`
  color: ${COLOR.black87};
  font-size: 16px;
  line-height: 26px;
  max-width: 750px;
  margin-top: 24px;

  span {
    font-weight: bold;
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const ContentImg = styled.img`
  margin-top: 48px;
  max-width: 100%;
  height: auto;
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const Img = styled.img`
  position: absolute;
  top: 99.5%;
  margin: 0 auto;
  height: auto;
`

interface ElectronicBookPrepareProps {
  readonly className?: string
}

export const ElectronicBookPrepare: React.VFC<ElectronicBookPrepareProps> = props => {
  const { className } = props
  const breakpoints = useBreakpoint()
  return (
    <Container className={className}>
      <Contents>
        <ContentSubTitle>「うちは紙で請求書を受け取ることが多いから関係ない」と思ったあなた</ContentSubTitle>
        <ContentTitle>インボイス制度・電帳法で進む請求書の電子化へ備えましょう</ContentTitle>
        <ContentDiscription>
          2023年10月からインボイス制度が開始されます。開始後の請求業務の負担を軽減する手段として注目を集めているのが、
          <span>デジタルインボイス（電子化した適格請求書）</span>です。
        </ContentDiscription>
        <ContentDiscription>
          近年では請求書を電子化するサービスが数多く登場しており、請求書データをメールに添付して送付するタイプや、専用Webページからダウンロードしてもらうタイプなどがあります。
        </ContentDiscription>
        <ContentDiscription>
          <span>
            Airインボイスは電子帳簿保存法の「スキャナ保存制度」と「電子取引情報の保存」に対応しているので、デジタルインボイスが送られてきても安心です。
          </span>
        </ContentDiscription>
        {breakpoints.sp ? (
          <ContentImg
            src={InfoImage}
            width={316}
            height={197}
            alt="イラストイメージ：取引先が「これからは電子取引で請求書を送ります」と言っている様子"
          />
        ) : (
          <ContentImg
            src={InfoImage}
            width={316}
            height={197}
            alt="イラストイメージ：取引先が「これからは電子取引で請求書を送ります」と言っている様子"
          />
        )}
      </Contents>
      <Img src={ArrowImage} width={133} height={42} alt="背景画像" />
    </Container>
  )
}
