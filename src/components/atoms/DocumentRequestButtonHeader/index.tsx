import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { DocumentRequestButtonProps } from "../DocumentRequestButton"

const OrangeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.white};
  border-radius: 6px;
  color: ${COLOR.main};
  height: 40px;
  font-size: 12px;
  &:hover {
    opacity: 0.6;
  }
`

export const DocumentRequestButtonHeader: React.VFC<DocumentRequestButtonProps> = props => {
  const { className, path, ButtonTitle, onClick } = props

  return (
    <OrangeButton>
      <Link className={className} to={path} onClick={onClick}>
        {ButtonTitle}
      </Link>
    </OrangeButton>
  )
}
