import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import ArrowWhiteImage from "images/footer/arrow-white.png"
import ArrowImage from "images/footer/arrow.png"

type CardColor = "blue" | "white"

const Container = styled.a<{ cardColor: CardColor }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  background: right 16px center / 16px 16px no-repeat;
  background-color: ${props => (props.cardColor === "blue" ? COLOR.blueGlacier : COLOR.white)};
  background-image: url(${props => (props.cardColor === "blue" ? ArrowWhiteImage : ArrowImage)});
  border: 0px none;
  border-radius: 10px;
  box-shadow: 0px 2px 5px ${COLOR.black07};
  padding: 16px;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

const Headline = styled.p<{ cardColor: CardColor }>`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: ${props => (props.cardColor === "blue" ? COLOR.white : COLOR.main)};
  margin: 0 0 16px 0;
`

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`

export interface SmallCardProps {
  readonly cardColor: CardColor
  readonly link: string
  readonly headline: string
  readonly logo: string
  readonly logoWidth: number
  readonly logoHeight: number
  readonly logoAlt: string
}

export const SmallCard: React.VFC<SmallCardProps> = props => {
  const { cardColor, link, headline, logo, logoWidth, logoHeight, logoAlt } = props

  return (
    <Container href={link} cardColor={cardColor}>
      <Headline cardColor={cardColor}>{headline}</Headline>
      <Logo src={logo} width={logoWidth} height={logoHeight} alt={logoAlt} />
    </Container>
  )
}
