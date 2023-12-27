import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { ClientLabel } from "components/atoms/ClientLabel"

import MainVisual03 from "../../../images/case/arashio/main.jpg"
import MainVisual02 from "../../../images/case/labo-verde/main.jpg"
import MainVisual01 from "../../../images/case/sanukis/main.jpg"
import { replaceNewlineCharacter } from "../CostFreeTrial"

import { CaseInternalKeyVisual, MainVisual } from "."

const Container = styled.div<{ mainVisual: MainVisual }>`
  width: calc(100% - 200px);
  height: auto;
  padding: 530px 0 0 0;
  position: relative;
  margin: 0 auto;

  // 背景画像
  background-repeat: no-repeat;
  background-image: url(${props =>
    props.mainVisual === "sanukis" ? MainVisual01 : props.mainVisual === "labo-verde" ? MainVisual02 : MainVisual03});
  background-position: center top -20px;
  background-size: cover;
  background-color: ${COLOR.white};

  @media (max-width: ${BREAK_POINT.w1024}px) {
    width: calc(100% - 120px);
  }
`

const DescriptionContainer = styled.div`
  position: absolute;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  min-width: calc(100% - 270px);
  padding: 32px;
  margin: 0 auto;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);

  @media (max-width: 770px) {
    right: 10%;
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
    width: calc(100% - 64px);
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 307px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-end;
  }
`

const Caption = styled.p`
  font-size: 32px;
  color: ${COLOR.main};
  margin-bottom: 24px;
  font-weight: 600;
  line-height: 38px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
  }
`

const StoreNameWrap = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 16px;
  color: ${COLOR.black60};
`

const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const StyledClientLabel = styled(ClientLabel)`
  font-size: 11px;
`

type Props = CaseInternalKeyVisual

export const CaseLargeKeyVisual: React.VFC<Props> = props => {
  const { mainVisual, cardDescription, storeName, labels } = props

  return (
    <Container mainVisual={mainVisual}>
      <DescriptionContainer>
        <Caption>{replaceNewlineCharacter(cardDescription)}</Caption>
        <StoreNameWrap>{storeName}</StoreNameWrap>
        <Labels>
          {labels?.map((label, index) => (
            <StyledClientLabel key={index}>{label}</StyledClientLabel>
          ))}
        </Labels>
      </DescriptionContainer>
    </Container>
  )
}
