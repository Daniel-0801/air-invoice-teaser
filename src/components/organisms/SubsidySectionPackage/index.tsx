import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SubsidyLinkButton } from "components/atoms/SubsidyLinkButton"
import { Notes } from "components/molecules/Notes"
import { SubsidyPackagePrice } from "components/molecules/SubsidyPackagePrice"
import { SubsidyPackageService } from "components/molecules/SubsidyPackageService"

import { createURLWithParameters } from "functions/url"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 68px 70px;
  place-items: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 20px;
  }
`

const Title = styled.h1`
  color: ${COLOR.main};
  font-size: 32px;
  line-height: 36px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 28px;
  }
`

const Background = styled.div`
  position: absolute;
  width: calc(100% - 70px * 2);
  height: 890px;
  left: 70px;
  top: 216px;
  background: ${COLOR.main};
  border-radius: 12px;
  z-index: -1;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
    height: calc(100% - 160px - 392px);
    left: 0;
    top: 160px;
    border-radius: 0;
  }
`

const StyledSubsidyPackagePrice = styled(SubsidyPackagePrice)`
  width: 1016px;
  margin-top: 68px;
  box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 338px;
    margin-top: 32px;
  }
`
const StyledSubsidyPackageService = styled(SubsidyPackageService)`
  width: 1016px;
  margin-top: 48px;
  box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 334px;
    margin-top: 24px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 92px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column-reverse;
    margin-top: 32px;
  }
`
const StyledSubsidyLinkButton = styled(SubsidyLinkButton)`
  width: 424px;
  height: 72px;
  padding: 26px 16px;
  font-size: 20px;
  line-height: 20px;
  white-space: nowrap;

  & + & {
    margin-left: 32px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 334px;
    font-size: 16px;

    &:first-child {
      margin-top: 24px;
    }

    & + & {
      margin-left: 0;
    }
  }
`

const AnchorLink = styled.a`
  color: ${COLOR.blueCerulean};
  text-decoration: underline;
`

const StyledNotes = styled(Notes)`
  margin-top: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
  }
`

const B = styled.b`
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-weight: normal;
  }
`

const ButtonWrapper = styled.div`
  max-width: 880px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: 334px;
  }
`

interface SubsidySectionPackageProps {
  readonly className?: string
}

export const SubsidySectionPackage: React.VFC<SubsidySectionPackageProps> = props => {
  const { className } = props

  return (
    <Container className={className}>
      <Title>IT導入補助金対応商品の購入例</Title>
      <Background />
      <StyledSubsidyPackagePrice />
      <StyledSubsidyPackageService />
      <ButtonWrapper>
        <ButtonContainer>
          <StyledSubsidyLinkButton iconSize={20} link={createURLWithParameters("/invoice/it-hojo/contact/", [])}>
            導入について相談する
          </StyledSubsidyLinkButton>
          <StyledSubsidyLinkButton
            iconSize={20}
            link={createURLWithParameters("/invoice/it-hojo/entry/", [])}
            kind="primary"
          >
            IT導入補助金 対応商品に申し込む
          </StyledSubsidyLinkButton>
        </ButtonContainer>
        <StyledNotes
          notes={[
            <>
              ※IT導入補助金 対応商品へのお申込みには
              <B>「Airインボイスの無料体験を利用したことがある（または利用中）」</B>
              場合にご案内が可能です。まだの方は<AnchorLink href="#subsidySectionAppDL">こちら</AnchorLink>
              からアプリをダウンロードください。
            </>,
          ]}
        ></StyledNotes>
      </ButtonWrapper>
    </Container>
  )
}
