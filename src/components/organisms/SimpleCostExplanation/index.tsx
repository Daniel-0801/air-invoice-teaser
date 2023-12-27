import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { BREAK_POINT } from "components/sizes"

import { BorderedText } from "components/atoms/BorderedText"
import { SectionDescription } from "components/atoms/SectionDescription"
import { SectionTitleH3 } from "components/atoms/SectionTitleH3"
import { Notes } from "components/molecules/Notes"

import MonthlyCostPCImage from "images/cost/monthly-cost_pc.svg"
import MonthlyCostSPImage from "images/cost/monthly-cost_sp.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface SimpleCostExplanationProps {
  readonly className?: string
  readonly isShort?: boolean
}

export const SimpleCostExplanation: React.VFC<SimpleCostExplanationProps> = props => {
  const { className, isShort = false } = props

  return <Container className={className}>{isShort ? <Short /> : <Normal />}</Container>
}

const StyledSectionDescription = styled(SectionDescription)`
  margin-top: 24px;
`

const StyledNotes = styled(Notes)`
  margin-top: 8px;
`

const MonthlyCostImg = styled.img`
  width: min(780px, 100%);
  height: auto;
  margin-top: 48px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: min(335px, 100%);
    height: auto;
  }
`

const MonthlyCostImg_Short = styled.img`
  width: min(474px, 100%);
  height: auto;
  margin-top: 48px;
`

const StyledBorderedText = styled(BorderedText)`
  margin-top: 16px;
  max-width: 474px;
`

const Normal: React.VFC = () => {
  const breakpoints = useBreakpoint()

  return (
    <>
      <SectionTitleH3>料金はシンプル</SectionTitleH3>
      <StyledSectionDescription className="section-description">
        初期費用0円でご利用いただけます。
      </StyledSectionDescription>
      <StyledNotes className="notes" notes={["※使用機器はご自身で用意いただく必要があります。"]} />
      {breakpoints.sp ? (
        <MonthlyCostImg src={MonthlyCostSPImage} width="780" height="111" alt="１店舗あたり月額5500円" />
      ) : (
        <MonthlyCostImg src={MonthlyCostPCImage} width="335" height="144" alt="１店舗あたり月額5500円" />
      )}
      <StyledBorderedText className="bordered-text">※振込手数料は別途かかります。</StyledBorderedText>
    </>
  )
}

const Short: React.VFC = () => {
  return (
    <>
      <SectionTitleH3>料金はシンプル</SectionTitleH3>
      <MonthlyCostImg_Short src={MonthlyCostPCImage} width="780" height="111" alt="１店舗あたり月額5500円" />
      <StyledBorderedText className="bordered-text">※振込手数料は別途かかります。</StyledBorderedText>
    </>
  )
}
