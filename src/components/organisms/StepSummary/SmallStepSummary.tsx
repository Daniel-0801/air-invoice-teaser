import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { BottomArrowIcon } from "components/atoms/Icon"
import { RectangleButton } from "components/atoms/RectangleButton"

const Container = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  &:first-child {
    margin-top: 0;
  }
`

const Duration = styled.span`
  font-size: 12px;
  color: ${COLOR.black60};
`

const ArrowWrapper = styled.div`
  display: flex;
  height: calc(100% - 24px); // IconScrollButtonのUnderText分を引く
  align-items: center;
  margin-top: 16px;
`

interface SmallStepSummaryProps {
  readonly className?: string
  readonly steps: {
    readonly onClick: () => void
    readonly children: React.ReactNode
    readonly duration?: string
  }[]
}

export const SmallStepSummary: React.VFC<SmallStepSummaryProps> = props => {
  const { className, steps } = props

  return (
    <Container className={className}>
      {steps.map((step, index) => (
        <Wrapper key={index}>
          <RectangleButton onClick={step.onClick}>
            {step.children}
            {step.duration && <Duration>（{step.duration}）</Duration>}
          </RectangleButton>
          {index !== steps.length - 1 && (
            <ArrowWrapper>
              <BottomArrowIcon size={18} fill={COLOR.main} />
            </ArrowWrapper>
          )}
        </Wrapper>
      ))}
    </Container>
  )
}
