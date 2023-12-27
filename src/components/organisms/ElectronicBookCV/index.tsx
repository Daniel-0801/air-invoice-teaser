import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { DocumentRequestButtonElectronicBook } from "components/atoms/DocumentRequestButtonElectronicBook"
import { InquiryButtonElectronicBook } from "components/atoms/InquiryButtonElectronicBook"

import { createURLWithParametersOnFV } from "functions/url"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLOR.main};
`

const Contents = styled.div`
  padding: 68px 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 24px;
  }
`

const Appeal = styled.div`
  color: ${COLOR.white};
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
  margin-bottom: 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
  }
`

const ConversionWrap = styled.div`
  background-color: ${COLOR.white};
  border-radius: 12px;

  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

export type Kind = "upper" | "under"

interface ElectronicBookCVProps {
  readonly className?: string
  readonly kind?: Kind
  readonly documentRequestButtonOnClick: () => void
  readonly inquiryButtonOnClick: () => void
}

export const ElectronicBookCV: React.VFC<ElectronicBookCVProps> = props => {
  return (
    <Container>
      <Contents>
        <Appeal>電子帳簿保存法対応は早めの検討を</Appeal>
        <ConversionWrap>
          <ElectronicBookConversion {...props} />
        </ConversionWrap>
      </Contents>
    </Container>
  )
}

const ConversionContainer = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px 64px;
  border-radius: 6px;
  justify-content: center;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
    padding: 20px;
  }
`

const ButtonContainer = styled.div`
  &:first-child {
    @media (max-width: ${BREAK_POINT.w768}px) {
      margin-bottom: 16px;
    }
  }
`

const ButtonText = styled.p`
  text-align: center;
  color: ${COLOR.black60};
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 12px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 14px;
  }
`

const StyledInquiryButtonElectronicBook = styled(InquiryButtonElectronicBook)`
  line-height: 26px;
  margin-bottom: 12px;

  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const StyledDocumentRequestButtonElectronicBook = styled(DocumentRequestButtonElectronicBook)`
  line-height: 26px;
  margin-bottom: 12px;
`

export const ElectronicBookConversion: React.VFC<ElectronicBookCVProps> = props => {
  return (
    <ConversionContainer>
      <ButtonContainer>
        <ButtonText>詳しい資料をプレゼント！</ButtonText>
        <StyledDocumentRequestButtonElectronicBook
          className="document-request-button"
          path={createURLWithParametersOnFV("/document_request/")}
          onClick={props.documentRequestButtonOnClick}
        />
      </ButtonContainer>
      <ButtonContainer>
        <ButtonText>詳しく教えて欲しい！</ButtonText>
        <StyledInquiryButtonElectronicBook
          className="primary-button"
          path={createURLWithParametersOnFV("/inquiry/")}
          onClick={props.inquiryButtonOnClick}
        />
      </ButtonContainer>
    </ConversionContainer>
  )
}
