import { Link } from "gatsby"
import * as React from "react"
import styled, { css } from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import ArrowWhiteImage from "images/icon/right-arrow-icon.svg"

const ButtonStyle = css`
  text-align: center;
  font-weight: bold;
  color: ${COLOR.white};
  background: right 16px center / 16px 16px no-repeat;
  background-color: ${COLOR.main};
  background-image: url(${ArrowWhiteImage});
  border: none;
  border-radius: 100px;
  text-decoration: none;
  box-shadow: 0px 3px 6px ${COLOR.black14}, 0px 2px 3px ${COLOR.black12};

  &:hover {
    opacity: 0.6;
  }

  &:active {
    box-shadow: 0 0;
    transform: translate(0, 1px);
  }
`

const NormalButton = styled(Link)`
  ${ButtonStyle}
  font-size: 20px;
  line-height: 22px;
  width: min(400px, 100%);
  padding: 24px 56px;
  background-size: 10px 20px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 16px;
    line-height: 18px;
    width: min(400px, 100%);
    padding: 20px 32px;
    background-size: 10px 18px;
  }
`

const SmallButton = styled(Link)`
  ${ButtonStyle}
  font-size: 16px;
  line-height: 22px;
  width: min(216px, 100%);
  padding: 12px 32px;
  background-size: 8px 14px;
`

interface PageNavigationButtonProps {
  readonly className?: string
  readonly children: string
  readonly link: string
  readonly size?: PageNavigationButtonSize
  readonly onClick: () => void
}

export type PageNavigationButtonSize = "small" | "normal"

export const PageNavigationButton: React.VFC<PageNavigationButtonProps> = props => {
  const { className, children, link, size = "normal", onClick } = props
  return (
    <>
      {size === "normal" ? (
        <NormalButton className={className} to={link} onClick={onClick}>
          {children}
        </NormalButton>
      ) : (
        <SmallButton className={className} to={link} onClick={onClick}>
          {children}
        </SmallButton>
      )}
    </>
  )
}
