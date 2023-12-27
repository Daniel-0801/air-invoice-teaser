import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import ArrowWhiteImage from "images/icon/right-arrow-icon.svg"

const Container = styled.div`
  display: flex;
`

const ExternalLink = styled.a`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 24px 40px;
  color: ${COLOR.white};
  background: right 16px center / 18px 18px no-repeat;
  background-color: ${COLOR.orangeClementine};
  background-image: url(${ArrowWhiteImage});
  border: none;
  border-radius: 6px;
  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.6;
  }

  &:active {
    box-shadow: 0 0;
    transform: translate(0, 1px);
  }
`

interface ExternalLinkButtonProps {
  readonly className?: string
  readonly children: React.ReactNode
  readonly link: string
  readonly onClick: () => void
}

export const ExternalLinkButton: React.VFC<ExternalLinkButtonProps> = props => {
  return (
    <Container className={props.className}>
      <ExternalLink href={props.link} target="_blank" rel="noopener noreferrer" onClick={props.onClick}>
        {props.children}
      </ExternalLink>
    </Container>
  )
}
