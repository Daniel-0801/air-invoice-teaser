import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { DocumentRequestButton } from "components/atoms/DocumentRequestButton"
import { InquiryButton } from "components/atoms/InquiryButton"

import { createURLWithParametersOnFV } from "functions/url"

import ArrowBlueImage from "images/icon/arrow-icon-blue.svg"
import ArrowWhiteImage from "images/icon/right-arrow-icon.svg"

import { replaceNewlineCharacter } from "../CostFreeTrial"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLOR.main};
`

const Title = styled.div`
  color: ${COLOR.white};
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 32px;
  }
`

const SubTitle = styled.div`
  color: ${COLOR.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 44px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 26px;
    margin-bottom: 24px;
  }
`

const ConversionWrap = styled.div`
  background-color: ${COLOR.white};
  border-radius: 12px;

  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

interface CaseCVProps {
  readonly className?: string
  readonly CVTitle: string
  readonly CVTitleSp: string
  readonly CVSubTitle?: string
  readonly CVSubTitleSp: string
  readonly documentRequestButtonOnClick: () => void
  readonly inquiryButtonOnClick: () => void
}

export const CaseCV: React.VFC<CaseCVProps> = props => {
  const { className, CVTitle, CVSubTitle, CVTitleSp, CVSubTitleSp } = props

  const breakpoints = useBreakpoint()

  return (
    <Container className={className}>
      <Title>{breakpoints.sp ? replaceNewlineCharacter(CVTitleSp) : CVTitle}</Title>
      <SubTitle>{breakpoints.sp ? replaceNewlineCharacter(CVSubTitleSp) : CVSubTitle}</SubTitle>
      <ConversionWrap>
        <ElectronicBookConversion {...props} />
      </ConversionWrap>
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

const StyledInquiryButton = styled(InquiryButton)`
  line-height: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${COLOR.main};
  background: right 16px center / 16px 16px no-repeat;
  background-color: ${COLOR.white};
  background-image: url(${ArrowBlueImage});
  border: 1px solid ${COLOR.main};
  border-radius: 6px;
  text-decoration: none;
  box-shadow: 0px -3px 0px 0px ${COLOR.main} inset;
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
    margin-left: 0;
  }
`

const StyledDocumentRequestButton = styled(DocumentRequestButton)`
  line-height: 26px;
  text-align: center;
  color: ${COLOR.white};
  background: right 16px center / 16px 16px no-repeat;
  background-color: rgb(235, 112, 0);
  background-image: url(${ArrowWhiteImage});
  border: none;
  border-radius: 6px;
  text-decoration: none;
  box-shadow: 0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset;
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
    background-size: 10px 18px;
    margin: 0 auto;
  }
`

export const ElectronicBookConversion: React.VFC<CaseCVProps> = props => {
  return (
    <ConversionContainer>
      <ButtonContainer>
        <ButtonText>詳しい資料をプレゼント！</ButtonText>
        <StyledDocumentRequestButton
          className="document-request-button"
          ButtonTitle="資料ダウンロード"
          path={createURLWithParametersOnFV("/document_request/")}
          onClick={props.documentRequestButtonOnClick}
        />
      </ButtonContainer>
      <ButtonContainer>
        <ButtonText>詳しく教えて欲しい！</ButtonText>
        <StyledInquiryButton
          className="primary-button"
          ButtonTitle="お問い合わせはこちら"
          path={createURLWithParametersOnFV("/inquiry/")}
          onClick={props.inquiryButtonOnClick}
        />
      </ButtonContainer>
    </ConversionContainer>
  )
}
