import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { Label } from "components/atoms/Label"
import { Notes } from "components/molecules/Notes"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${COLOR.main};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 32px 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 32px 20px;
  }
`

const StyledLabel = styled(Label)`
  color: ${COLOR.main};
  border: 2px solid ${COLOR.main35};
`

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 24px;
`

const Title = styled.p`
  margin-top: 24px;
  font-size: 24px;
  line-height: 32px;
  color: ${COLOR.black87};
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
    line-height: 26px;
  }
`

const Description = styled.p`
  margin-top: 16px;
  width: 100%;
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black87};
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 12px;
  }
`

const StyledNotes = styled(Notes)`
  margin-top: 12px;
  width: 100%;
`

interface LabeledStepCardProps {
  readonly className?: string
  readonly stepNumber: number
  readonly image: {
    readonly src: string
    readonly alt: string
    readonly width: number
    readonly height: number
  }
  readonly title: string
  readonly description: React.ReactNode
  readonly notes?: string[]
}

export const LabeledStepCard: React.VFC<LabeledStepCardProps> = props => {
  return (
    <Container className={props.className}>
      <StyledLabel className="label">ステップ {props.stepNumber}</StyledLabel>
      <Img src={props.image.src} width={props.image.width} height={props.image.height} alt={props.image.alt} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      {props.notes && <StyledNotes className="notes" notes={props.notes} />}
    </Container>
  )
}
