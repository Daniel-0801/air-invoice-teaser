import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const Container = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  color: ${COLOR.black60};
  background-color: ${COLOR.white};
  border: 2px solid ${COLOR.blueLinkWater};
  border-radius: 100px;
  padding: 8px 24px;
`

interface LabelProps {
  className?: string
  children: React.ReactNode
}

export const Label: React.VFC<LabelProps> = props => {
  const { className, children } = props

  return <Container className={className}>{children}</Container>
}
