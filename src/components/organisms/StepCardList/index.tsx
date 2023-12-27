import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { CONTENTS_MAX_WIDTH_PX } from "components/sizes"

import { StepCard, StepCardProps } from "components/molecules/StepCard"

const Container = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Contents = styled.div`
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
`

const CardWrapper = styled.li``

const Rectangle = styled.div`
  width: 60px;
  height: 24px;
  margin-left: 24px;
  background-color: ${COLOR.blueTropical};
`

interface StepCardListProps {
  className?: string
  stepCards: Omit<StepCardProps, "className">[]
}

export const StepCardList: React.VFC<StepCardListProps> = props => {
  const { className, stepCards } = props

  return (
    <Container className={className}>
      <Contents>
        {stepCards.map((stepCard, index) => (
          <CardWrapper key={index}>
            <StepCard {...stepCard} />
            {index !== stepCards.length - 1 && <Rectangle />}
          </CardWrapper>
        ))}
      </Contents>
    </Container>
  )
}
