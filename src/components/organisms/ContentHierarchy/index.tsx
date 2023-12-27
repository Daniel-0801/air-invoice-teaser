import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { BreadcrumbProps } from "components/atoms/Breadcrumb"
import { BreadcrumbList } from "components/molecules/BreadcrumbList"

import { Parameter } from "functions/url"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 12px 16px;
  }
`

const Contents = styled.div`
  width: 100%;
  max-width: 1264px;
`

const Title = styled.h1`
  font-size: 36px;
  line-height: 40px;
  color: ${COLOR.main};
`

interface ContentHierarchyProps {
  readonly breadcrumbs: BreadcrumbProps[]
  readonly contentName: string
  readonly description?: string
  readonly notes?: string[]
}

export const ContentHierarchy: React.VFC<ContentHierarchyProps> = props => {
  const { breadcrumbs, contentName } = props
  const queryParameters: Parameter[] = []

  const showContentName = () => {
    if (contentName !== "") {
      return <Title>{contentName}</Title>
    }
  }

  return (
    <Container>
      <Contents>
        <BreadcrumbList breadcrumbs={breadcrumbs} queryParameters={queryParameters} />
        {showContentName()}
      </Contents>
    </Container>
  )
}
