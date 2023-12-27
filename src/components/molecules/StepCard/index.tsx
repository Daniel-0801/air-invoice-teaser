import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${COLOR.main};
  border-radius: 8px;
  padding: 56px 40px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }
`

const Texts = styled.div``

const Title = styled.h2`
  font-size: 24px;
  color: ${COLOR.main};
`

const Content = styled.div<{ hasImage: boolean }>`
  ${props => props.hasImage && "max-width: 610px;"}
  font-size: 16px;
  color: ${COLOR.black87};
  margin-top: 24px;
`

const ImageContainer = styled.div`
  width: 301px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: min(100%, 255px);
    margin-left: 0;
    margin-top: 24px;
  }
`

const Image = styled.img`
  width: min(100%, ${props => props.width}px);
  height: auto;
`

export interface StepCardProps {
  readonly className?: string
  readonly id?: string
  readonly title: string
  readonly children: React.ReactNode
  readonly image?: {
    readonly src: string
    readonly width: number
    readonly height: number
    readonly alt: string
  }
}

export const StepCard: React.VFC<StepCardProps> = props => {
  const { className, id, title, children, image } = props

  return (
    <Card className={className} id={id}>
      <Texts>
        <Title>{title}</Title>
        <Content hasImage={image !== undefined}>{children}</Content>
      </Texts>
      {image && (
        <ImageContainer>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </ImageContainer>
      )}
    </Card>
  )
}
