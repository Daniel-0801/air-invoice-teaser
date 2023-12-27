import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { ExternalLinkButton } from "components/atoms/ExternalLinkButton"
import { LinkWithNewTabIcon } from "components/molecules/LinkWithNewTabIcon"

import { PageName } from "functions/adobeAnalytics/common"
import { createURLWithParameters, Parameter } from "functions/url"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px -1px ${COLOR.grayGallery}, inset 0 1px ${COLOR.grayGallery};

  @media (max-width: ${BREAK_POINT.w768}px) {
    box-shadow: inset 0px -1px ${COLOR.grayGallery};
  }
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  & + & {
    width: 380px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 335px;

    & + & {
      width: 335px;
      margin-left: 0;
    }
  }
`

const ButtonTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.black60};
`

const ButtonTitleRow = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
    align-items: center;
    // margin-top: 20px; IT導入補助金復活後にコメントアウトを外す
  }
`

const ConfirmationOfTerms = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;
`

const TextBeforeExternalLink = styled.span`
  font-size: 12px;
  line-height: 14px;
  margin-right: 4px;
  color: ${COLOR.black60};
`

const TextAfterExternalLink = styled.span`
  font-size: 12px;
  line-height: 14px;
  margin-left: 4px;
  color: ${COLOR.black60};
`

const StyledExternalLinkButton = styled(ExternalLinkButton)`
  width: max(380px, 100%);
  margin-top: 12px;
  font-size: 20px;
  line-height: 26px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
    line-height: 20px;
  }
`

interface PaidVersionApplicationProps {
  readonly className?: string
  readonly pageName: PageName
  readonly clientId: string
  readonly sectionNumber: number
  readonly termsOnClick: () => void
  readonly paidVersionApplicationOnClick: () => void
}

export const PaidVersionApplication: React.VFC<PaidVersionApplicationProps> = props => {
  const TermOfUseParameter: Parameter[] = [
    {
      key: "ref",
      value: props.pageName + "_termsofuse" + String(props.sectionNumber),
    },
  ]

  const plfBaseUrl = process.env.GATSBY_AIR_PLF_URL + "apply/"
  const parameters: Parameter[] = [
    {
      key: "goodsCd",
      value: "31247",
    },
    {
      key: "planCd",
      value: "N001",
    },
    {
      key: "serviceCd",
      value: "00066",
    },
    {
      key: "client_id",
      value: props.clientId,
    },
    {
      key: "route",
      value: "c",
    },
  ]

  return (
    <Container className={props.className}>
      <ColumnContainer>
        <ButtonTitleRow>
          <ButtonTitle>月額払いですぐ利用したい方</ButtonTitle>
        </ButtonTitleRow>
        <StyledExternalLinkButton
          className="external-link-button"
          link={createURLWithParameters(plfBaseUrl, parameters)}
          onClick={props.paidVersionApplicationOnClick}
        >
          有料申込みする
        </StyledExternalLinkButton>
        <ConfirmationOfTerms>
          <TextBeforeExternalLink>このページの内容と</TextBeforeExternalLink>
          <LinkWithNewTabIcon
            text="利用規約"
            link={createURLWithParameters("/invoice/terms/", TermOfUseParameter)}
            onClick={props.termsOnClick}
          />
          <TextAfterExternalLink>に同意した上でお申込みください。</TextAfterExternalLink>
        </ConfirmationOfTerms>
      </ColumnContainer>
    </Container>
  )
}
