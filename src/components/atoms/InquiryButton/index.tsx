import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

const OrangeButton = styled.div`
  &:hover {
    opacity: 0.6;
  }
`

interface InquiryButtonProps {
  readonly className?: string
  readonly ButtonTitle: string
  readonly path: string
  readonly onClick: () => void
}

export const InquiryButton: React.VFC<InquiryButtonProps> = props => {
  const { className, path, ButtonTitle, onClick } = props

  return (
    <OrangeButton>
      <Link className={className} to={path} onClick={onClick}>
        {ButtonTitle}
      </Link>
    </OrangeButton>
  )
}
