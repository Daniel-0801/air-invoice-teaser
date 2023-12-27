import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React, { useState } from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import BottomArrowIcon from "components/atoms/Icon/BottomArrowIcon"

import PriceImage from "images/common/subsidy-package-price.png"
import PriceDetailSPImage from "images/common/subsidy-package-price_detail_sp.png"
import PriceSPImage from "images/common/subsidy-package-price_sp.png"

import { Notes } from "../Notes"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 64px;
  border-radius: 12px;
  background-color: ${COLOR.white};
  min-width: 1014px;
  width: 100%;
  justify-content: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 0;
    background: none;
    min-width: 334px;
  }
`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 32px 20px;
    min-width: 334px;
    border-radius: 12px;
    background-color: ${COLOR.white};
  }
`

const StyledPriceImage = styled.img`
  width: 426px;
`

const StyledPriceSPImage = styled.img`
  width: 294px;
`

const StyledPriceDetailSPImage = styled.img<{ expanded: boolean }>`
  width: 294px;
  margin-top: 24px;
  display: ${props => (props.expanded ? "block" : "none")};
`

const StyledNotes = styled(Notes)`
  margin-top: 48px;
  font-weight: normal;
  line-height: 16px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
    font-size: 12px;
    width: 100%;
  }
`

const CollapseTitleContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  place-items: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 294px;
  }
`
const CollapseTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black87};
`
const CollapseSubTitle = styled.span`
  font-size: 12px;
  line-height: 16px;
  margin-left: 8px;
  color: ${COLOR.black60};
`

const CollapseContent = styled.div`
  width: 100%;
  text-align: right;

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: none;
  }
`
const IconWrapper = styled.div<{ expanded: boolean }>`
  display: none;

  @media (max-width: ${BREAK_POINT.w768}px) {
    display: flex;
    margin-left: auto;
    align-items: center;
    color: ${COLOR.black38};
    ${props => props.expanded && "transform: scale(1, -1);"}
  }
`

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

const PriceItem = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.black87};
`

const PriceSubRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const PriceSubItem = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.black60};
`

const PricePrimaryItem = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.main};
`

interface SubsidyPackagePriceProps {
  readonly className?: string
}

export const SubsidyPackagePrice: React.VFC<SubsidyPackagePriceProps> = props => {
  const { className } = props
  const breakpoints = useBreakpoint()

  const [expanded, setExpanded] = useState(false)

  const onClick = () => setExpanded(prev => !prev)

  return (
    <Container className={className}>
      <PriceContainer>
        <FlexContainer>
          {[breakpoints.sp ? <StyledPriceSPImage src={PriceSPImage} /> : <StyledPriceImage src={PriceImage} />]}
          <CollapseTitleContainer onClick={breakpoints.sp ? onClick : () => undefined}>
            <CollapseTitle>商品内容 / 費用</CollapseTitle>
            <CollapseSubTitle>※税抜 / 店舗ごと</CollapseSubTitle>
            <IconWrapper expanded={expanded}>
              <BottomArrowIcon size={16} />
            </IconWrapper>
          </CollapseTitleContainer>
          <CollapseContent>
            <PriceRow>
              <PriceItem>Airインボイス ( 2年利用費用 )</PriceItem>
              <PriceItem>120,000円</PriceItem>
            </PriceRow>
            <PriceSubRow>
              <PriceSubItem>2年間の基本利用料に含まれるサービス機能利用</PriceSubItem>
              <PriceSubItem>( 税：12,000円 )</PriceSubItem>
            </PriceSubRow>
            <PriceRow>
              <PriceItem>最大補助額 ( 対象経費 x 最大3/4 )</PriceItem>
              <PriceItem>90,000円</PriceItem>
            </PriceRow>
            <PriceSubRow>
              <PricePrimaryItem>実質負担額</PricePrimaryItem>
              <PricePrimaryItem>42,000円</PricePrimaryItem>
            </PriceSubRow>
          </CollapseContent>
          {breakpoints.sp && <StyledPriceDetailSPImage src={PriceDetailSPImage} expanded={expanded} />}
          <StyledNotes
            notes={[
              "※新規お申込みの店舗のみ対象となります。",
              "※補助額は上限内で最大補助（クラウド利用料は3/4）が全額適用された場合となります。",
              "※振込手数料は別途かかります。詳細は資料請求またはお問い合わせにてご確認ください。",
            ]}
            marginBetweenNotes={"8px"}
            color={COLOR.black60}
          ></StyledNotes>
        </FlexContainer>
      </PriceContainer>
    </Container>
  )
}
