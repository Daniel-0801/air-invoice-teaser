import * as React from "react"
import styled, { css } from "styled-components"

import { COLOR } from "components/color"

import SvgRightArrowIcon from "components/atoms/Icon/RightArrowIcon"

export type Kind = "primary" | "normal"

const PrimaryStyle = css`
  border: none;
  color: ${COLOR.white};
  background-color: ${COLOR.main};
  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.25);
`

const NormalStyle = css`
  border: 1px solid ${COLOR.main};
  color: ${COLOR.main};
  background-color: ${COLOR.white};
  box-shadow: inset 0px -3px 0px ${COLOR.main};
`

const LinkButton = styled.a<{ kind: Kind }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 58px;
  border-radius: 4px;
  padding: 18px 16px;
  font-size: 14px;
  line-height: 22px;

  ${({ kind }) => (kind === "primary" ? PrimaryStyle : NormalStyle)};

  &:hover {
    opacity: 0.7;
  }

  &:active {
    box-shadow: 0 0;
    transform: translate(0, 2px);
  }
`

const LinkSpan = styled.span`
  width: 100%;
  text-align: center;
`

interface SubsidyLinkButtonProps {
  readonly className?: string
  readonly children: React.ReactNode
  readonly link: string
  readonly iconSize?: number
  readonly kind?: Kind
}

export const SubsidyLinkButton: React.VFC<SubsidyLinkButtonProps> = props => {
  const { className, children, link, iconSize = 14, kind = "normal" } = props
  return (
    <LinkButton className={className} href={link} target="_blank" rel="noopener noreferrer" kind={kind}>
      <LinkSpan>{children}</LinkSpan>
      <SvgRightArrowIcon size={iconSize} />
    </LinkButton>
  )
}
