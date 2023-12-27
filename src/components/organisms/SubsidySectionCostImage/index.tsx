import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { Notes } from "components/molecules/Notes"

import TitlePCImage from "images/common/subsidy-cost-image-title_pc.svg"
import TitleSPImage from "images/common/subsidy-cost-image-title_sp.svg"
import CostImagePCImage from "images/common/subsidy-cost-image_pc.png"
import CostImageSPImage from "images/common/subsidy-cost-image_sp.png"

const TitlePCWidth = "966px"
const TitleSPWidth = "335px"

const Container = styled.div`
  background-color: ${COLOR.white};
  box-shadow: inset 0px -1px 0px ${COLOR.grayGallery};
  padding: 68px 20px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 58px 20px;
  }
`

const TitleImage = styled.img`
  display: block;
  width: min(${TitlePCWidth}, 100%);
  margin: 0 auto;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: ${TitleSPWidth};
  }
`

const SimulationTitle = styled.h1`
  width: fit-content;
  color: ${COLOR.main};
  margin: 48px auto 0;
  font-size: 24px;
  line-height: 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 37px auto 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }
`

const SimulationDescription = styled.p`
  width: fit-content;
  margin: 8px auto 0;
  color: ${COLOR.main};
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`

const SimulationLine = styled.hr`
  width: 666px;
  margin: 24px auto 0;
  size: 2px;
  color: ${COLOR.grayGallery};

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: none;
  }
`
const CostImage = styled.img`
  display: block;
  width: 690px;
  margin: 24px auto 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 270px;
    margin: 37px auto 0;
  }
`

const StyledNotes = styled(Notes)`
  width: min(${TitlePCWidth}, 100%);
  margin: 42px auto 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: ${TitleSPWidth};
    margin: 37px auto 0;
  }
`

interface SubsidySectionCostImageProps {
  readonly className?: string
}

export const SubsidySectionCostImage: React.VFC<SubsidySectionCostImageProps> = props => {
  const { className } = props
  const breakpoints = useBreakpoint()

  return (
    <Container className={className}>
      {breakpoints.sp ? (
        <TitleImage src={TitleSPImage} alt="月額利用料が最大2年分の補助で1/4の実質費用負担に。" />
      ) : (
        <TitleImage src={TitlePCImage} alt="月額利用料が最大2年分の補助で1/4の実質費用負担に。" />
      )}

      <SimulationTitle>例：サービス月額利用料の実質負担額</SimulationTitle>
      <SimulationDescription>
        （IT導入補助金対応商品「Airインボイス2年利用パック」を利用した場合）
      </SimulationDescription>
      <SimulationLine />
      {breakpoints.sp ? (
        <CostImage src={CostImageSPImage} alt="Airインボイス料金シミュレーション" />
      ) : (
        <CostImage src={CostImagePCImage} alt="Airインボイス料金シミュレーション" />
      )}
      <StyledNotes
        className="notes"
        notes={[
          "※振込機能毎の振込手数料は別途かかります。",
          "※IT導入補助金の交付は、Airインボイスのクラウド月額利用料2年分のお支払いと、継続的に活用していることを証する書類等を提出・報告（事業実績報告）した後に、補助金交付手続きを経て交付されます。",
        ]}
      />
    </Container>
  )
}
