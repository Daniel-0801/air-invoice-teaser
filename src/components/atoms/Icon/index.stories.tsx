import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import styled from "styled-components"

import {
  InvoiceIcon,
  RightArrowIcon,
  BottomArrowIcon,
  CheckIcon,
  BookIcon,
  AlertIcon,
  CameraIcon,
  ClockIcon,
  ShareIcon,
  LinkIcon,
  DownloadIcon,
  PersonIcon,
  ShootingIcon,
  ApplicationIcon,
  PaymentReservationIcon,
  IdDocumentIcon,
  ScreeningIcon,
  PaymentIcon,
  CallIcon,
} from "components/atoms/Icon"

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IconName = styled.span`
  font-size: 12px;
  margin-top: 8px;
`

interface Props {
  readonly size: number
}

const Container: React.VFC<Props> = props => {
  const { size } = props

  const icons = [
    InvoiceIcon,
    RightArrowIcon,
    BottomArrowIcon,
    CheckIcon,
    BookIcon,
    AlertIcon,
    CameraIcon,
    ClockIcon,
    ShareIcon,
    LinkIcon,
    DownloadIcon,
    PersonIcon,
    ShootingIcon,
    ApplicationIcon,
    PaymentReservationIcon,
    IdDocumentIcon,
    ScreeningIcon,
    PaymentIcon,
    CallIcon,
  ]

  return (
    <IconList>
      {icons.map(Icon => (
        <IconWrapper key={Icon.name}>
          <Icon size={size} />
          <IconName>{Icon.name}</IconName>
        </IconWrapper>
      ))}
    </IconList>
  )
}

export default {
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = props => <Container {...props} />

export const Normal = Template.bind({})
Normal.args = {
  size: 48,
}
