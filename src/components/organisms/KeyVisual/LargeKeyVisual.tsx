import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { DocumentRequestButtonTopFv } from "components/atoms/DocumentRequestButtonTopFv"
import { InquiryButtonOnFV } from "components/atoms/InquiryButtonOnFV"
import { SectionTitleH1 } from "components/atoms/SectionTitleH1"
import { Notes } from "components/molecules/Notes"
import { KeyVisualInternalProps } from "components/organisms/KeyVisual/type"

import { createURLWithParametersOnFV } from "functions/url"

import CompanyLogoImage from "images/top/key-visual/company.png"
import LogoImage from "images/top/key-visual/invoice-logo_pc.png"
import KeyVisualImage from "images/top/key-visual/key-visual_pc_202304b.png"
import AppealIcon1 from "images/top/key-visual/photo.svg"
import AppealIcon2 from "images/top/key-visual/start.svg"

const Container = styled.div`
  width: 100%;
  padding: 38px 0 0 0;

  // 背景画像
  background-repeat: no-repeat;
  background-image: url(${KeyVisualImage});
  background-position: center top -20px;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.3);
  //background-blend-mode: lighten;
`

const Contents = styled.div`
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
  flex-direction: column;
`

const Introduction = styled.div`
  display: flex;
`

const Appeal = styled.div`
  display: block;
  margin: 24px 0 24px;
  ul {
    display: block;
    height: 60px;
    li {
      display: block;
      height: 46px;
      position: relative;
      padding-left: 104px;
      margin-bottom: 18px;
      line-height: 27px;
      font-size: 18px;
      font-weight: 600;
      font-family: "Hiragino Kaku Gothic Pro";
      letter-spacing: 2px;
      color: rgba(0, 0, 0, 0.87);

      &:nth-child(1):before {
        content: "";
        display: inline-block;
        width: 96px;
        height: 48px;
        background: url(${AppealIcon1}) no-repeat left 46px center;
        border-right: 1px solid rgba(0, 0, 0, 0.87);
        position: absolute;
        left: 0;
        top: 1px;
      }
      &:nth-child(2):before {
        content: "";
        display: inline-block;
        width: 96px;
        height: 48px;
        background: url(${AppealIcon2}) no-repeat left 46px center;
        border-right: 1px solid rgba(0, 0, 0, 0.87);
        position: absolute;
        left: 0;
        top: 1px;
      }
      span {
        padding: 0 4px;
        background: linear-gradient(
          180deg,
          rgba(87, 191, 231, 0) 70%,
          rgba(87, 191, 231, 1) 70%,
          rgba(87, 191, 231, 1) 100%,
          rgba(87, 191, 231, 0) 100%
        );
      }
    }
  }
`

const StyledTitle = styled(SectionTitleH1)`
  color: ${COLOR.black87};
  margin-top: 16px;
  white-space: pre-wrap;
  text-align: left;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #20aee5;
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 45px;
`

const LogoAndPatentContainer = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: flex-end;
`

const Patent = styled.span`
  margin-left: 16px;
  margin-bottom: 8px;
  padding: 8px;
  font-size: 10px;
  line-height: 10px;
  color: ${COLOR.black60};
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${COLOR.black60};
`

const RecommendInstallContainer = styled.div`
  display: block;
  align-items: center;
  width: 585px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  margin-top: 56px;
  margin-bottom: 12px;
  padding: 24px 48px;
`

const StyledAppStoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledDocumentRequestButtonTopFv = styled(DocumentRequestButtonTopFv)`
  font-size: 16px;
`

const StyledInquiryButtonOnFV = styled(InquiryButtonOnFV)`
  white-space: nowrap;
`

const StyledNotes = styled(Notes)`
  margin-bottom: 4px;
  p {
    line-height: 14px;
  }
`

const BottomLogo = styled.div`
  padding: 12px 0;
  margin-top: 40px;
  background: #fff;
  text-align: center;
`

const Bluelabels = styled.div`
  display: flex;
`

const BlueLabel = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 4px 16px;
  color: #fff;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  font-size: 16px;
  background-color: ${COLOR.main};
  border-radius: 4px;
  &:nth-child(2) {
    margin-left: 9px;
  }
`

export interface LargeKeyVisualProps {
  readonly documentRequestButtonOnClick: () => void
  readonly inquiryButtonOnClick: () => void
}

type Props = KeyVisualInternalProps & LargeKeyVisualProps

export const LargeKeyVisual: React.VFC<Props> = props => {
  return (
    <Container>
      <Contents>
        <Introduction>
          <Detail>
            <Bluelabels>
              <BlueLabel>{props.firstLabel}</BlueLabel>
              <BlueLabel>{props.secondLabel}</BlueLabel>
            </Bluelabels>
            <StyledTitle className="title">{props.title}</StyledTitle>
            <LogoAndPatentContainer>
              <img src={LogoImage} width={393} height={63} alt="Airインボイスロゴ" />
              <Patent>{props.patent}</Patent>
            </LogoAndPatentContainer>
          </Detail>
        </Introduction>
        <Appeal>
          <ul>
            <li>
              受け取った請求書を<span>撮影・自動でデータ化</span>し、
              <br />
              手入力によるミスを削減。
            </li>
            <li>
              アプリから<span>まとめて振込予約</span>で、
              <br />
              1件ずつの作業が不要に。
            </li>
          </ul>
        </Appeal>
        <RecommendInstallContainer>
          <StyledAppStoreButtonContainer>
            <StyledDocumentRequestButtonTopFv
              className="document-request-button"
              path={createURLWithParametersOnFV("/document_request/")}
              onClick={props.documentRequestButtonOnClick}
            />
            <StyledInquiryButtonOnFV
              className="primary-button"
              path={createURLWithParametersOnFV("/inquiry/")}
              onClick={props.inquiryButtonOnClick}
            />
          </StyledAppStoreButtonContainer>
        </RecommendInstallContainer>
        <StyledNotes className="notes" notes={[props.cheapestNote]} />
        <StyledNotes className="notes" notes={[props.cheapestNote2]} />
      </Contents>
      <BottomLogo>
        <img src={CompanyLogoImage} width={179} height={19} alt="PRODUCED BY RECRUIT" />
      </BottomLogo>
    </Container>
  )
}
