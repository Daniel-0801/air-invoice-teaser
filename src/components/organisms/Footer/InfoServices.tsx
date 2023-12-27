import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SmallCard, SmallCardProps } from "components/organisms/Footer/SmallCard"

const Container = styled.div`
  width: calc((100%) / 3 * 2); // カード2枚分
  display: flex;
  flex-direction: column;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: min(100%, 360px);
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLOR.grayEmperor};
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-align: center;
  margin: 16px auto;

  &::before,
  &::after {
    border-top: 1px solid;
    content: "";
    flex-grow: 1;
  }

  &::before {
    margin-right: 16px;
  }

  &::after {
    margin-left: 16px;
  }
`

const Cards = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
  }

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (not (translate: none)) {
      > div {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }

        @media (max-width: ${BREAK_POINT.w768}px) {
          margin-right: 0;
          margin-bottom: 10px;

          &:nth-child(2) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`

const CardWrapper = styled.div`
  width: 50%;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
  }
`

// T without key K
type PropsWithout<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

export interface InfoServicesProps {
  services: PropsWithout<SmallCardProps, "cardColor">[]
}

export const InfoServices: React.VFC<InfoServicesProps> = props => {
  const { services } = props

  return (
    <Container>
      <Title>お店に役立つ情報サイト</Title>
      <Cards>
        {services.map((smallCardProps, index) => (
          <CardWrapper key={index}>
            <SmallCard cardColor="white" {...smallCardProps} />
          </CardWrapper>
        ))}
      </Cards>
    </Container>
  )
}
