import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { CONTENTS_MAX_WIDTH_PX, BREAK_POINT } from "components/sizes"

import { RightArrowIcon } from "components/atoms/Icon"
import { IconRectangleButton } from "components/molecules/IconRectangleButton"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Contents = styled.div`
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
  display: flex;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
  }
`

const StyledIconRectangleButton = styled(IconRectangleButton)`
  flex: 1;
`

const ArrowWrapper = styled.div`
  display: flex;
  height: 135px; // IconRectangleButtonのUnderText部分を除いたButton部分のおおよその高さに合わせる
  align-items: center;
  margin: 0 24px;
`

interface LargeStepSummaryProps {
  readonly className?: string
  readonly steps: {
    readonly onClick: () => void
    readonly children: React.ReactNode
    readonly icon: React.ReactElement
    readonly duration?: string
  }[]
}

export const LargeStepSummary: React.VFC<LargeStepSummaryProps> = props => {
  const { className, steps } = props

  return (
    <Container className={className}>
      <Contents>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StyledIconRectangleButton
              className="scroll-button-with-icon"
              onClick={step.onClick}
              icon={step.icon}
              underText={step.duration}
            >
              {step.children}
            </StyledIconRectangleButton>
            {index !== steps.length - 1 && (
              <ArrowWrapper>
                <RightArrowIcon size={18} fill={COLOR.main} />
              </ArrowWrapper>
            )}
          </React.Fragment>
        ))}
      </Contents>
    </Container>
  )
}
