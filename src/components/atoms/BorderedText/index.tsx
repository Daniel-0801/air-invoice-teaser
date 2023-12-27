import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

export type BorderedTextColor = "black60" | "blue"

const Text = styled.p<{ color: BorderedTextColor }>`
  color: ${props => (props.color === "black60" ? COLOR.black60 : COLOR.main)};
  width: 100%;
  font-size: 14px;
  text-align: center;
  border: solid 1px ${props => (props.color === "black60" ? COLOR.black60 : COLOR.main)};
  border-radius: 4px;
  padding: 8px;
  white-space: pre-wrap;
`

interface BorderedTextProps {
  readonly className?: string
  readonly children: React.ReactNode
  readonly color?: BorderedTextColor
}

export const BorderedText: React.VFC<BorderedTextProps> = props => {
  const { className, children, color = "black60" } = props
  return (
    <Text className={className} color={color}>
      {children}
    </Text>
  )
}
