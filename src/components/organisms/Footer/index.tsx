import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { Services } from "components/organisms/Footer/Services"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLOR.grayMercury};
  padding: 64px 20px 160px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 40px 20px 56px;
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: normal;
  color: ${COLOR.main};
  letter-spacing: 3.6px;
  margin: 0;
  br {
    display: none;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 22px;
    br {
      display: block;
    }
  }
`

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${COLOR.grayEmperor};
  letter-spacing: 1.4px;
  margin: 36px auto;
  br {
    display: none;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 12px;
    letter-spacing: 2.2px;
    line-height: 24px;
    margin: 24px auto;
    br {
      display: block;
    }
  }
`

export const Footer: React.VFC = () => {
  return (
    <Container>
      <Title>
        リクルートの
        <br />
        業務・経営支援サービス
      </Title>
      <Description>
        レジ・会計、決済、販促、
        <br />
        予約管理から経営改善まで、
        <br />
        煩わしさを解決する
        <br />
        Airレジ関連サービスをご紹介します。
      </Description>
      <Services />
    </Container>
  )
}
