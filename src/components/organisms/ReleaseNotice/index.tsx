import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { AlertIcon } from "components/atoms/Icon"

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: min(712px, 100%);
  padding: 24px;
  border: 2px solid ${COLOR.main};
  box-sizing: border-box;
  border-radius: 8px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
    padding: 32px 20px;
    flex-direction: column;
  }
`

const Contents = styled.div`
  margin-left: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 0px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 16px;
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.p`
  color: ${COLOR.main};
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`

const ReleaseTiming = styled.p`
  margin-left: 4px;
  color: ${COLOR.black60};
  font-size: 12px;
  line-height: 16px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-left: 0;
    margin-top: 8px;
  }
`

const Description = styled.p`
  margin-top: 12px;
  color: ${COLOR.black60};
  font-size: 14px;
  line-height: 16px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 16px;
    font-size: 14px;
    line-height: 24px;
  }
`

interface ReleaseNoticeProps {
  readonly className?: string
}

export const ReleaseNotice: React.VFC<ReleaseNoticeProps> = props => {
  return (
    <Container className={props.className}>
      <Frame>
        <AlertIcon size={48} fill={COLOR.main} />
        <Contents>
          <TitleContainer>
            <Title>インボイス制度対応予定</Title>
            <ReleaseTiming>（随時対応予定）</ReleaseTiming>
          </TitleContainer>
          <Description>
            適格請求書の作成・発行・管理業務など、インボイス制度に対応した機能をリリースします。
          </Description>
        </Contents>
      </Frame>
    </Container>
  )
}
