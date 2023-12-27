import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SmallCard, SmallCardProps } from "components/organisms/Footer/SmallCard"

const Container = styled.div`
  width: calc((100% - 2 * 10px) / 3); // (100% - gap) / 2
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

// T without key K
type PropsWithout<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

export interface RelatedServiceProps {
  service: PropsWithout<SmallCardProps, "cardColor">
}

export const RelatedService: React.VFC<RelatedServiceProps> = props => {
  const { service } = props

  return (
    <Container>
      <Title>関連サービス</Title>
      <SmallCard
        cardColor="blue"
        link={service.link}
        headline={service.headline}
        logo={service.logo}
        logoWidth={service.logoWidth}
        logoHeight={service.logoHeight}
        logoAlt={service.logoAlt}
      />
    </Container>
  )
}
