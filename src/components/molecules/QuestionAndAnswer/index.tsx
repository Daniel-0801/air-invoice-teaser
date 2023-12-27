import React from "react"
import styled, { css } from "styled-components"

import { COLOR } from "components/color"

import { Notes } from "../Notes"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const IconStyle = css`
  display: flex;
  width: 36px;
  flex-shrink: 0;
  height: 36px;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.main};
`

const QuestionContainer = styled.div`
  display: flex;
  align-items: baseline;
`

const QuestionIcon = styled.div`
  ${IconStyle}
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLOR.main};
  border-radius: 100%;
`

const QuestionText = styled.span`
  display: flex;
  width: 100%;
  margin-left: 12px;
  color: ${COLOR.main};
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`

const AnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
`

const AnswerIcon = styled.div`
  ${IconStyle}
  padding-left: 12px; // Questionのアイコンと位置を調整するために指定
`

const AnswerText = styled.span`
  display: flex;
  width: 100%;
  margin-left: 12px;
  color: ${COLOR.black87};
  font-size: 16px;
  line-height: 26px;
  white-space: pre-wrap;
`

const StyledNotes = styled(Notes)`
  margin-top: 16px;
  margin-left: 48px;
`

interface QuestionAndAnswerProps {
  readonly className?: string
  readonly question: string
  readonly answer: string
  readonly notes?: string[]
}

export const QuestionAndAnswer: React.VFC<QuestionAndAnswerProps> = props => {
  return (
    <Container className={props.className}>
      <QuestionContainer>
        <QuestionIcon>Q</QuestionIcon>
        <QuestionText>{props.question}</QuestionText>
      </QuestionContainer>
      <AnswerContainer>
        <AnswerIcon>A.</AnswerIcon>
        <AnswerText>{props.answer}</AnswerText>
      </AnswerContainer>
      {props.notes && <StyledNotes notes={props.notes} />}
    </Container>
  )
}
