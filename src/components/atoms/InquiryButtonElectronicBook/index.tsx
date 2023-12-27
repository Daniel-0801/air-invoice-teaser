import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import ArrowBlueImage from "images/icon/arrow-icon-blue.svg"

const OrangeButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${COLOR.main};
  border: 1px solid ${COLOR.main};
  box-shadow: ${COLOR.main} 0px -3px 0px inset;
  background: right 16px center / 16px 16px no-repeat;
  background-image: url(${ArrowBlueImage});
  background-color: ${COLOR.white};
  border-radius: 6px;
  font-size: 20px;
  width: 400px;
  padding: 24px 0px;
  background-size: 10px 20px;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    box-shadow: 0 0;
    transform: translate(0, 1px);
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
    width: 295px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 18px;
    width: min(295px, 100%);
    background-size: 10px 18px;
    margin: 0 auto;
  }
`

interface InquiryButtonProps {
  readonly className?: string
  readonly path: string
  readonly onClick: () => void
}

export const InquiryButtonElectronicBook: React.VFC<InquiryButtonProps> = props => {
  const { className, path, onClick } = props

  return (
    <Link className={className} to={path} onClick={onClick}>
      <OrangeButton>お問い合わせはこちら</OrangeButton>
    </Link>
  )
}
