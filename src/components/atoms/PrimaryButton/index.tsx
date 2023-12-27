import * as React from "react"
import styled from "styled-components"

const PrimaryLink = styled.a`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 112, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 0px inset;
  border-radius: 6px;
  color: #fff;
  &:hover {
    opacity: 0.6;
  }
`

interface PrimaryButtonProps {
  readonly className?: string
  readonly onClick: () => void
}

export const PrimaryButton: React.VFC<PrimaryButtonProps> = props => {
  return (
    <PrimaryLink
      className={props.className}
      href="https://airinvoice.jp/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      無料アカウント登録
    </PrimaryLink>
  )
}
