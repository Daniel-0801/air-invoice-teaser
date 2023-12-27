import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { LinkIcon } from "components/atoms/Icon"

const LabelText = styled.span`
  font-size: 12px;
  line-height: 14px;
  margin-right: 4px;
`

const Link = styled.a`
  color: ${COLOR.blueCerulean};
  display: flex;
  align-items: center;
  text-decoration: underline;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

interface LinkWithNewTabIconProps {
  readonly className?: string
  readonly text: string
  readonly link: string
  readonly onClick: () => void
}

export const LinkWithNewTabIcon: React.VFC<LinkWithNewTabIconProps> = props => {
  return (
    <Link
      className={props.className}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      <LabelText>{props.text}</LabelText>
      <LinkIcon size={12} />
    </Link>
  )
}
