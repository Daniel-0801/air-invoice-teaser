import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import ArrowImage from "images/footer/arrow.png"

const Container = styled.a`
  width: 100%;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${ArrowImage}) right 16px center / 16px 16px no-repeat;
  text-decoration: none;
  flex-direction: column;
  border: 1px solid ${COLOR.main};
  border-radius: 8px;
  padding: 8px 12px 0;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    height: auto;
    display: flex;
    flex-direction: column;
    background-position: right 8px top 44px;
    background-size: 12px 12px;
    border-radius: 6px;
    padding: 0;
  }
`

const Label = styled.span`
  font-size: 10px;
  color: ${COLOR.main};
  margin: -8px -12px 0;
  padding: 4px 8px;
  align-self: start;
  border: 1px solid ${COLOR.main};
  border-top: none;
  border-left: none;
  border-radius: 8px 0px 6px 0px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
    margin: 0;
    padding: 2px 0;
    border-right: none;
    border-radius: 0px;
    text-align: center;
  }
`

const Content = styled.div<{ size: "large" | "small" }>`
  width: ${props => (props.size === "large" ? "94%" : "100%")};
  height: 100%;
  display: flex;
  flex-direction: ${props => (props.size === "large" ? "row" : "column")};
  align-items: center;
  justify-content: ${props => (props.size === "large" ? "center" : "flex-end")}; ;
`

const Image = styled.img<{ widthSP: number }>`
  max-width: 100%;
  height: auto;

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: ${props => props.widthSP}px;
    margin: 16px 0 8px;
  }
`

const Logo = styled.img`
  // ロゴのサイズ上、UI崩れが起きないように 900px 以下で画像サイズを変更
  @media (max-width: 900px) {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 18px;
  }
`

const HeadlineAndLogo = styled.div`
  margin: 8px auto;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 8px 4px;
  }
`

const Detail = styled.div<{ size: "large" | "small" }>`
  margin-left: ${props => (props.size === "large" ? "16px" : "0")};
`

const Headline = styled.p`
  font-size: 13px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${COLOR.main};
  white-space: pre-wrap;
  margin: 0 0 12px 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 11px;
    margin: 8px 0;
  }
`

export interface OptionServiceProps {
  readonly size: "large" | "small"
  readonly description: string | null
  readonly parent: string
  readonly link: string
  readonly image: string
  readonly imageWidth: number
  readonly imageWidthSP: number
  readonly imageHeight: number
  readonly alt: string
  readonly logo: string
  readonly logoWidth: number
  readonly logoHeight: number
  readonly logoAlt: string
}

export const OptionService: React.VFC<OptionServiceProps> = props => {
  const {
    size,
    description,
    parent,
    link,
    image,
    imageWidth,
    imageWidthSP,
    imageHeight,
    alt,
    logo,
    logoWidth,
    logoHeight,
    logoAlt,
  } = props

  if (size === "large" && description === null) {
    throw new Error("When the size is large, the description is required")
  }

  const label = `${parent}のオプションサービス`

  return (
    <Container href={link}>
      <Label>{label}</Label>
      <Content size={size}>
        <Image src={image} alt={alt} width={imageWidth} height={imageHeight} widthSP={imageWidthSP} />
        <Detail size={size}>
          <HeadlineAndLogo>
            {size === "large" ? (
              <>
                <Headline>{description}</Headline>
                <Logo src={logo} width={logoWidth} height={logoHeight} alt={logoAlt} />
              </>
            ) : (
              <Logo src={logo} width={logoWidth} height={logoHeight} alt={logoAlt} />
            )}
          </HeadlineAndLogo>
        </Detail>
      </Content>
    </Container>
  )
}
