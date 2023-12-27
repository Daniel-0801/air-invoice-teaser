import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { CheckIcon } from "components/atoms/Icon"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  flex-shrink: 0;
`

const Content = styled.div`
  display: flex;
  align-items: baseline;
`

const LabelText = styled.span`
  margin-left: 16px;
  font-size: 16px;
  color: ${COLOR.black87};
  text-align: left;
`

export interface BulletListItemProps {
  readonly className?: string
  readonly labelText: string
}

export const BulletListItem: React.VFC<BulletListItemProps> = props => {
  return (
    <Container className={props.className}>
      <Content>
        <IconContainer>
          <CheckIcon size={13} fill={COLOR.main} />
        </IconContainer>
        <LabelText>{props.labelText}</LabelText>
      </Content>
    </Container>
  )
}
