import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { RightArrowIcon } from "components/atoms/Icon"
import { StepListItem } from "components/atoms/StepListItem"

const Container = styled.div`
  width: 100%;
  display: flex;
`

const RightArrowIconWrapper = styled.div`
  height: 64px; // icon のheightに合わせることで矢印アイコンの位置を調整
  display: flex;
  align-items: center;
`

interface IconStepListProps {
  readonly className?: string
  readonly steps: StepWithIconProps[]
}

export const IconStepList: React.VFC<IconStepListProps> = props => {
  const { className, steps } = props

  return (
    <Container className={className}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <StepWithIcon {...step} />
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

const Step = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledStepListItem = styled(StepListItem)`
  margin-top: 8px;
`

const SubCaption = styled.p`
  font-size: 12px;
  color: ${COLOR.black60};
  margin-top: 8px;
`

interface StepWithIconProps {
  readonly icon: React.ReactNode
  readonly stepNum: number
  readonly text: string
  readonly subText?: string
}

const StepWithIcon: React.VFC<StepWithIconProps> = props => {
  const { icon, stepNum, text, subText } = props

  return (
    <Step>
      {icon}
      <StyledStepListItem className="step-list-item" stepNum={stepNum}>
        {text}
      </StyledStepListItem>
      <SubCaption>{subText}</SubCaption>
    </Step>
  )
}
