import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { BREAK_POINT } from "components/sizes"

import { BorderedText } from "components/atoms/BorderedText"
import { SectionTitleH2 } from "components/atoms/SectionTitleH2"
import { Notes } from "components/molecules/Notes"

import { PageName } from "functions/adobeAnalytics/common"

import DeviceImage from "images/common/device_cost-free.png"
import FreeTrialPeriodImage from "images/common/free-trial-period.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
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

const DeviceImg = styled.img`
  margin-left: 80px;
`

const StyledNotes = styled(Notes)`
  max-width: 465px;
  margin-top: 16px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
  }
`

const StyledBorderedText = styled(BorderedText)`
  margin-top: 16px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
  }
`

// const PageNavigationButtonContainer = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   margin-top: 48px;
// `

export const replaceNewlineCharacter = (text: string): React.ReactNode => {
  return (
    <>
      {text.split("\\n").map((t, index) => (
        <React.Fragment key={index}>
          {t} <br />
        </React.Fragment>
      ))}
    </>
  )
}

interface FreeTrialProps {
  readonly id?: string
  readonly className?: string
  readonly title: string
  readonly spTitle?: string
  readonly withTrasitionButton: true
  readonly pageName: PageName
  readonly transitionToCost: () => void
}

export const FreeTrial: React.VFC<FreeTrialProps> = props => {
  const { id, className, title, spTitle = props.title } = props

  const breakpoints = useBreakpoint()

  // const parameters: Parameter[] = [
  //   {
  //     key: "ref",
  //     value: props.pageName + "_navbutton",
  //   },
  // ]

  const noteText = [
    "※無料体験期間終了後、自動で課金されることはございません。",
    "※無料体験期間を過ぎると振込機能は利用できなくなります。3ヶ月目以降も継続して振込機能をご利用いただくには有料お申込みが必要です。\n例）5月13日にAirインボイスのご利用を開始された場合、5月と6月が無料体験期間となります。",
  ]
  const noteBorderText = "※振込手数料は無料体験期間中も別途かかります。"
  const noteBorderTextSP = "※振込手数料は無料体験期間中も\n別途かかります。"
  return (
    <Container id={id} className={className}>
      <SectionTitleH2>{breakpoints.sp ? replaceNewlineCharacter(spTitle) : title}</SectionTitleH2>
      <ContentContainer>
        <DetailContainer>
          <CostImg src={FreeTrialPeriodImage} width="481" height="124" alt="無料体験期間0円" />
          <StyledNotes className="notes" notes={noteText} />
          <StyledBorderedText className="bordered-text">
            {breakpoints.sp ? noteBorderTextSP : noteBorderText}
          </StyledBorderedText>
        </DetailContainer>
        {breakpoints.sp ? null : (
          <DeviceImg src={DeviceImage} width="138" height="277" alt="Airインボイスのアプリ画面" />
        )}
      </ContentContainer>
      {/* セクション追加後に再表示 */}
      {/* {props.withTrasitionButton && (
        <PageNavigationButtonContainer>
          <PageNavigationButton
            className="page-navigation-button"
            link={createURLWithParameters("/cost/", parameters)}
            onClick={props.transitionToCost}
          >
            費用をみる
          </PageNavigationButton>
        </PageNavigationButtonContainer>
      )} */}
    </Container>
  )
}
