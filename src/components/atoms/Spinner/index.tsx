import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const Indicator = styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 3px solid;
  border-color: ${COLOR.main02} ${COLOR.main02} ${COLOR.main02} ${COLOR.main};
  border-radius: 50%;
  animation: rotation 0.4s linear 0s infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

interface SpinnerProps {
  readonly size?: number
}

export const Spinner: React.VFC<SpinnerProps> = props => {
  const { size = 60 } = props

  return <Indicator size={size} />
}
