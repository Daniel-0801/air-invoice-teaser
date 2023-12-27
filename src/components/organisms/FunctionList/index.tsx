import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SectionTitleH2 } from "components/atoms/SectionTitleH2"
import { FunctionListItem, FunctionListItemProps } from "components/molecules/FunctionListItem"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubTitle = styled.p`
  font-size: 16px;
  color: ${COLOR.black87};
  margin-top: 24px;
`

const Functions = styled.div`
  margin-top: 48px;
`

const FunctionWrapper = styled.div`
  :not(:first-child) {
    margin-top: 64px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    :not(:first-child) {
      margin-top: 48px;
    }
  }
`

export interface FunctionListProps {
  readonly className?: string
  readonly title: string
  readonly subTitle?: string
  readonly functions: FunctionListItemProps[]
}

export const FunctionList: React.VFC<FunctionListProps> = props => {
  const { className, title, subTitle, functions } = props

  return (
    <Container className={className}>
      <SectionTitleH2>{title}</SectionTitleH2>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Functions>
        {functions.map((props, index) => (
          <FunctionWrapper key={index}>
            <FunctionListItem {...props} />
          </FunctionWrapper>
        ))}
      </Functions>
    </Container>
  )
}
