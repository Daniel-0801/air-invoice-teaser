import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { CONTENTS_MAX_WIDTH_PX, BREAK_POINT } from "components/sizes"

import { BreadcrumbProps } from "components/atoms/Breadcrumb"
import { BreadcrumbList } from "components/molecules/BreadcrumbList"
import { Notes } from "components/molecules/Notes"

import { Parameter } from "functions/url"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLOR.main05};
  padding: 40px 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 40px 20px;
  }
`

const Contents = styled.div`
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
`

const Title = styled.h1`
  font-size: 36px;
  line-height: 40px;
  color: ${COLOR.main};
  margin-top: 26px;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.black87};
  margin-top: 24px;
  white-space: pre-wrap;
`

const StyledNotes = styled(Notes)`
  margin-top: 24px;
`

interface ContentHeaderProps {
  readonly breadcrumbs: BreadcrumbProps[]
  readonly contentName: string
  readonly description?: string
  readonly notes?: string[]
}

export const ContentHeader: React.VFC<ContentHeaderProps> = props => {
  const { breadcrumbs, contentName, description, notes } = props
  const queryParameters: Parameter[] = []
  return (
    <Container>
      <Contents>
        <BreadcrumbList breadcrumbs={breadcrumbs} queryParameters={queryParameters} />
        <Title>{contentName}</Title>
        {description && <Description>{description}</Description>}
        {notes && <StyledNotes notes={notes} />}
      </Contents>
    </Container>
  )
}
