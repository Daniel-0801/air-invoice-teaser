import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { BREAK_POINT } from "components/sizes"

import { AppStoreButtonCostUpperRow } from "components/atoms/AppStoreButtonCostUpperRow"
import { SectionDescription } from "components/atoms/SectionDescription"
import { SectionTitleH4 } from "components/atoms/SectionTitleH4"

import QRImage from "images/common/qr-cost-upper.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSectionTitleH4 = styled(SectionTitleH4)`
  font-weight: bold;
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
  }
`

const StyledSectionDescription = styled(SectionDescription)`
  font-weight: bold;
  margin-top: 24px;
`

const DownloadLead = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
  }
`

const QRImg = styled.img`
  margin-right: 44px;
`

const AppStoreButtonCostUpperRowContainer = styled.div`
  width: 215px;
  height: auto;
  @media (max-width: 255px) {
    // width(215px) + padding(20 * 2)
    width: 100%;
  }
`

interface AppDownloadCostUpperProps {
  readonly className?: string
  readonly appStoreButtonOnClick: () => void
}

export const AppDownloadCostUpper: React.VFC<AppDownloadCostUpperProps> = props => {
  const breakpoints = useBreakpoint()
  return (
    <Container className={props.className}>
      <StyledSectionTitleH4 className="section-title" color={"white"}>
        Airインボイスを
        <Br />
        今すぐダウンロード
      </StyledSectionTitleH4>
      <StyledSectionDescription className="section-description" color="white">
        初めての方でもカンタンに
        <Br />
        ご利用いただけます。
      </StyledSectionDescription>
      <DownloadLead>
        {!breakpoints.sp && <QRImg src={QRImage} width="150" height="150" alt="AppStoreのQRコード" />}
        <AppStoreButtonCostUpperRowContainer>
          <AppStoreButtonCostUpperRow className="app-store-button" onClick={props.appStoreButtonOnClick} />
        </AppStoreButtonCostUpperRowContainer>
      </DownloadLead>
    </Container>
  )
}
