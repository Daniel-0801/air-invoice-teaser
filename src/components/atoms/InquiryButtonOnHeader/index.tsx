import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { BREAK_POINT } from "components/sizes"

const OrangeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 112, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 0px inset;
  border-radius: 6px;
  color: #fff;
  width: 206px;
  height: 58px;
  padding: 14px 16px;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 104px;
    height: 40px;
    margin-left: 0;
  }

  /* @media (max-width: 800px) {
    width: 73%;
  }
  @media (max-width: 700px) {
    width: 71%;
  }
  @media (max-width: 600px) {
    width: 66%;
  }
  @media (max-width: 500px) {
    width: 61%;
  }
  @media (max-width: 400px) {
    width: 49%;
  } */
`

interface InquiryButtonOnHeaderProps {
  readonly className?: string
  readonly path: string
  readonly onClick: () => void
}

export const InquiryButtonOnHeader: React.VFC<InquiryButtonOnHeaderProps> = props => {
  const { className, path } = props

  return (
    <Link className={className} to={path} onClick={props.onClick}>
      <OrangeButton>お問い合わせ</OrangeButton>
    </Link>
  )
}
