import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const Container = styled.div`
  display: inline-block;
  font-size: 12px;
  color: ${COLOR.black60};
  border: 1px solid ${COLOR.black60};
  border-radius: 3px;
  padding: 5px 6px;
`

interface ClientLabelProps {
  className?: string
  children: React.ReactNode
}

export const ClientLabel: React.VFC<ClientLabelProps> = props => {
  const { className, children } = props

  return <Container className={className}>{children}</Container>
}
