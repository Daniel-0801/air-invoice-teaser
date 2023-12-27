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

interface AppStoreButtonFunctionIntroductionProps {
  readonly className?: string
  readonly onClick: () => void
}

export const AppStoreButtonFunctionIntroduction: React.VFC<AppStoreButtonFunctionIntroductionProps> = props => {
  return (
    <AppStoreLink
      className={props.className}
      href="https://app.adjust.com/kolvg75"
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      <Img src={AppStoreButtonImage} width="109" height="40" alt="Download on the App Store" />
    </AppStoreLink>
  )
}
