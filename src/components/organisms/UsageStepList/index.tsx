import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT, CONTENTS_MAX_WIDTH_PX } from "components/sizes"

import { Label } from "components/atoms/Label"
import { PageNavigationButton } from "components/atoms/PageNavigationButton"
import { SectionTitleH2 } from "components/atoms/SectionTitleH2"

import { PageName } from "functions/adobeAnalytics/common"
import { createURLWithParameters, Parameter } from "functions/url"

import PaymentImage from "images/top/usage-steps/payment.png"
import ReservationImage from "images/top/usage-steps/reservation.png"
import ShootingImage from "images/top/usage-steps/shooting.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StepList = styled.ol`
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
  display: flex;
  justify-content: center;
  margin-top: 48px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
  }
`

const StyledPageNavigationButton = styled(PageNavigationButton)`
  margin-top: 48px;
`

interface UsageStepListProps {
  readonly className?: string
  readonly pageName: PageName
  readonly navigationButtonOnClick: () => void
}

export const UsageStepList: React.VFC<UsageStepListProps> = props => {
  const { className, pageName, navigationButtonOnClick } = props

  const parameters: Parameter[] = [
    {
      key: "ref",
      value: pageName + "_navbutton",
    },
  ]

  const steps: UsageStepProps[] = [
    {
      stepNumber: 1,
      image: {
        src: ShootingImage,
        alt: "",
        width: 320,
        height: 260,
      },
      caption: "請求書を撮影",
      description: "スマホのカメラで撮影することで請求書が自動でデータ化されます。",
    },
    {
      stepNumber: 2,
      image: {
        src: ReservationImage,
        alt: "",
        width: 320,
        height: 260,
      },
      caption: "請求書をまとめて振込予約",
      description: "振込先が異なっていてもまとめて振込予約ができます。",
    },
    {
      stepNumber: 3,
      image: {
        src: PaymentImage,
        alt: "",
        width: 320,
        height: 260,
      },
      caption: "振込指定日に自動で振り込み",
      description: "入金専用口座に事前入金することで振込指定日に自動で振込されます。振込忘れの心配もありません。",
    },
  ]

  return (
    <Container className={className}>
      <SectionTitleH2>ご利用イメージ</SectionTitleH2>
      <StepList>
        {steps.map(step => (
          <UsageStep key={step.stepNumber} {...step} />
        ))}
      </StepList>
      <StyledPageNavigationButton
        link={createURLWithParameters("/function/", parameters)}
        onClick={navigationButtonOnClick}
      >
        機能紹介をみる
      </StyledPageNavigationButton>
    </Container>
  )
}

const StepContainer = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  :not(:first-child) {
    margin-left: 24px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    :not(:first-child) {
      margin-left: 0;
      margin-top: 48px;
    }
  }
`

const StyledLabel = styled(Label)`
  color: ${COLOR.main};
  border: 2px solid ${COLOR.main35};
`

const ImageContainer = styled.div`
  height: 242px;
  margin-top: 24px;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const Caption = styled.p`
  font-size: 24px;
  color: ${COLOR.black87};
  margin-top: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
  }
`

const Description = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black87};
  margin-top: 16px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 8px;
  }
`

interface UsageStepProps {
  readonly stepNumber: number
  readonly image: {
    src: string
    alt: string
    width: number
    height: number
  }
  caption: string
  description: string
}

const UsageStep: React.VFC<UsageStepProps> = props => {
  const { stepNumber, image, caption, description } = props

  return (
    <StepContainer>
      <StyledLabel>ステップ {stepNumber}</StyledLabel>
      <ImageContainer>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </ImageContainer>
      <Caption>{caption}</Caption>
      <Description>{description}</Description>
    </StepContainer>
  )
}
