import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

export type SectionDescriptionColor = "white" | "black87"

const Description = styled.p<{ color: SectionDescriptionColor }>`
  color: ${props => (props.color === "white" ? COLOR.white : COLOR.black87)};
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`

interface SectionDescriptionProps {
  readonly className?: string
  readonly children: React.ReactNode
  readonly color?: SectionDescriptionColor
}

export const SectionDescription: React.VFC<SectionDescriptionProps> = props => {
  const { className, children, color = "black87" } = props
  return (
    <Description className={className} color={color}>
      {children}
    </Description>
  )
}
