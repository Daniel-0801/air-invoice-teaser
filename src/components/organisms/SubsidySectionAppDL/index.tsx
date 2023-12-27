import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { AppStoreButton } from "components/atoms/AppStoreButton"
import { BorderedText } from "components/atoms/BorderedText"
import { Notes } from "components/molecules/Notes"

import FreeTrialPeriodImage from "images/common/free-trial-period.svg"
import QRImage from "images/common/qr.png"

const Container = styled.div`
  background: ${COLOR.main05};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 20px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 20px 54px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 68px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
    flex-direction: column;
  }
`

const DetailContainer = styled.div`
  text-align: left;
  max-width: 480px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: none;
  }
`

const CostImg = styled.img`
  width: 100%;
  height: auto;
`

const StyledNotes = styled(Notes)`
  max-width: 465px;
  margin-top: 16px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
  }
`
const SectionTitle = styled.h1`
  color: ${COLOR.main};
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 28px;
  }
`

const StyledBorderedText = styled(BorderedText)`
  margin-top: 16px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
  }
`

const QRImg = styled.img`
  margin-right: 40px;
`

const DownloadLead = styled.div`
  display: flex;
  align-items: center;
  margin-left: 68px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
    margin-left: 0;
  }
`

const AppStoreButtonContainer = styled.div`
  width: 215px;
  height: auto;
  @media (max-width: 255px) {
    width: 100%;
  }
`

interface SubsidySectionAppDLProps {
  readonly className?: string
  readonly appStoreButtonOnClick: () => void
}

export const SubsidySectionAppDL: React.VFC<SubsidySectionAppDLProps> = props => {
  const { className, appStoreButtonOnClick } = props

  const breakpoints = useBreakpoint()

  const noteText = [
    "※無料体験期間終了後、自動で課金されることはございません。",
    "※無料体験期間を過ぎると振込機能は利用できなくなります。3ヶ月目以降も継続して振込機能をご利用いただくには有料お申込みが必要です。\n例）5月13日にAirインボイスのご利用を開始された場合、5月と6月が無料体験期間となります。",
  ]
  const noteBorderText = "※振込手数料は無料体験期間中も別途かかります。"
  const noteBorderTextSP = "※振込手数料は無料体験期間中も\n別途かかります。"
  return (
    <Container id="subsidySectionAppDL" className={className}>
      {/* IT導入補助金資料導線の遷移先 */}
      <SectionTitle>まだAirインボイスの無料体験をしていない方はこちら</SectionTitle>
      <ContentContainer>
        <DetailContainer>
          <CostImg src={FreeTrialPeriodImage} width="481" height="124" alt="無料体験期間0円" />
          <StyledNotes notes={noteText} />
          <StyledBorderedText>{breakpoints.sp ? noteBorderTextSP : noteBorderText}</StyledBorderedText>
        </DetailContainer>
        <DownloadLead>
          {!breakpoints.sp && <QRImg src={QRImage} width="150" height="150" alt="AppStoreのQRコード" />}
          <AppStoreButtonContainer>
            <AppStoreButton onClick={appStoreButtonOnClick} />
          </AppStoreButtonContainer>
        </DownloadLead>
      </ContentContainer>
    </Container>
  )
}
