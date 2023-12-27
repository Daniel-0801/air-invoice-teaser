import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { ClientLabel } from "components/atoms/ClientLabel"

const Container = styled.div`
  background-color: ${COLOR.main05};
  margin-top: 120px;
  padding: 48px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 56px;
    flex-direction: column;
    padding: 56px 20px;
    gap: 0;
  }
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-bottom: 24px;
    width: 100%;
  }
`

const Img = styled.img`
  border-radius: 12px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
    height: auto;
  }
`

const Texts = styled.div`
  @media (max-width: ${BREAK_POINT.w768}px) {
    /* padding: 0 20px; */
  }
`

const Caption = styled.h3`
  font-size: 20px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 18px;
  }
`

const Description = styled.p`
  max-width: 387px;
  font-size: 16px;
  line-height: 26px;
  white-space: pre-wrap;
  color: ${COLOR.black60};
  margin-top: 16px;
  margin-bottom: 4px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: none;
    margin-top: 8px;
  }
`

const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const StyledClientLabel = styled(ClientLabel)`
  font-size: 12px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    align-self: flex-start;
    margin-top: 4px;
  }
`

export interface ShopInfoProps {
  readonly name: string
  readonly description: React.ReactNode
  readonly labels?: string[]
  readonly src: string
  readonly alt?: string
}

export const ShopInfo: React.VFC<ShopInfoProps> = props => {
  const { name, description, labels, src, alt } = props

  const breakpoint = useBreakpoint()

  return (
    <Container>
      {breakpoint.sp ? (
        <>
          <ImgContainer>
            <Img src={src} alt={alt} width={335} height={223} />
          </ImgContainer>
          <Texts>
            <Caption>{name}</Caption>
            <Description>{description}</Description>
            <Labels>
              {labels?.map((label, index) => (
                <StyledClientLabel key={index}>{label}</StyledClientLabel>
              ))}
            </Labels>
          </Texts>
        </>
      ) : (
        <>
          <ImgContainer>
            <Img src={src} alt={alt} width={385} height={257} />
          </ImgContainer>
          <Texts>
            <Caption>{name}</Caption>
            <Description>{description}</Description>
            <Labels>
              {labels?.map((label, index) => (
                <StyledClientLabel key={index}>{label}</StyledClientLabel>
              ))}
            </Labels>
          </Texts>
        </>
      )}
    </Container>
  )
}
