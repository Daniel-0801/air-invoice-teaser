import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { createURLWithParameters } from "functions/url"

import SubsidyInvoiceLogo from "images/common/subsidy-package-invoice-logo.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 142px;
  border-radius: 12px;
  background-color: ${COLOR.white};

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 40px 48px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
  }
`

const LogoContainer = styled.div`
  width: 206px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    text-align: center;
  }
`

const InvoiceLogo = styled.img`
  width: 206px;
`

const Text = styled.span`
  color: ${COLOR.black87};
  flex: 1;
  font-size: 14px;
  line-height: 24px;
  margin-left: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-left: 0;
    margin-top: 8px;
    text-align: center;
  }
`

const Link = styled.a`
  color: ${COLOR.blueCerulean};
  text-decoration: underline;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 36px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-left: 0;
    margin-top: 8px;
  }
`

const Br = styled.br`
  display: none;

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
  }
`

interface SubsidyPackageServiceProps {
  readonly className?: string
}

export const SubsidyPackageService: React.VFC<SubsidyPackageServiceProps> = props => {
  const { className } = props

  return (
    <Container className={className}>
      <FlexContainer>
        <LogoContainer>
          <InvoiceLogo src={SubsidyInvoiceLogo} />
        </LogoContainer>
        <Text>
          スマホひとつで支払いもできる
          <Br />
          請求書管理サービス
        </Text>
        <Link href={createURLWithParameters("/invoice/", [])}>サービス詳細はこちら</Link>
      </FlexContainer>
    </Container>
  )
}
