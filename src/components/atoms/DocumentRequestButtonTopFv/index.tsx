import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { BREAK_POINT } from "components/sizes"

const BlueButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 112, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 0px inset;
  border-radius: 6px;
  color: #fff;
  width: 206px;
  height: 58px;
  padding: 26px 0;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 178px;
    height: 54px;
  }
`

interface DocumentRequestButtonTopFvProps {
  readonly className?: string
  readonly path: string
  readonly onClick: () => void
}

export const DocumentRequestButtonTopFv: React.VFC<DocumentRequestButtonTopFvProps> = props => {
  const { className, path } = props

  return (
    <Link className={className} to={path} onClick={props.onClick}>
      <BlueButton>資料ダウンロード</BlueButton>
    </Link>
  )
}
