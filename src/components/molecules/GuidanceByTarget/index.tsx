import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { BookIcon } from "components/atoms/Icon"
import { PageNavigationButton } from "components/atoms/PageNavigationButton"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 8px;
  width: min(650px, 100%);
  background-color: ${COLOR.white};
  border: 4px solid ${COLOR.grayGallery};
`

const TargetUser = styled.div`
  position: absolute;
  width: min(222px, 100%);
  background-color: ${COLOR.grayGallery};
  padding: 16px;
  text-align: center;
  top: 0px;
  left: 0px;
  border-bottom-right-radius: 8px;
  font-size: 14px;
  color: ${COLOR.black87};
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 90px 24px 40px;
  }
`

const IconWrapper = styled.div`
  color: ${COLOR.main};
`

const Title = styled.p`
  color: ${COLOR.main};
  font-size: 24px;
  margin-top: 8px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 18px;
  }
`
const Description = styled.p`
  margin-top: 24px;
  color: ${COLOR.black87};
  font-size: 16px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 16px;
  }

  // safari で文章の最後の1文字だけ改行されてしまう現象の対処
  &:after {
    content: ".";
    display: inline-block;
    color: transparent;
  }
`

const StyledPageNavigationButton = styled(PageNavigationButton)`
  margin-top: 24px;
`

interface GuidanceByTargetProps {
  readonly className?: string
  readonly targetUser: string
  readonly title: string
  readonly description: string
  readonly buttonText: string
  readonly link: string
  readonly onClick: () => void
}

export const GuidanceByTarget: React.VFC<GuidanceByTargetProps> = props => {
  return (
    <Container>
      <TargetUser>{props.targetUser}</TargetUser>
      <ContentContainer>
        <IconWrapper>
          <BookIcon size={78} />
        </IconWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <StyledPageNavigationButton
          className="page-navigation-button"
          size="small"
          link={props.link}
          onClick={props.onClick}
        >
          {props.buttonText}
        </StyledPageNavigationButton>
      </ContentContainer>
    </Container>
  )
}
