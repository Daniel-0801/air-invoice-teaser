import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const LoginLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLOR.black87};
  &:hover {
    opacity: 0.6;
  }
`

interface PrimaryButtonProps {
  readonly className?: string
  readonly onClick: () => void
}

export const LoginButton: React.VFC<PrimaryButtonProps> = props => {
  return (
    <LoginLink
      className={props.className}
      href="https://airinvoice.jp/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      ログイン
    </LoginLink>
  )
}
