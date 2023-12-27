import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button<{ hasUnderText: boolean }>`
  width: 100%;
  height: ${props => (props.hasUnderText ? "100%" : "calc(100% - (16px + 8px))")}; // UnderText分を引く
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${COLOR.main};
  border-radius: 4px;
  box-shadow: inset 0px -4px 0px ${COLOR.main};
  padding: 16px 16px 24px;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    box-shadow: 0 0;
    transform: translate(0, 4px);
  }
`

const Icon = styled.div`
  color: ${COLOR.main};
`

const TextWrapper = styled.div`
  height: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${COLOR.main};
  text-align: center;
  white-space: pre-wrap;
`

const UnderText = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${COLOR.black60};
  text-align: center;
  margin-top: 8px;
`

export interface IconRectangleButtonProps {
  readonly className?: string
  readonly onClick: () => void
  readonly children: React.ReactNode
  readonly icon: React.ReactNode
  readonly underText?: string
}

export const IconRectangleButton: React.VFC<IconRectangleButtonProps> = props => {
  const { className, onClick, children, icon, underText } = props

  return (
    <Container className={className}>
      <Button onClick={onClick} hasUnderText={underText !== undefined}>
        <Icon>{icon}</Icon>
        <TextWrapper>
          <Text>{children}</Text>
        </TextWrapper>
      </Button>
      {underText && <UnderText>{underText}</UnderText>}
    </Container>
  )
}
