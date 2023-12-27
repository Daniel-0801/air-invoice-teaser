import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { ExternalLink } from "components/atoms/ExternalLink"
import { SectionDescription } from "components/atoms/SectionDescription"
import { SectionTitleH2 } from "components/atoms/SectionTitleH2"
import { GuidanceByTarget } from "components/molecules/GuidanceByTarget"

import { PageName } from "functions/adobeAnalytics/common"
import { createURLWithParameters, Parameter } from "functions/url"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
  }
`
const StyledSectionDescription = styled(SectionDescription)`
  margin-top: 24px;
`

const GuidanceByTargetContainer = styled.div`
  margin-top: 32px;
`

const FAQ = styled.div`
  margin-top: 32px;
  color: ${COLOR.black87};
  text-align: center;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
  }
`
const StyledExternalLink = styled(ExternalLink)`
  color: ${COLOR.main};
  text-decoration: underline;
`

interface PromotionProps {
  readonly className?: string
  readonly downloadDocumentOnClick: () => void
  readonly questionOnClick: () => void
}

export const DetailedGuide: React.VFC<PromotionProps> = props => {
  const parameters: Parameter[] = [
    {
      key: "ref",
      value: PageName.Common + "_detailedguide",
    },
  ]

  return (
    <Container className={props.className}>
      <SectionTitleH2>
        Airインボイスを
        <Br />
        詳しく知りたい方
      </SectionTitleH2>
      <StyledSectionDescription className="section-description">
        導入に関する疑問や日々の業務でお困りの際は、下記をご覧ください。
      </StyledSectionDescription>
      <GuidanceByTargetContainer>
        <GuidanceByTarget
          targetUser={"新規導入の方"}
          title={"Airインボイス導入資料"}
          description={"導入の参考資料を無料でダウンロードいただけます。お気軽にご覧ください。"}
          buttonText={"資料ダウンロード"}
          link={createURLWithParameters("/document_request/", parameters)}
          onClick={props.downloadDocumentOnClick}
        />
      </GuidanceByTargetContainer>
      <FAQ>
        初期設定や操作に関しての、
        <Br />
        よくあるご質問は
        <StyledExternalLink
          className="external-link"
          link={"https://faq.airinvoice.jp/"}
          onClick={props.questionOnClick}
        >
          こちら
        </StyledExternalLink>
      </FAQ>
    </Container>
  )
}
