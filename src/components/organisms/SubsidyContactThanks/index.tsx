import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { createURLWithParameters } from "functions/url"

const Container = styled.div`
  text-align: center;
`

const ContactCompleteTitle = styled.h1`
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

interface SubsidyContactThanksProps {
  readonly className?: string
}

export const SubsidyContactThanks: React.VFC<SubsidyContactThanksProps> = ({
  className,
}: SubsidyContactThanksProps) => {
  return (
    <Container className={className}>
      <ContactCompleteTitle>お問い合わせが完了しました</ContactCompleteTitle>
      <ThanksText>
        IT導入補助金を活用してのAirインボイスの導入にご興味をお持ちいただき、ありがとうございます。
        <br />
        担当者から問合せ事項に対して折り返しご返事を差し上げますので、今しばらくお待ちいただければ幸いです。
      </ThanksText>
      <SubsidyLink to={createURLWithParameters("/it-hojo/", [])}>IT導入補助金対応商品トップページに戻る</SubsidyLink>
    </Container>
  )
}
