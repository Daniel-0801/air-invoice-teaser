import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { Position } from "components/organisms/ClientVoice"

export type SectionTitleColor = "white" | "blue"

const Title = styled.h2<{ color: SectionTitleColor }>`
  color: ${props => (props.color === "white" ? COLOR.white : COLOR.main)};
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 32px;
  }
`

interface SectionTitleH2Props {
  readonly className?: string
  readonly children: React.ReactNode
  readonly color?: SectionTitleColor
  readonly position?: Position
}

export const SectionTitleH2: React.VFC<SectionTitleH2Props> = props => {
  // デフォルト値として blue を設定
  const { className, children, color = "blue" } = props
  return (
    <Title className={className} color={color}>
      {children}
    </Title>
  )
}
