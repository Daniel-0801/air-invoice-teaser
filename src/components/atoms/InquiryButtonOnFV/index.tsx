import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

const OrangeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLOR.main};
  background-color: ${COLOR.white};
  box-shadow: ${COLOR.main} 0px -3px 0px inset;
  border-radius: 6px;
  color: ${COLOR.main};
  width: 206px;
  height: 58px;
  margin-left: 24px;
  padding: 26px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 145px;
    height: 54px;
    margin-left: 0;
  }
`

interface InquiryButtonOnFVProps {
  readonly className?: string
  readonly path: string
  readonly onClick: () => void
}

export const InquiryButtonOnFV: React.VFC<InquiryButtonOnFVProps> = props => {
  const { className, path } = props

  return (
    <Link className={className} to={path} onClick={props.onClick}>
      <OrangeButton>お問い合わせ</OrangeButton>
    </Link>
  )
}
