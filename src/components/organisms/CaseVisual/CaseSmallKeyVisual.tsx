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
  width: 100%;
  padding: 330px 0 0 0;
  position: relative;

  // 背景画像
  background-repeat: no-repeat;
  background-image: url(${props =>
    props.mainVisual === "sanukis" ? MainVisual01 : props.mainVisual === "labo-verde" ? MainVisual02 : MainVisual03});
  background-position: center;
  background-size: cover;
  background-color: #c3bca2;
`

const DescriptionContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  margin-top: 100px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 414px) {
    /* min-width: 250px; */
  }
`

const Caption = styled.p`
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
    line-height: 32px;
    color: ${COLOR.main};
    margin-bottom: 24px;
    font-weight: 600;
  }
`

const StoreNameWrap = styled.p`
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${COLOR.black60};
  }
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

export const CaseSmallKeyVisual: React.VFC<Props> = props => {
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
