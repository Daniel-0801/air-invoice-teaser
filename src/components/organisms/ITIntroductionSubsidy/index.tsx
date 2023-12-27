import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT, CONTENTS_MAX_WIDTH_PX } from "components/sizes"

import { PageNavigationButton } from "components/atoms/PageNavigationButton"
import { Notes } from "components/molecules/Notes"

import ApplicationProcedurePCImage from "images/common/subsidy-application-procedure_pc.svg"
import ApplicationProcedureSPImage from "images/common/subsidy-application-procedure_sp.svg"
import TitlePCImage from "images/common/subsidy-title_pc.svg"
import TitleSPImage from "images/common/subsidy-title_sp.svg"

const Container = styled.div`
  background-color: ${COLOR.main05};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleImg = styled.img`
  max-width: 100%;
  height: auto;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
  background: ${COLOR.white};
  border-radius: 12px;
  padding: 48px 20px;
  margin: 48px 0;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 32px 20px;
  }
`

const ContentTitle = styled.h4`
  color: ${COLOR.main};
  font-size: 24px;
  font-weight: normal;
  line-height: 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
  }
`

const ContentDiscription = styled.p`
  text-align: center;
  color: ${COLOR.black87};
  font-size: 14px;
  line-height: 24px;
  margin-top: 24px;
  max-width: 770px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 8px;
  }
`

const ContentImg = styled.img`
  margin-top: 48px;
  max-width: 100%;
  height: auto;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
  }
`

const StyledNotes = styled(Notes)`
  margin-top: 48px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 24px;
  }
`

const PageNavigationButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 48px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
  }
`

const StyledPageNavigationButton = styled(PageNavigationButton)`
  font-size: 20px;
  line-height: 22px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 16px;
    line-height: 18px;
  }
`

export type Kind = "cost" | "apply"

interface ITIntroductionSubsidyProps {
  readonly className?: string
  readonly kind?: Kind
  readonly navigationButtonOnClick: () => void
}

export const ITIntroductionSubsidy: React.VFC<ITIntroductionSubsidyProps> = props => {
  const { className, kind = "cost" } = props
  const breakpoints = useBreakpoint()
  return (
    <Container className={className}>
      {breakpoints.sp ? (
        <TitleImg
          src={TitleSPImage}
          width={335}
          height={104}
          alt="さらに「IT導入補助金」のご活用により月額利用料が最大2年分の補助で1/4の実質費用負担に。"
        />
      ) : (
        <TitleImg
          src={TitlePCImage}
          width={968}
          height={143}
          alt="さらに「IT導入補助金」のご活用により月額利用料が最大2年分の補助で1/4の実質費用負担に。"
        />
      )}
      <Contents>
        <ContentTitle>IT導入補助金とは</ContentTitle>
        <ContentDiscription>
          IT導入補助金は、中小企業庁が支援する補助金制度（サービス等生産性向上IT導入支援事業）です。
          <br />
          中小企業・小規模事業者等のみなさまが自社の課題やニーズに合ったITツールを導入する経費の一部を補助することで、
          <br />
          業務効率化・売上アップをサポートするものです。
        </ContentDiscription>
        {breakpoints.sp ? (
          <ContentImg src={ApplicationProcedureSPImage} width={278} height={148} alt="IT導入補助金交付のフロー" />
        ) : (
          <ContentImg src={ApplicationProcedurePCImage} width={394} height={186} alt="IT導入補助金交付のフロー" />
        )}
        <StyledNotes
          className="notes"
          notes={[
            "※申請手続き及び導入後のアフターフォローは、弊社が幹事を務めるABTコンソーシアム（共同事業体）がご支援いたします。",
          ]}
        />
        {kind == "cost" && (
          <PageNavigationButtonContainer>
            <StyledPageNavigationButton
              className="page-navigation-button"
              link="/it-hojo/"
              onClick={props.navigationButtonOnClick}
            >
              IT導入補助金活用についてみる
            </StyledPageNavigationButton>
          </PageNavigationButtonContainer>
        )}
      </Contents>
    </Container>
  )
}
