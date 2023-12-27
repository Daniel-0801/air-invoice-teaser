import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SectionTitleH2 } from "components/atoms/SectionTitleH2"

const Container = styled.div`
  margin-top: 72px;

  @media (max-width: ${BREAK_POINT.w1024}px) {
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 0;
  }
`

const StyledSectionTitleH2 = styled(SectionTitleH2)`
  max-width: 1000px;
  white-space: pre-wrap;
  margin: 0 auto;
  font-size: 28px;
  text-align: left;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    padding: 0 32px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
    line-height: 26px;
    text-align: left;
    padding: 0 20px;
  }
`

const Section = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 41px;
  gap: 48px;
  padding: 0 220px 0 86px;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    padding: 0 32px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const ImgContainer = styled.div`
  flex: 1;
  @media (max-width: ${BREAK_POINT.w1024}px) {
    text-align: center;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
  }
`

const Img = styled.img`
  width: 100%;
  height: auto;

  &:nth-child(2) {
    margin-top: 15px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
  }
`

const Description = styled.p`
  flex: 1;
  font-size: 16px;
  line-height: 26px;
  white-space: pre-wrap;
  color: ${COLOR.black60};

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
    width: 100%;
    padding: 0 20px;
  }
  @media (max-width: ${BREAK_POINT.w1024}px) {
  }
`

const ImageComment = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 300;
  color: ${COLOR.black60};

  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 24px;
    margin-top: 12px;
    text-align: left;
    padding: 0 20px;
  }
`

export type CaseSectionsProps = {
  readonly title: string
  readonly src?: string
  readonly img?: string
  readonly comment: string
  readonly descriptions: React.ReactNode
  readonly note?: string
  readonly alt?: string
  readonly width?: number
  readonly height?: number
}

export const CaseOddSection: React.VFC<CaseSectionsProps> = props => {
  const { title, descriptions, src, img, comment, alt } = props

  const breakpoint = useBreakpoint()

  return (
    <Container>
      {breakpoint.sp ? (
        <>
          <StyledSectionTitleH2>{title}</StyledSectionTitleH2>
          <ImgContainer>
            <Img src={src} alt={alt} width={335} height={223} />
            {img ? <Img src={img} alt={alt} width={335} height={223} /> : <></>}
            <ImageComment>{comment}</ImageComment>
          </ImgContainer>
          <Description>{descriptions}</Description>
        </>
      ) : (
        <>
          <StyledSectionTitleH2>{title}</StyledSectionTitleH2>
          <Section>
            <ImgContainer>
              <Img src={src} alt={alt} width={600} height={400} />
              {img ? <Img src={img} alt={alt} width={600} height={400} /> : <></>}
              <ImageComment>{comment}</ImageComment>
            </ImgContainer>
            <Description>{descriptions}</Description>
          </Section>
        </>
      )}
    </Container>
  )
}
