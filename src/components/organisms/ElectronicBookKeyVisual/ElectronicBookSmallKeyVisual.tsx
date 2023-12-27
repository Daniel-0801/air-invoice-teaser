import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SectionTitleH1 } from "components/atoms/SectionTitleH1"

import KeyVisualImage from "images/electronic-book/key-visual/key-visual_sp.png"

import { ElectronicBookKeyVisualProps } from "./type"

const Container = styled.div`
  flex-direction: column;
`

const KeyVisual = styled.div`
  height: 680px;
  padding: 48px 20px 0 20px;
  position: relative;
  // 背景画像
  background-repeat: no-repeat;
  background-image: url(${KeyVisualImage});
  background-position: 50% 20%;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.3);
  //background-blend-mode: lighten;

  @media (max-width: ${BREAK_POINT.w768}px) {
    background-position: 50% 75%;
  }
`

const Contents = styled.div`
  width: 100%;
`

const Line = styled.hr`
  display: block;
  width: 54px;
  border-top-width: 3px;
  color: ${COLOR.white};
  margin-top: 16px;
  margin-bottom: 35px;
`

const FirstLabel = styled.div`
  color: #fff;
  font-weight: 600;
  line-height: 28px;
  font-size: 15px;
`

const SecondLabel = styled.div`
  color: #fff;
  font-weight: 600;
  line-height: 28px;
  font-size: 15px;
  display: inline;
  background: linear-gradient(rgba(244, 251, 254, 0.3) 70%, rgba(244, 251, 254, 0.3) 100%);
`

const ThirdLabel = styled.div`
  color: #fff;
  font-weight: 600;
  line-height: 28px;
  font-size: 15px;
  display: inline;
  background: linear-gradient(rgba(244, 251, 254, 0.3) 70%, rgba(244, 251, 254, 0.3) 100%);
`

const StyledNotes = styled.p`
  color: ${COLOR.white};
  font-size: 12px;
  white-space: pre-wrap;
  font-weight: 300;
  p {
    line-height: 14px;
  }
`

const Detail = styled.div`
  margin-bottom: 40px;
`

const StyledTitle = styled(SectionTitleH1)`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${COLOR.white};
  text-align: left;
`

type Props = ElectronicBookKeyVisualProps

export const ElectronicBookSmallKeyVisual: React.VFC<Props> = props => {
  return (
    <Container>
      <KeyVisual>
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
      </KeyVisual>
    </Container>
  )
}
