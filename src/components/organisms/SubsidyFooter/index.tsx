import React from "react"
import styled from "styled-components"

import { RecruitLogo } from "images/recruit-logo"

const FooterContainer = styled.div`
  padding: 20px 38px;
  height: 66px;
  width: 100%;
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
`
interface SubsidyFooterProps {
  readonly className?: string
}

export const SubsidyFooter: React.VFC<SubsidyFooterProps> = ({ className }: SubsidyFooterProps) => {
  return (
    <FooterContainer className={className}>
      <RecruitLogo />
    </FooterContainer>
  )
}
