import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { RightArrowIcon } from "components/atoms/Icon"
import { StepListItem } from "components/atoms/StepListItem"

const Container = styled.div`
  display: flex;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
  }
`

const StepContainer = styled.div`
  flex: 1;
  display: grid;
  column-gap: 14px;
  justify-items: center;
  margin-bottom: auto;
  grid-template-rows: 90px 44px 1fr;
  grid-template-areas:
    "iconArea"
    "textArea"
    "subTextArea";

  @media (max-width: ${BREAK_POINT.w768}px) {
    justify-items: left;
    align-items: center;
    grid-template-columns: 1fr auto;
    grid-template-rows: none;
    grid-template-areas:
      "textArea iconArea"
      "subTextArea iconArea";

    :not(:first-child) {
      margin-top: 24px;
    }
  }
`

const IconContainer = styled.div`
  grid-area: iconArea;
`

const StyledStepListItem = styled(StepListItem)`
  grid-area: textArea;

  @media (min-width: ${BREAK_POINT.w769}px) {
    margin-bottom: auto;
  }
`

const SubCaption = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${COLOR.black87};
  grid-area: subTextArea;

  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 18px;
    margin-top: 8px;
  }
`

const RightArrowIconWrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: none;
  }
`

interface StepWithIconProps {
  readonly children: React.ReactNode
  readonly stepNum: number
  readonly text: string
  readonly subText?: string
}

interface SubsidyIconStepListProps {
  readonly className?: string
  readonly steps: StepWithIconProps[]
}

export const SubsidyIconStepList: React.VFC<SubsidyIconStepListProps> = props => {
  const { className, steps } = props

  return (
    <Container className={className}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <StepContainer>
            <IconContainer>{step.children}</IconContainer>
            <StyledStepListItem stepNum={step.stepNum}>{step.text}</StyledStepListItem>
            <SubCaption>{step.subText}</SubCaption>
          </StepContainer>
          {index !== steps.length - 1 && (
            <RightArrowIconWrapper>
              <RightArrowIcon size={18} fill={COLOR.main} />
            </RightArrowIconWrapper>
          )}
        </React.Fragment>
      ))}
    </Container>
  )
}
