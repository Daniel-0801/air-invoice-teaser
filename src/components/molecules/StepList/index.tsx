import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { StepListItem } from "components/atoms/StepListItem"

const Container = styled.ol``

const StepWrapper = styled.li`
  &:not(:first-child) {
    margin-top: 24px;
  }
`

interface StepListProps {
  readonly className?: string
  readonly steps: StepProps[]
}

export const StepList: React.VFC<StepListProps> = props => {
  const { className, steps } = props

  return (
    <Container className={className}>
      {steps.map((step, index) => (
        <StepWrapper key={index}>
          <Step {...step} />
        </StepWrapper>
      ))}
    </Container>
  )
}

const StepContainer = styled.div``

const SubText = styled.span`
  font-size: 12px;
  color: ${COLOR.black60};
  margin-left: 4px;
`

interface StepProps {
  readonly stepNum: number
  readonly text: string
  readonly subText?: string
}

const Step: React.VFC<StepProps> = props => {
  const { stepNum, text, subText } = props

  return (
    <StepContainer>
      <StepListItem stepNum={stepNum}>{text}</StepListItem>
      {subText && <SubText>{subText}</SubText>}
    </StepContainer>
  )
}
