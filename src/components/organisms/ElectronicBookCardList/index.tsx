import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { SectionTitleH2 } from "components/atoms/SectionTitleH2"

import { PageName } from "functions/adobeAnalytics/common"
import { clAction, sendCustomLink } from "functions/adobeAnalytics/customLink"

import SearchInvoiveImage from "images/electronic-book/card-list/search-invoice.svg"
import TakePhotoImage from "images/electronic-book/card-list/take-a-photo.svg"

import { ElectronicBookConversion } from "../ElectronicBookCV"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledSectionTitleH2 = styled(SectionTitleH2)`
  font-size: 28px;
  span {
    background: linear-gradient(
      180deg,
      rgba(87, 191, 231, 0) 50%,
      rgba(225, 240, 248, 1) 50%,
      rgba(225, 240, 248, 1) 100%,
      rgba(87, 191, 231, 0) 100%
    );
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 20px;
    line-height: 32px;
    font-size: 24px;
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 48px;
  gap: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    flex-direction: column;
    align-items: center;
  }

  // バージョン14.1未満のSafariのみに適用 (gapが未対応のため)
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (not (translate: none)) {
      > div {
        &:first-child {
          margin-right: 40px;
          margin-bottom: 0;
        }
        @media (max-width: ${BREAK_POINT.w768}px) {
          &:first-child {
            margin-right: 0;
            margin-bottom: 24px;
          }
        }
      }
    }
  }
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: inline;
  }
`

const StyledLabeledStepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  border: 2px solid ${COLOR.main};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 40px 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 335px;
    padding: 32px 20px;
  }
`

const CVButtonContainer = styled.div`
  margin-top: 60px;
`

const CVTitle = styled.div`
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: ${COLOR.main};

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 24px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
    line-height: 26px;
  }
`

const ButtonContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  background-color: ${COLOR.main05};
  border-radius: 12px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 12px;
  }
`
const StyledElectronicBookConversion = styled(ElectronicBookConversion)`
  background-color: ${COLOR.main05};
  margin-top: 32px;
`

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 12px;
`

const Title = styled.p`
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  line-height: 32px;
  color: ${COLOR.main};
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
    line-height: 26px;
  }
`

const Description = styled.p`
  margin-top: 24px;
  width: 100%;
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black87};
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 12px;
  }
`

interface ElectronicBookCardListProps {
  readonly className?: string
  readonly pageName: PageName
  readonly documentRequestButtonOnClick: () => void
  readonly inquiryButtonOnClick: () => void
}

export const ElectronicBookCardList: React.VFC<ElectronicBookCardListProps> = props => {
  const flows = [
    {
      title: (
        <>
          請求書を撮影してデータ化、
          <br />
          電子データで保存
          <Br />
          （スキャナ保存）
        </>
      ),
      description: <>スマートフォンのカメラで撮影することで請求書が自動でデータ化されます。</>,
      image: {
        src: TakePhotoImage,
        alt: "イラストイメージ：請求書撮影",
        width: 264,
        height: 314,
      },
    },
    {
      title: (
        <>
          条件を指定して
          <br />
          過去の請求書データを検索
        </>
      ),
      description: "指定の請求書を「取引年月日」「取引先」「取引金額」で検索することができます。",
      image: {
        src: SearchInvoiveImage,
        alt: "イラストイメージ：請求書検索 取引先名、取引先、取引金額が検索条件に指定できる",
        width: 409,
        height: 309,
      },
    },
  ]

  return (
    <Container className={props.className}>
      <StyledSectionTitleH2>
        <span>Airインボイスは電子帳簿保存法に対応しています</span>
      </StyledSectionTitleH2>
      <Contents>
        {flows.map((flow, index) => (
          <StyledLabeledStepCard key={index} className="numbered-step-card">
            <Img src={flow.image.src} width={flow.image.width} height={flow.image.height} alt={flow.image.alt} />
            <Title>{flow.title}</Title>
            <Description>{flow.description}</Description>
          </StyledLabeledStepCard>
        ))}
      </Contents>
      <CVButtonContainer>
        <CVTitle>
          Airインボイスの電子帳簿保存法対応
          <Br />
          について詳しく知りたい方へ
        </CVTitle>
        <ButtonContainer>
          <StyledElectronicBookConversion
            className="electronic-book-CV"
            documentRequestButtonOnClick={() => sendCustomLink(PageName.ElectronicBook, clAction.DLDocument)}
            inquiryButtonOnClick={() => sendCustomLink(PageName.ElectronicBook, clAction.Question)}
          />
        </ButtonContainer>
      </CVButtonContainer>
    </Container>
  )
}
