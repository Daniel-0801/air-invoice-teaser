import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import ArrowImage from "images/footer/arrow.png"

const Container = styled.a`
  width: calc((100% - 2 * 10px) / 3); // (100% - gap) / 3
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${COLOR.white} url(${ArrowImage}) right 16px center / 16px 16px no-repeat;
  border: 0px none;
  border-radius: 10px;
  box-shadow: 0px 2px 5px ${COLOR.black07};
  padding: 24px 20px 16px;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: min(100%, 360px);
    flex-direction: row;
    justify-content: start;
  }
`

const ImageAndHeadline = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: center;
`

const HeadlineAndLogo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  justify-content: center;
`

const ImageContainer = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const Headline = styled.p`
  font-size: 13px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${COLOR.main};
  white-space: pre-wrap;
  margin: 0 0 0 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 0 0 8px 0;
  }
`

const Logo = styled.img`
  align-self: center;
  justify-self: flex-end;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 20px;
    align-self: start;
  }
`

export interface MediumCardProps {
  readonly link: string
  readonly image: string
  readonly imageWidth: number
  readonly imageHeight: number
  readonly alt: string
  readonly headlinePC: string
  readonly headlineSP: string
  readonly logo: string
  readonly logoWidth: number
  readonly logoHeight: number
  readonly logoAlt: string
}

export const MediumCard: React.VFC<MediumCardProps> = props => {
  const { link, image, imageWidth, imageHeight, alt, headlinePC, headlineSP, logo, logoWidth, logoHeight, logoAlt } =
    props

  const breakpoints = useBreakpoint()

  return (
    <Container href={link}>
      {breakpoints.sp ? (
        <>
          <ImageContainer>
            <Image src={image} width={imageWidth} height={imageHeight} alt={alt} />
          </ImageContainer>
          <HeadlineAndLogo>
            <Headline>{headlineSP}</Headline>
            <Logo src={logo} width={logoWidth} height={logoHeight} alt={logoAlt} />
          </HeadlineAndLogo>
        </>
      ) : (
        <>
          <ImageAndHeadline>
            <ImageContainer>
              <Image src={image} width={imageWidth} height={imageHeight} alt={alt} />
            </ImageContainer>
            <Headline>{headlinePC}</Headline>
          </ImageAndHeadline>
          <Logo src={logo} width={logoWidth} height={logoHeight} alt={logoAlt} />
        </>
      )}
    </Container>
  )
}
