import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { CONTENTS_MAX_WIDTH_PX, BREAK_POINT } from "components/sizes"

import { SectionTitleH3 } from "components/atoms/SectionTitleH3"
import { Notes } from "components/molecules/Notes"

import { PageName } from "functions/adobeAnalytics/common"

import CostSimulationPCImage from "images/common/cost-simulation_pc.svg"
import CostSimulationSPImage from "images/common/cost-simulation_sp.svg"

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

const SimulationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
  background-color: ${COLOR.white};
  padding: 48px 20px;
  margin-top: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 32px 20px;
    margin-top: 26px;
  }
`

const SimulationTitle = styled.h4`
  color: ${COLOR.main};
  font-size: 24px;
  font-weight: normal;
  line-height: 32px;
  span {
    background: linear-gradient(
      180deg,
      rgba(87, 191, 231, 0) 50%,
      rgba(225, 240, 248, 1) 50%,
      rgba(225, 240, 248, 1) 100%,
      rgba(87, 191, 231, 0) 100%
    );
    &:nth-child(3) {
      background: none;
      @media (max-width: ${BREAK_POINT.w768}px) {
        background: linear-gradient(
          180deg,
          rgba(87, 191, 231, 0) 50%,
          rgba(225, 240, 248, 1) 50%,
          rgba(225, 240, 248, 1) 100%,
          rgba(87, 191, 231, 0) 100%
        );
      }
    }
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
`

const SimulationLine = styled.hr`
  display: block;
  width: 100%;
  size: 2px;
  margin: 0 auto;
  color: ${COLOR.grayGallery};
  margin-top: 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 90%;
    margin-top: 24px;
  }
`

const SimulationContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
  gap: 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
    margin-top: 24px;
  }
`

const SimulationLeftContent = styled.div`
  width: 50%;
  line-height: 26px;
  max-width: 400px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
    max-width: none;
  }
`

const SimulationContentTitle = styled.div`
  font-weight: bold;
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const SimulationContentDescription = styled.div`
  margin-top: 16px;
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const SimulationRightContent = styled.div`
  max-width: 100%;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
  }
`

const StyledNotes = styled(Notes)`
  margin-top: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 14px;
  }
`

const Img = styled.img`
  max-width: 720px;
  height: auto;
  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: 350px;
    width: 100%;
    margin: 24px auto 0;
    display: block;
  }
`

interface WithButtonProps {
  readonly className?: string
  readonly withTrasitionButton: true
  readonly pageName: PageName
  readonly transitionToCost: () => void
}

interface WithoutButtonProps {
  readonly className?: string
  readonly withTrasitionButton?: false
  readonly pageName?: never
  readonly transitionToCost?: never
}

export const LowCost: React.VFC<WithButtonProps | WithoutButtonProps> = props => {
  const breakpoints = useBreakpoint()
  const simulationNotes = [
    "※導入いただいたお客様の一例よりグラフを作成しています。\n導入効果にはお客様による差があります。",
  ]
  return (
    <Container className={props.className}>
      <SectionTitleH3>導入後の効果</SectionTitleH3>

      <SimulationContainer>
        <SimulationTitle>
          受け取った請求書の処理時間を
          <Br />
          <span>最大80％</span>
          <span>削減</span>
        </SimulationTitle>
        <SimulationLine />
        <SimulationContent>
          <SimulationLeftContent>
            <SimulationContentTitle>
              請求書の受取後のデータ入力・振込み・書類保管をラクにします。
            </SimulationContentTitle>
            <SimulationContentDescription>
              インターネットバンキングの煩わしさや、ATMでの振込作業を無くすことができ、請求書にまつわる業務時間を最大80%削減、手数料を最大75%削減できます。
            </SimulationContentDescription>
            <SimulationContentDescription>
              Airインボイスを導入してくださったお客様の中には、毎月4時間ほどかかっていた請求書処理が30分に削減された例もございます。
            </SimulationContentDescription>
          </SimulationLeftContent>
          <SimulationRightContent>
            {breakpoints.sp ? (
              <Img src={CostSimulationSPImage} width="296" height="206" alt="Airインボイス料金シミュレーション" />
            ) : (
              <Img src={CostSimulationPCImage} width="443" height="301" alt="Airインボイス料金シミュレーション" />
            )}
            <StyledNotes className="notes" notes={simulationNotes} />
          </SimulationRightContent>
        </SimulationContent>
      </SimulationContainer>
    </Container>
  )
}
