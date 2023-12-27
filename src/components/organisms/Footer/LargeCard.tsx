import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { OptionService, OptionServiceProps } from "components/organisms/Footer/OptionService"

import ArrowImage from "images/footer/arrow.png"

const Container = styled.div`
  width: calc((100% - 10px) / 2); // (100% - gap) / 2
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${COLOR.white};
  border: 0px none;
  border-radius: 10px;
  box-shadow: 0px 2px 5px ${COLOR.black07};
  padding: 24px 20px 20px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: min(100%, 360px);
  }
`

const Service = styled.a`
  display: flex;
  align-items: center;
  background: url(${ArrowImage}) right / 16px 16px no-repeat;
  text-decoration: none;
  margin: 0 0 24px 8px;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    background-size: 12px 12px;
  }
`

const Image = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: 84px;
  }
`

const Caption = styled.div`
  margin: 0 0 0 32px;
`

const Headline = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 2px;
  color: ${COLOR.main};
  white-space: pre-wrap;
  margin: 0 0 8px 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
  }
`

const Logo = styled.img`
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 20px;
  }
`

const OptionServices = styled.div`
  display: flex;
  gap: 8px;

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (not (translate: none)) {
      > a {
        margin-right: 8px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`

export interface LargeCardProps {
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
  readonly optionServices: OptionServiceProps[]
}

export const LargeCard: React.VFC<LargeCardProps> = props => {
  const {
    link,
    image,
    imageWidth,
    imageHeight,
    alt,
    headlinePC,
    headlineSP,
    logo,
    logoWidth,
    logoHeight,
    logoAlt,
    optionServices,
  } = props

  const breakpoints = useBreakpoint()

  return (
    <Container>
      <Service href={link}>
        <Image src={image} width={imageWidth} height={imageHeight} alt={alt} />
        <Caption>
          <Headline>{breakpoints.sp ? headlineSP : headlinePC}</Headline>
          <Logo src={logo} width={logoWidth} height={logoHeight} alt={logoAlt} />
        </Caption>
      </Service>
      <OptionServices>
        {optionServices.map((optionService, index) => (
          <OptionService key={index} {...optionService} />
        ))}
      </OptionServices>
    </Container>
  )
}
