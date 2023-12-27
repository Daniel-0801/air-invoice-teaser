import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { createURLWithParameters } from "functions/url"

const Container = styled.div`
  text-align: center;
`

const EntryCompleteTitle = styled.h1`
  font-size: 36px;
  line-height: 40px;
  color: ${COLOR.main};
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 335px;
    margin: 0 auto;
    font-size: 32px;
    line-height: 36px;
  }
`

const ThanksText = styled.p`
  margin: 48px 0 0;
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.black60};
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 335px;
    margin: 48px auto 0;
  }
`

const SubsidyLink = styled(Link)`
  margin-top: 48px;
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  text-decoration-line: underline;
  color: ${COLOR.main};
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: inline;
  }
`

interface SubsidyEntryThanksProps {
  readonly className?: string
}

export const InquiryThanks: React.VFC<SubsidyEntryThanksProps> = ({ className }: SubsidyEntryThanksProps) => {
  return (
    <Container className={className}>
      <EntryCompleteTitle>
        お問い合わせ
        <Br />
        ありがとうございます
      </EntryCompleteTitle>
      <ThanksText>
        内容を確認させていただき、後ほどメールまたは電話にてご連絡差し上げます。
        <br />
        また、ご入力いただいたメールアドレス宛てに「受付完了メール」をお送りしております。
        <br />
        今後ともAirインボイスをどうぞよろしくお願いいたします。
      </ThanksText>
      <SubsidyLink to={createURLWithParameters("/", [])}>Airインボイストップページに戻る</SubsidyLink>
    </Container>
  )
}
