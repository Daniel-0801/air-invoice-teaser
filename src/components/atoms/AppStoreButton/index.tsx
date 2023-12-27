import * as React from "react"
import styled from "styled-components"

import AppStoreButtonImage from "images/common/app-store-button.svg"

const AppStoreLink = styled.a`
  display: block;
  overflow: hidden;

  &:hover {
    opacity: 0.6;
  }
`

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 13px;
`

interface AppStoreButtonProps {
  readonly className?: string
  readonly onClick: () => void
}

export const AppStoreButton: React.VFC<AppStoreButtonProps> = props => {
  return (
    <AppStoreLink
      className={props.className}
      href="https://apps.apple.com/us/app/air%E3%82%A4%E3%83%B3%E3%83%9C%E3%82%A4%E3%82%B9/id1532189632"
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      <Img src={AppStoreButtonImage} width="109" height="40" alt="Download on the App Store" />
    </AppStoreLink>
  )
}
