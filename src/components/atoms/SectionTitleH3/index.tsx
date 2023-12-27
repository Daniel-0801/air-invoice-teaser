import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

export type SectionTitleColor = "white" | "blue"

const Title = styled.h3<{ color: SectionTitleColor }>`
  color: ${props => (props.color === "white" ? COLOR.white : COLOR.main)};
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 32px;
  }
`

interface SectionTitleH3Props {
  readonly className?: string
  readonly children: React.ReactNode
  readonly color?: SectionTitleColor
}

export const SectionTitleH3: React.VFC<SectionTitleH3Props> = props => {
  // デフォルト値として blue を設定
  const { className, children, color = "blue" } = props
  return (
    <Title className={className} color={color}>
      {children}
    </Title>
  )
}
