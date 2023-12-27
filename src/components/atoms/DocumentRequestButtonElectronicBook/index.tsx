import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import ArrowWhiteImage from "images/icon/right-arrow-icon.svg"

const BlueButton = styled.div`
  text-align: center;
  color: ${COLOR.white};
  background: right 16px center / 16px 16px no-repeat;
  background-color: rgb(235, 112, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 0px inset;
  background-image: url(${ArrowWhiteImage});
  border-radius: 6px;
  font-size: 20px;
  width: 400px;
  /* width: min(400px, 100%); */
  padding: 24px 56px;
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

interface DocumentRequestButtonProps {
  readonly className?: string
  readonly path: string
  readonly onClick: () => void
}

export const DocumentRequestButtonElectronicBook: React.VFC<DocumentRequestButtonProps> = props => {
  const { className, path, onClick } = props

  return (
    <Link className={className} to={path} onClick={onClick}>
      <BlueButton>資料ダウンロード</BlueButton>
    </Link>
  )
}
