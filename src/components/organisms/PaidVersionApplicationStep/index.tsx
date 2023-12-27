import * as React from "react"
import styled from "styled-components"

import { BREAK_POINT } from "components/sizes"

import { SectionTitleH4 } from "components/atoms/SectionTitleH4"
import { PaidVersionApplicationStepCardList } from "components/organisms/StepCardList/PaidVersionApplicationStepCardList"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
  }
`

const StyledPaidVersionApplicationStepCardList = styled(PaidVersionApplicationStepCardList)`
  margin-top: 48px;
`

interface PaidVersionApplicationStepProps {
  readonly className?: string
}

export const PaidVersionApplicationStep: React.VFC<PaidVersionApplicationStepProps> = props => {
  return (
    <Container className={props.className}>
      <SectionTitleH4>
        お申込みから
        <Br />
        有料版のご利用開始まで
      </SectionTitleH4>
      <StyledPaidVersionApplicationStepCardList className="paid-version-application-step-card-list" />
    </Container>
  )
}
