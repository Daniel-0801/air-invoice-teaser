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
import LogoImage from "images/top/key-visual/invoice-logo_sp.png"
import KeyVisualImage from "images/top/key-visual/key-visual_sp_202304b.png"
import AppealIcon1 from "images/top/key-visual/photo.svg"
import AppealIcon2 from "images/top/key-visual/start.svg"

const Container = styled.div`
  flex-direction: column;
`

const KeyVisualB = styled.div`
  height: 624px;
  padding: 30px 16px 0 16px;
  position: relative;
  // 背景画像
  background-repeat: no-repeat;
  background-image: url(${KeyVisualImage});
  background-position: 50% 20%;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.3);
  //background-blend-mode: lighten;
`

const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const TitleAndLogoContainer = styled.div`
  width: min(320px, 100%);
  display: flex;
  flex-direction: column;
`

const Bluelabels = styled.div`
  display: flex;
  margin-bottom: 6px;
`

const BlueLabel = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 4px 16px;
  color: #fff;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  font-size: 12px;
  background-color: ${COLOR.main};
  border-radius: 4px;
  &:nth-child(2) {
    margin-left: 9px;
  }
`

const StyledTitle = styled(SectionTitleH1)`
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #20aee5;
  text-align: left;
`

const LogoAndPatentContainer = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`

const LogoImg = styled.img`
  max-width: 80%;
  height: auto;
`

const Patent = styled.span`
  margin-left: 12px;
  padding: 6px 8px;
  font-size: 8px;
  line-height: 10px;
  color: ${COLOR.black60};
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${COLOR.black60};
`

const Appeal = styled.div`
  display: block;
  width: min(320px, 100%);
  margin: 32px auto 24px;
`

const AppealUl = styled.ul`
  display: block;
  height: 60px;
`

const AppealLi = styled.li`
  display: block;
  height: 64px;
  position: relative;
  padding-left: 61px;
  margin-bottom: 18px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Hiragino Kaku Gothic Pro";
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.87);

  &:nth-child(1):before {
    content: "";
    display: inline-block;
    width: 46px;
    height: 64px;
    background: url(${AppealIcon1}) no-repeat left center;
    border-right: 1px solid rgba(0, 0, 0, 0.87);
    position: absolute;
    left: 0;
    top: 1px;
  }
  &:nth-child(2):before {
    content: "";
    display: inline-block;
    width: 46px;
    height: 64px;
    background: url(${AppealIcon2}) no-repeat left center;
    border-right: 1px solid rgba(0, 0, 0, 0.87);
    position: absolute;
    left: 0;
    top: 1px;
  }
`
const AppealLiSpan = styled.span`
  padding: 0 4px;
  background: linear-gradient(
    180deg,
    rgba(87, 191, 231, 0) 70%,
    rgba(87, 191, 231, 1) 70%,
    rgba(87, 191, 231, 1) 100%,
    rgba(87, 191, 231, 0) 100%
  );
`

const ButtonsOfKeyVisual = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 32px;
  align-items: center;
  margin-top: 28px;

  @media (max-width: 800px) {
    justify-content: space-around;
  }
`

const SupplementOfKeyVisual = styled.div`
  padding: 0 16px 18px;
`

const StyledNotes = styled(Notes)`
  margin-bottom: 4px;
  p {
    line-height: 14px;
  }
`

const BottomLogo = styled.div`
  padding: 12px 0;
  background: #fff;
  text-align: center;
  border-bottom: 1px solid #eee;
`

const StyledDocumentRequestButtonTopFv = styled(DocumentRequestButtonTopFv)`
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 14px 0;
`

const StyledInquiryButtonOnFV = styled(InquiryButtonOnFV)`
  padding: 14px 0;
  font-size: 16px;
`

const BrTag = styled.br``

export interface SmallKeyVisualProps {
  readonly documentRequestButtonOnClick: () => void
}

export interface LargeKeyVisualProps {
  readonly inquiryButtonOnClick: () => void
}

type Props = KeyVisualInternalProps & SmallKeyVisualProps & LargeKeyVisualProps

export const SmallKeyVisual: React.VFC<Props> = props => {
  return (
    <Container>
      <KeyVisualB>
        <Contents>
          <TitleAndLogoContainer>
            <Bluelabels>
              <BlueLabel>{props.firstLabel}</BlueLabel>
              <BlueLabel>{props.secondLabel}</BlueLabel>
            </Bluelabels>
            <StyledTitle className="title">{props.title}</StyledTitle>
            <LogoAndPatentContainer>
              <LogoImg src={LogoImage} width={219} height={34} alt="Airインボイスロゴ" />
              <Patent>{props.patent}</Patent>
            </LogoAndPatentContainer>
          </TitleAndLogoContainer>
        </Contents>
        <Appeal>
          <AppealUl>
            <AppealLi>
              受け取った請求書を
              <BrTag />
              <AppealLiSpan>撮影・自動でデータ化</AppealLiSpan> し、
              <BrTag />
              手入力によるミスを削減。{" "}
            </AppealLi>
            <AppealLi>
              アプリから
              <BrTag />
              <AppealLiSpan>まとめて振込予約</AppealLiSpan> で、
              <BrTag />
              1件ずつの作業が不要に。
            </AppealLi>
          </AppealUl>
        </Appeal>
      </KeyVisualB>
      <BottomLogo>
        <img src={CompanyLogoImage} width={179} height={19} alt="PRODUCED BY RECRUIT" />
      </BottomLogo>
      <ButtonsOfKeyVisual>
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
      </ButtonsOfKeyVisual>
      <SupplementOfKeyVisual>
        <StyledNotes className="notes" notes={[props.cheapestNote]} />
        <StyledNotes className="notes" notes={[props.cheapestNote2]} />
      </SupplementOfKeyVisual>
    </Container>
  )
}
