import { Link, withPrefix } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { FileDownloadButton } from "components/atoms/FileDownloadButton"
import { SectionTitleH1 } from "components/atoms/SectionTitleH1"

import { PageName } from "functions/adobeAnalytics/common"
import { createURLWithParameters, Parameter } from "functions/url"

const Container = styled.div`
  text-align: center;
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
  }
`

const PromptToDownload = styled.p`
  color: ${COLOR.black60};
  margin-top: 48px;
  font-size: 14px;
  line-height: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 40px;
  }
`

const FileDownloadButtonContainer = styled.div`
  margin-top: 48px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 40px;
  }
`

const ThanksText = styled.p`
  color: ${COLOR.black60};
  margin-top: 48px;
  font-size: 14px;
  line-height: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 40px;
  }
`

const ReturnToTopContainer = styled.div`
  margin-top: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 40px;
  }
`

const ReturnToTop = styled(Link)`
  color: ${COLOR.blueCerulean};
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

interface DocumentDownloadProps {
  readonly pageName: PageName
  readonly DLDocumentOnClick: () => void
  readonly returnTopOnClick: () => void
}

export const DocumentDownload: React.VFC<DocumentDownloadProps> = props => {
  const returnTopParameters: Parameter[] = [
    {
      key: "ref",
      value: props.pageName + "_returntop",
    },
  ]
  return (
    <Container>
      <SectionTitleH1>
        Airインボイス <Br />
        資料ダウンロード
      </SectionTitleH1>
      <PromptToDownload>
        Airインボイスにご興味をお持ちいただき、ありがとうございます。
        <br />
        資料(PDF)は下記よりダウンロードお願いいたします。
      </PromptToDownload>
      <FileDownloadButtonContainer>
        <FileDownloadButton downloadFilePath={withPrefix("download/airinvoice.pdf")} onClick={props.DLDocumentOnClick}>
          資料をダウンロードする
        </FileDownloadButton>
      </FileDownloadButtonContainer>
      <ThanksText>
        ご入力いただいたメールアドレス宛てにもダウンロードURLをお送りしております。
        <br />
        導入に際して分からない点がございましたら、ヘルプデスク（0120-038-516）までお気軽にお問い合わせください。
        <br />
        今後ともAirインボイスをどうぞよろしくお願いいたします。
      </ThanksText>
      <ReturnToTopContainer>
        <ReturnToTop to={createURLWithParameters("/", returnTopParameters)} onClick={props.returnTopOnClick}>
          Airインボイス トップページに戻る
        </ReturnToTop>
      </ReturnToTopContainer>
    </Container>
  )
}
