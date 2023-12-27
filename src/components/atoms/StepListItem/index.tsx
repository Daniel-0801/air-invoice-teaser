import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const Label = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  color: ${props => props.color};
  font-size: 14px;
  font-weight: bold;
`

const Number = styled.span<{ color: string }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
  border: 1px solid ${props => props.color};
  border-radius: 50%;
`

const Text = styled.span`
  margin-left: 8px;
`

interface StepListItemProps {
  readonly className?: string
  readonly stepNum: number
  readonly children: React.ReactNode
  readonly color?: string
}

export const StepListItem: React.VFC<StepListItemProps> = props => {
  const { className, stepNum, children, color = COLOR.main } = props

  return (
    <Label className={className} color={color}>
      <Number color={color}>{stepNum}</Number>
      <Text>{children}</Text>
    </Label>
  )
}
