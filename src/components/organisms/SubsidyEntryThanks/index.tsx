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

interface SubsidyEntryThanksProps {
  readonly className?: string
}

export const SubsidyEntryThanks: React.VFC<SubsidyEntryThanksProps> = ({ className }: SubsidyEntryThanksProps) => {
  return (
    <Container className={className}>
      <EntryCompleteTitle>商品のお申込みが完了しました</EntryCompleteTitle>
      <ThanksText>
        お申込みありがとうございます。
        <br />
        まずは補助金交付申請のサポート担当者から交付申請に関するお願い事項のご連絡を差し上げますので、今しばらくお待ちいただければ幸いです。
      </ThanksText>
      <SubsidyLink to={createURLWithParameters("/", [])}>Airインボイストップページに戻る</SubsidyLink>
    </Container>
  )
}
