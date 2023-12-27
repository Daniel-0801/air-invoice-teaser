import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { Notes } from "components/molecules/Notes"

import ApplicationProcedurePCImage from "images/common/subsidy-application-procedure_pc.svg"
import ApplicationProcedureSPImage from "images/common/subsidy-application-procedure_sp.svg"

const Container = styled.div`
  background: ${COLOR.main05};
  box-shadow: inset 0px -1px 0px ${COLOR.grayGallery};
  padding: 68px 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 0;
  }
`

const ContentTitle = styled.h1`
  width: fit-content;
  margin: 0 auto;
  color: ${COLOR.main};
  font-size: 32px;
  line-height: 36px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 28px;
  }
`

const ContentDescription = styled.div`
  margin: 24px auto 0;
  padding: 0 41px;
  text-align: center;
  color: ${COLOR.black87};
  font-size: 14px;
  line-height: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 12px auto 0;
    text-align: left;
  }
`

const ContentImg = styled.img`
  display: block;
  margin: 48px auto 0;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 32px auto 0;
  }
`

const StyledNotes = styled(Notes)`
  width: fit-content;
  margin: 48px auto 0;
  padding: 0 20px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 24px auto 0;
  }
`

interface SubsidySectionAboutProps {
  readonly className?: string
}

export const SubsidySectionAbout: React.VFC<SubsidySectionAboutProps> = props => {
  const { className } = props
  const breakpoints = useBreakpoint()
  return (
    <Container className={className}>
      <ContentTitle>IT導入補助金とは</ContentTitle>
      <ContentDescription>
        <p>IT導入補助金は、中小企業庁が支援する補助金制度（サービス等生産性向上IT導入支援事業）です。</p>
        <p>
          中小企業・小規模事業者等のみなさまが自社の課題やニーズに合ったITツールを導入する経費の一部を補助することで、
        </p>
        <p>業務効率化・売上アップをサポートするものです。</p>
      </ContentDescription>
      {breakpoints.sp ? (
        <ContentImg src={ApplicationProcedureSPImage} alt="IT導入補助金交付のフロー" />
      ) : (
        <ContentImg src={ApplicationProcedurePCImage} alt="IT導入補助金交付のフロー" />
      )}
      <StyledNotes
        className="notes"
        notes={[
          "※申請手続きおよび導入後のアフターフォローは、弊社が幹事を務めるABTコンソーシアム（共同事業体）がご支援いたします。",
        ]}
      />
    </Container>
  )
}
