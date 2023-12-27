import * as React from "react"
import styled from "styled-components"

interface ExternalLinkProps {
  readonly className?: string
  readonly children: React.ReactNode
  readonly link: string
  readonly onClick: () => void
}

const Link = styled.a`
  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

export const ExternalLink: React.VFC<ExternalLinkProps> = props => {
  return (
    <Link
      className={props.className}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  )
}
