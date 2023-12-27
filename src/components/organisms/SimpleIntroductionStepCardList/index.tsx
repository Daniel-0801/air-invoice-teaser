import * as React from "react"
import styled from "styled-components"

import { BREAK_POINT } from "components/sizes"

import { PageNavigationButton } from "components/atoms/PageNavigationButton"
import { SectionDescription } from "components/atoms/SectionDescription"
import { SectionTitleH2 } from "components/atoms/SectionTitleH2"
import { LabeledStepCard } from "components/molecules/LabeledStepCard"

import { PageName } from "functions/adobeAnalytics/common"
import { createURLWithParameters, Parameter } from "functions/url"

import InstallationImage from "images/top/introduction-step/installation.svg"
import UsageStartImage from "images/top/introduction-step/usage-start.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledSectionDescription = styled(SectionDescription)`
  margin-top: 24px;
`

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 48px;
  gap: 24px 40px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
    align-items: center;
  }

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (not (translate: none)) {
      > div {
        &:first-child {
          margin-right: 40px;
          margin-bottom: 0;
        }
        @media (max-width: ${BREAK_POINT.w768}px) {
          &:first-child {
            margin-right: 0;
            margin-bottom: 24px;
          }
        }
      }
    }
  }
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: inline;
  }
`

const StyledLabeledStepCard = styled(LabeledStepCard)`
  width: min(100%, 480px);
`

const PageNavigationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`

interface SimpleIntroductionStepCardListProps {
  readonly className?: string
  readonly pageName: PageName
  readonly transitionToFlow: () => void
}

export const SimpleIntroductionStepCardList: React.VFC<SimpleIntroductionStepCardListProps> = props => {
  const parameters: Parameter[] = [
    {
      key: "ref",
      value: props.pageName + "_navbutton",
    },
  ]

  const flows = [
    {
      stepNumber: 1,
      title: "初期設定",
      description: (
        <>
          お手持ちのiPhoneにAirインボイス アプリをダウンロードします。
          <Br />
          メールアドレスやお店の情報を入力し、AirID（アカウント）の登録をします。登録したAirIDとパスワードでログインします。
        </>
      ),
      notes: ["※既に他のサービスでAirIDをお持ちの場合、登録は不要です。"],
      image: {
        src: InstallationImage,
        alt: "",
        width: 306,
        height: 260,
      },
    },
    {
      stepNumber: 2,
      title: "利用開始",
      description: "これで準備完了です。早速請求書をアップロードして、Airインボイスを利用してみましょう。",
      notes: ["※振込機能をご利用になるにはSBペイメントサービス株式会社へのお申込みが必要です。"],
      image: {
        src: UsageStartImage,
        alt: "",
        width: 306,
        height: 260,
      },
    },
  ]

  return (
    <Container className={props.className}>
      <SectionTitleH2>
        Airインボイスの導入は、
        <Br />
        誰でもカンタン
      </SectionTitleH2>
      <StyledSectionDescription className="section-description">
        AirインボイスはiPhoneがあれば、
        <Br />
        誰でもご利用いただけます。
      </StyledSectionDescription>
      <Contents>
        {flows.map((flow, index) => (
          <StyledLabeledStepCard key={index} className="numbered-step-card" {...flow} />
        ))}
      </Contents>
      <PageNavigationButtonContainer>
        <PageNavigationButton
          className="page-navigation-button"
          link={createURLWithParameters("/flow/", parameters)}
          onClick={props.transitionToFlow}
        >
          導入の流れをみる
        </PageNavigationButton>
      </PageNavigationButtonContainer>
    </Container>
  )
}
