import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SectionTitleH1 } from "components/atoms/SectionTitleH1"

import KeyVisualImage from "images/electronic-book/key-visual/key-visual_pc.png"

import { ElectronicBookKeyVisualProps } from "./type"

const Container = styled.div`
  width: 100%;
  padding: 82px 0 0 0;

  // 背景画像
  background-repeat: no-repeat;
  background-image: url(${KeyVisualImage});
  background-position: center top -20px;
  background-size: cover;
  background-color: ${COLOR.main05};
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
`

const StyledTitle = styled(SectionTitleH1)`
  color: ${COLOR.white};
  white-space: pre-wrap;
  text-align: left;
  font-weight: 600;
  font-size: 40px;
  line-height: 46px;
  letter-spacing: 2px;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 34px;
  }
`

const Line = styled.hr`
  display: block;
  width: 65px;
  border-top-width: 4px;
  color: ${COLOR.white};
  margin-top: 28px;
  margin-bottom: 30px;
  margin-left: 5px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 90%;
    margin-top: 24px;
  }
`

const Detail = styled.div`
  margin-bottom: 44px;
`

const StyledNotes = styled.p`
  color: ${COLOR.white};
  font-size: 12px;
  white-space: pre-wrap;
  margin-bottom: 54px;
  p {
    line-height: 14px;
  }
`

const FirstLabel = styled.div`
  color: #fff;
  font-weight: 600;
  line-height: 28px;
  font-size: 18px;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 16px;
  }
`

const SecondLabel = styled.div`
  position: relative;
  color: #fff;
  font-weight: 600;
  line-height: 28px;
  font-size: 18px;

  &::after {
    content: "";
    width: 47%;
    height: 8px;
    background: linear-gradient(
      rgba(244, 251, 254, 0.3) 70%,
      rgba(244, 251, 254, 0.3) 70%,
      rgba(244, 251, 254, 0.3) 100%,
      rgba(244, 251, 254, 0.3) 100%
    );
    position: absolute;
    bottom: 5px;
    left: 0;
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 16px;
  }
`

const ThirdLabel = styled.div`
  position: relative;
  color: #fff;
  font-weight: 600;
  line-height: 28px;
  font-size: 18px;

  &::after {
    content: "";
    width: 45%;
    height: 8px;
    background: linear-gradient(
      rgba(244, 251, 254, 0.3) 70%,
      rgba(244, 251, 254, 0.3) 70%,
      rgba(244, 251, 254, 0.3) 100%,
      rgba(244, 251, 254, 0.3) 100%
    );
    position: absolute;
    bottom: 5px;
    left: 0;
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 16px;
  }
`

export interface ElectronicBookLargeKeyVisualProps {
  readonly className?: string
}

type Props = ElectronicBookKeyVisualProps

export const ElectronicBookLargeKeyVisual: React.VFC<Props> = props => {
  return (
    <Container>
      <Contents>
        <Detail>
          <StyledTitle className="title">{props.title}</StyledTitle>
          <Line />
          <FirstLabel>{props.firstLabel}</FirstLabel>
          <SecondLabel>{props.secondLabel}</SecondLabel>
          <ThirdLabel>{props.ThirdLabel}</ThirdLabel>
        </Detail>
        <StyledNotes>{props.note}</StyledNotes>
      </Contents>
    </Container>
  )
}
