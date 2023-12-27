import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { Label } from "components/atoms/Label"
import { LabelWithIcon } from "components/molecules/LabelWithIcon"

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
  width: 450px;
  height: 436px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: auto;
    height: auto;
    margin-top: 24px;
  }
`

const Img = styled.img`
  max-width: 100%;
  height: auto;
`

const Texts = styled.div`
  margin-left: 24px;
`

const Caption = styled.h3`
  max-width: 387;
  font-size: 24px;
  color: ${COLOR.black87};
  margin-top: 16px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: none;
    font-size: 20px;
    margin-top: 24px;
  }
`

const Description = styled.p`
  max-width: 387px;
  font-size: 16px;
  line-height: 26px;
  white-space: pre-wrap;
  color: ${COLOR.black60};
  margin-top: 16px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: none;
    margin-top: 8px;
  }
`

const StyledLabel = styled(Label)`
  margin-top: 16px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    align-self: flex-start;
    margin-top: 4px;
  }
`

// const LogoContainer = styled.div`
//   background: #fff;
//   padding: 8px;
//   margin-top: 35px;

//   @media (max-width: ${BREAK_POINT.w768}px) {
//     padding: 12px;
//     margin-top: 8px;
//   }
// `

// const MFImageContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;

//   @media (max-width: ${BREAK_POINT.w768}px) {
//     display: block;
//   }
// `

export interface FunctionListItemProps {
  readonly name: string
  readonly icon: React.ReactNode
  readonly caption: string
  readonly description: string
  readonly note?: string
  readonly image: {
    readonly src: string
    readonly alt: string
    readonly width?: number
    readonly height?: number
  }
  readonly companyLogo?: CompanyLogoProps[]
}

interface CompanyLogoProps {
  readonly src: string
  readonly alt: string
  readonly width?: number
  readonly height?: number
}

export const FunctionListItem: React.VFC<FunctionListItemProps> = props => {
  const { name, icon, caption, description, note, image } = props

  const breakpoint = useBreakpoint()

  return (
    <Container>
      {breakpoint.sp ? (
        <>
          <LabelWithIcon labelText={name} icon={icon} />
          <ImgContainer>
            <Img
              src={image.src}
              alt={image.alt}
              width={image.width ? image.width : 335}
              height={image.height ? image.height : 317}
            />
          </ImgContainer>
          <Caption>{caption}</Caption>
          <Description>{description}</Description>
          {note && <StyledLabel>{note}</StyledLabel>}
          {/* 1/11のマネフォ連携機能リリース後に表示 */}
          {/* {companyLogo && (
            <LogoContainer>
              <Img
                src={companyLogo[0].src}
                alt={companyLogo[0].alt}
                width={companyLogo[0].width}
                height={companyLogo[0].height}
              />
              <MFImageContainer>
                <Img
                  src={companyLogo[1].src}
                  alt={companyLogo[1].alt}
                  width={companyLogo[1].width}
                  height={companyLogo[1].height}
                />
                <Img
                  src={companyLogo[2].src}
                  alt={companyLogo[2].alt}
                  width={companyLogo[2].width}
                  height={companyLogo[2].height}
                />
              </MFImageContainer>
            </LogoContainer>
          )} */}
        </>
      ) : (
        <>
          <ImgContainer>
            <Img
              src={image.src}
              alt={image.alt}
              width={image.width ? image.width : 450}
              height={image.height ? image.height : 436}
            />
          </ImgContainer>
          <Texts>
            <LabelWithIcon labelText={name} icon={icon} />
            <Caption>{caption}</Caption>
            <Description>{description}</Description>
            {note && <StyledLabel>{note}</StyledLabel>}
            {/* 1/11のマネフォ連携機能リリース後に表示 */}
            {/* {companyLogo && (
              <LogoContainer>
                <Img
                  src={companyLogo[0].src}
                  alt={companyLogo[0].alt}
                  width={companyLogo[0].width}
                  height={companyLogo[0].height}
                />
                <MFImageContainer>
                  <Img
                    src={companyLogo[1].src}
                    alt={companyLogo[1].alt}
                    width={companyLogo[1].width}
                    height={companyLogo[1].height}
                  />
                  <Img
                    src={companyLogo[2].src}
                    alt={companyLogo[2].alt}
                    width={companyLogo[2].width}
                    height={companyLogo[2].height}
                  />
                </MFImageContainer>
              </LogoContainer>
            )} */}
          </Texts>
        </>
      )}
    </Container>
  )
}
