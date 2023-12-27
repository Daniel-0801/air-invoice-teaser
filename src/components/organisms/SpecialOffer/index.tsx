import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled, { css } from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { BorderedText } from "components/atoms/BorderedText"
import { SectionTitleH4 } from "components/atoms/SectionTitleH4"
import { Notes } from "components/molecules/Notes"

import SpecialOfferImage from "images/apply/special-offer.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Explanation = styled.div`
  text-align: center;
  margin-top: 48px;
`

const StyleExplanation = css`
  font-size: 24px;
  line-height: 32px;
  color: ${COLOR.black87};
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 16px;
    line-height: 26px;
  }
`

const ConditionText = styled.p`
  ${StyleExplanation}
`

const SpecialOfferText = styled.p`
  ${StyleExplanation}
  font-weight: bold;
`

const FurtherSpecialOfferSpan = styled.span`
  color: ${COLOR.orangeClementine};
`

const StyledBorderedText = styled(BorderedText)`
  width: 480px;
  margin: 24px auto 0;
  line-height: 18px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 100%;
  }
`

const StyledNotes_Example = styled(Notes)`
  margin-top: 24px;
`

const ImageContainer = styled.div`
  margin-top: 24px;
  text-align: center;
`

const StyledNotes = styled(Notes)`
  margin-top: 8px;
  text-align: center;
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

interface SpecialOfferProps {
  readonly className?: string
}

export const SpecialOffer: React.VFC<SpecialOfferProps> = props => {
  const breakpoint = useBreakpoint()
  const noteBorderText = "※振込手数料は無料体験期間中も別途かかります。"
  const noteBorderTextSP = "※振込手数料は無料体験期間中も\n別途かかります。"
  return (
    <Container className={props.className}>
      <SectionTitleH4>お申込み特典について</SectionTitleH4>
      <Explanation>
        <ConditionText>無料体験期間中にお申込みいただいた場合、</ConditionText>
        <SpecialOfferText>
          最大2ヶ月の無料体験期間（利用開始月＋翌月）に加えて、
          <br />
          <FurtherSpecialOfferSpan>さらに1ヶ月が無料</FurtherSpecialOfferSpan>になります。
        </SpecialOfferText>
        <StyledBorderedText>{breakpoint.sp ? noteBorderTextSP : noteBorderText}</StyledBorderedText>
      </Explanation>
      <StyledNotes_Example
        className="notes"
        notes={[
          "例）5月13日にAirインボイスのご利用を開始された場合、5月と6月が無料体験期間です。",
          "6月30日までにご利用申込みいただいた場合、さらに7月がお申込み特典として無料になります。",
          "請求対象となるのは8月のご利用分からとなります。",
        ]}
        marginBetweenNotes="8px"
      />
      <ImageContainer>
        <Img src={SpecialOfferImage} width={818} height={278} alt="申し込み特典" />
        {breakpoint.sp && <StyledNotes className="notes" notes={["※ピンチアウトで拡大できます"]} />}
      </ImageContainer>
    </Container>
  )
}
