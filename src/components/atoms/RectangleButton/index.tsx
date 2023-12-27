import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const Button = styled.button`
  width: 100%;
  font-size: 14px;
  color: ${COLOR.main};
  border: 1px solid ${COLOR.main};
  border-radius: 4px;
  box-shadow: inset 0px -2px 0px ${COLOR.main};
  padding: 12px 24px;
  text-align: center;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    box-shadow: 0 0;
    transform: translate(0, 2px);
  }
`

interface RectangleButtonProps {
  readonly className?: string
  readonly onClick: () => void
  readonly children: React.ReactNode
}

export const RectangleButton: React.VFC<RectangleButtonProps> = props => {
  const { className, onClick, children } = props

  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  )
}
