import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 8px 24px;
  border: 2px solid ${COLOR.main35};
  border-radius: 100px;
`

const LabelText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${COLOR.main};
  margin-left: 12px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 12px;
  }
`

interface LabelWithIconProps {
  readonly labelText: string
  readonly icon: React.ReactNode
}

export const LabelWithIcon: React.VFC<LabelWithIconProps> = props => {
  const { labelText, icon } = props

  return (
    <Container>
      {icon}
      <LabelText>{labelText}</LabelText>
    </Container>
  )
}
