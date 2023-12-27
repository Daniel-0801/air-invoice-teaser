import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { createURLWithParameters, Parameter } from "functions/url"

const Container = styled.li`
  list-style: none;

  &:not(:last-child)::after {
    content: ">";
    font-size: 14px;
    color: ${COLOR.black60};
    margin: 0 8px;
  }
`

const StyledLink = styled(Link)`
  font-size: 12px;
  color: ${COLOR.blueCerulean};

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

const StyledSpan = styled.span`
  font-size: 12px;
  color: ${COLOR.black60};
`

export interface BreadcrumbProps {
  readonly pageName: string
  readonly pageLink?: string
  readonly queryParameters?: Parameter[]
}

export const Breadcrumb: React.VFC<BreadcrumbProps> = props => {
  const { pageName, pageLink, queryParameters = [] } = props

  return (
    <Container>
      {pageLink ? (
        <StyledLink to={createURLWithParameters(pageLink, queryParameters)}>{pageName}</StyledLink>
      ) : (
        <StyledSpan>{pageName}</StyledSpan>
      )}
    </Container>
  )
}
