import * as React from "react"
import styled from "styled-components"

import { SvgRightArrowIcon } from "components/atoms/Icon/RightArrowIcon"

const FreeRegistrationLink = styled.a`
  display: flex;
  align-items: center;
  width: 214px;
  height: 80px;
  border-radius: 6px;
  padding: 26px 16px;
  margin-top: 24px;
  color: #ffffff;
  background-color: #eb7000;
  box-shadow: inset 0px -3px 0px rgb(0 0 0 / 25%);
  &:hover {
    opacity: 0.6;
  }
`

const SpanText = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`

interface FreeRegistrationButtonProps {
  readonly className?: string
  readonly onClick: () => void
}

export const FreeRegistrationButton: React.VFC<FreeRegistrationButtonProps> = props => {
  return (
    <FreeRegistrationLink
      className={props.className}
      href="https://airinvoice.jp"
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      <SpanText>無料アカウント登録</SpanText>
      <SvgRightArrowIcon size={14} />
    </FreeRegistrationLink>
  )
}
