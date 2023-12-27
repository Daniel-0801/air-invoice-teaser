import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { CONTENTS_MAX_WIDTH_PX, BREAK_POINT } from "components/sizes"

import { BulletListItem } from "components/molecules/BulletListItem"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Contents = styled.div`
  border-radius: 12px;
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
  background-color: ${COLOR.white};
  text-align: center;
  padding: 44px 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 32px 24px;
  }
`

const Title = styled.p`
  color: ${COLOR.main};
  font-size: 24px;
  font-height: 32px;
  font-weight: normal;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 18px;
    font-height: 22px;
    font-weight: bold;
  }
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0px 32px 0px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px 0px 24px 0px;
  }
`

const FunctionLi = styled.li`
  width: 317px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: min(100%, 317px);
  }
`

const FunctionUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 12px;
  }

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (not (translate: none)) {
      > li {
        margin-right: 15px;
        margin-bottom: 15px;

        &:nth-child(2n) {
          margin-right: 0;
        }

        &:nth-last-child(-n + 2) {
          margin-bottom: 0;
        }

        @media (max-width: ${BREAK_POINT.w768}px) {
          margin-right: 0;
          margin-bottom: 12px;

          &:nth-last-child(-n + 2) {
            // reset
            margin-bottom: 12px;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`

const StyledBulletListItem = styled(BulletListItem)`
  align-items: baseline;
`

const FunctionLink = styled.a`
  color: ${COLOR.blueCerulean};
  text-decoration: underline;
  font-size: 16px;
  line-height: 26px;
`

interface FunctionBulletListProps {
  readonly className?: string
}

export const FunctionBulletList: React.VFC<FunctionBulletListProps> = props => {
  const functions = [
    "請求書読み取り・データ化機能",
    "振込予約・自動振込機能",
    "振込アラート機能",
    "会計・税理士事務所へのデータ共有機能",
  ]
  return (
    <Container className={props.className}>
      <Contents>
        <Title>Airインボイスの主な機能</Title>
        <ContentContainer>
          <FunctionUl>
            {functions.map((text, index) => (
              <FunctionLi key={index}>
                <StyledBulletListItem className="bulletList-item" labelText={text} />
              </FunctionLi>
            ))}
          </FunctionUl>
        </ContentContainer>
        <FunctionLink href="https://airregi.jp/invoice/function/">機能紹介を詳しく見る</FunctionLink>
      </Contents>
    </Container>
  )
}
