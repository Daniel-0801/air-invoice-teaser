import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { HEADER_FOOTER_MAX_WIDTH_PX } from "components/sizes"

import { ExternalLink } from "components/atoms/ExternalLink"
import { LoginButton } from "components/atoms/LoginButton"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLOR.main};
  padding: 12px 32px;
`

const Contents = styled.div`
  width: 100%;
  max-width: ${HEADER_FOOTER_MAX_WIDTH_PX}px;
  display: flex;
  justify-content: space-between;
  color: ${COLOR.white};
  font-size: 12px;
`

const LinkContainer = styled.div`
  display: flex;
`

const Tagline = styled.p``

const StyledLoginButton = styled(LoginButton)`
  color: ${COLOR.white};
  margin-right: 24px;
`

const FAQ = styled(ExternalLink)``

interface TaglineBarProps {
  className?: string
  questionOnClick: () => void
  onClick: () => void
}

export const TaglineBar: React.VFC<TaglineBarProps> = props => {
  const { className, questionOnClick } = props

  return (
    <Container className={className}>
      <Contents>
        <Tagline>振込も保管もラクになる請求書支払アプリ</Tagline>
        <LinkContainer>
          <StyledLoginButton className="header-primary-button" onClick={props.onClick} />
          <FAQ className="external-link" link="https://faq.airinvoice.jp/" onClick={questionOnClick}>
            よくあるご質問
          </FAQ>
        </LinkContainer>
      </Contents>
    </Container>
  )
}
