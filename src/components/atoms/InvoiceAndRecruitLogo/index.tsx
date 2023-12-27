import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import LogoImage from "images/header/invoice-and-recruit-logo.svg"

const Logo = styled.img`
  max-width: 100%;
  height: auto;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

interface InvoiceAndRecruitLogoProps {
  readonly className?: string
  readonly path: string
  readonly width: number
  readonly height: number
}

export const InvoiceAndRecruitLogo: React.VFC<InvoiceAndRecruitLogoProps> = props => {
  const { className, path, width, height } = props

  return (
    <Link className={className} to={path}>
      <Logo src={LogoImage} width={width} height={height} alt="Airインボイスロゴ" />
    </Link>
  )
}
