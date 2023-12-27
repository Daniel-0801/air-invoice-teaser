import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { LinkIcon } from "components/atoms/Icon"
import { QuestionAndAnswer } from "components/molecules/QuestionAndAnswer"

import SubsidyFaqQ1PcImage from "images/common/subsidy-faq_q1_pc.svg"
import SubsidyFaqQ1SpImage from "images/common/subsidy-faq_q1_sp.svg"
import SubsidyFaqQ2PcImage from "images/common/subsidy-faq_q2_pc.svg"
import SubsidyFaqQ2SpImage from "images/common/subsidy-faq_q2_sp.svg"

interface SubsidySectionFaqProps {
  readonly className?: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 68px 20px;
  align-items: center;

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 20px 40px;
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

const Text = styled.p`
  margin-top: 24px;
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black87};

  @media (max-width: ${BREAK_POINT.w768}px) {
    text-align: center;
  }
`

const Link = styled.a`
  color: ${COLOR.blueCerulean};
  text-decoration: underline;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

const LinkIconContainer = styled.span`
  display: inline-flex;
  margin: 0 12px 0 4px;
`

const Img = styled.img`
  width: 100%;
  margin-top: 32px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 40px;
  }
`

const StyledQuestionAndAnswerQ1 = styled(QuestionAndAnswer)`
  margin-top: 64px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 40px;
  }
`

const StyledQuestionAndAnswerQ2 = styled(QuestionAndAnswer)`
  margin-top: 68px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 40px;
  }
`

export const SubsidySectionFaq: React.VFC<SubsidySectionFaqProps> = props => {
  const { className } = props
  const breakpoint = useBreakpoint()

  const linkOnClick = () => console.log("sample") // TODO:AA実装時に

  return (
    <Container className={className}>
      <SectionTitle>よくある質問</SectionTitle>
      <Text>
        最新・正式な情報は
        <Link href="https://www.it-hojo.jp/" target="_blank" rel="noopener noreferrer" onClick={linkOnClick}>
          「IT導入補助金2023」公式サイト
          <LinkIconContainer>
            <LinkIcon size={14} />
          </LinkIconContainer>
        </Link>
        でご確認ください。
      </Text>
      <div>
        <StyledQuestionAndAnswerQ1
          question="IT導入補助金を受けられる補助対象者の条件はありますか？"
          answer="下記表の資本金または従業員数の条件を満たす中小企業や小規模事業者が対象となります。"
        />
        <Img
          src={breakpoint.sp ? SubsidyFaqQ1SpImage : SubsidyFaqQ1PcImage}
          alt="IT導入補助金を受けられる補助対象者の条件"
        />
        <StyledQuestionAndAnswerQ2
          question="IT導入補助金の交付上限はありますか？"
          answer="各類型ごとに補助金の交付上限額は決まっています。以下の表をご参考ください。"
          notes={["※Airインボイスはデジタル化基盤導入類型の登録ITツールに登録申請中です。"]}
        />
        <Img src={breakpoint.sp ? SubsidyFaqQ2SpImage : SubsidyFaqQ2PcImage} alt="IT導入補助金の交付上限" />
      </div>
    </Container>
  )
}
