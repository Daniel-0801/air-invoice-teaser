import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

interface IconDescriptionProps {
  readonly className?: string
  readonly descriptions: IconDescriptionItemProps[]
}
interface IconDescriptionItemProps {
  readonly children: React.ReactNode
  readonly text: string
  readonly subText: string
}

const IconDescriptionContainer = styled.ol`
  display: flex;
  flex-direction: row;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
  }
`

const IconDescriptionItem = styled.li`
  flex: 1;

  &:not(:first-child) {
    margin-left: 24px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    &:not(:first-child) {
      margin: 24px 0 0 0;
    }
  }
`
const IconTextContainer = styled.div`
  display: flex;
`

const Icon = styled.div`
  min-width: 36px;
`

const Text = styled.p`
  margin: auto 0 auto 6px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black60};
`
const SubText = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.black60};
`

export const IconDescriptionList: React.VFC<IconDescriptionProps> = props => {
  const { descriptions, className } = props

  return (
    <IconDescriptionContainer className={className}>
      {descriptions.map(description => (
        <IconDescriptionItem key={description.text}>
          <IconTextContainer>
            <Icon>{description.children}</Icon>
            <Text>{description.text}</Text>
          </IconTextContainer>
          <SubText>{description.subText}</SubText>
        </IconDescriptionItem>
      ))}
    </IconDescriptionContainer>
  )
}
