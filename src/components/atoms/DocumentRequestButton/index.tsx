import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const OrangeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 112, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 0px inset;
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
  &:hover {
    opacity: 0.6;
  }
`

export interface DocumentRequestButtonProps {
  readonly className?: string
  readonly path: string
  readonly ButtonTitle: string
  readonly onClick: () => void
}

export const DocumentRequestButton: React.VFC<DocumentRequestButtonProps> = props => {
  const { className, path, ButtonTitle, onClick } = props

  return (
    <OrangeButton>
      <Link className={className} to={path} onClick={onClick}>
        {ButtonTitle}
      </Link>
    </OrangeButton>
  )
}
