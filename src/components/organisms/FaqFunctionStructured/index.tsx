import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled, { css } from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT, CONTENTS_MAX_WIDTH_PX } from "components/sizes"

import { SvgBottomArrowIcon } from "components/atoms/Icon/BottomArrowIcon"
import { SvgLinkIcon } from "components/atoms/Icon/LinkIcon"
import { SectionTitleH2 } from "components/atoms/SectionTitleH2"

import { toggleAccordion, closeAccordion } from "functions/accordion"

const Container = styled.div``

const QuestionAndAnswerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
  }
`

const QuestionAndAnswerItem = styled.li`
  width: 100%;
  max-width: ${CONTENTS_MAX_WIDTH_PX}px;
  border-bottom: 1px solid #eee;
`

const IconStyle = css`
  display: flex;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  color: ${COLOR.main};
  font-size: 20px;
  line-height: 26px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
`

const QuestionIcon = styled.div`
  ${IconStyle}
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLOR.main};
  border-radius: 100%;
`

const Arrow = styled.span`
  display: flex;
  align-items: center;
  color: ${COLOR.black60};
  transform: rotate(0deg);
  transition: 0.3s;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-left: 13px;
  }
`

const QuestionTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 12px;
  color: ${COLOR.black87};
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  transition: 0.3s;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 14px;
    line-height: 24px;
  }
`

const AnswerContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: 0.3s;
`

const AnswerContents = styled.div`
  display: flex;
  align-items: flex-start;
`

const AnswerIcon = styled.div`
  ${IconStyle}
  @media (min-width: ${BREAK_POINT.w769}px) {
    padding-left: 12px; // Questionのアイコンと位置を調整するために指定
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
    width: 16px;
  }
`

const AnswerInner = styled.div`
  width: 100%;
  background-color: ${COLOR.main05};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 20px 16px;
  }
`

const AnswerTextInner = styled.div`
  display: flex;
`

const AnswerTextItem = styled.div`
  color: ${COLOR.black87};
  font-size: 16px;
  line-height: 26px;
  white-space: pre-wrap;
  margin-left: 18px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 14px;
    line-height: 24px;
    margin-left: 20px;
  }
`

const AnswerTitle = styled.p`
  margin-bottom: 26px;
`

const AnswerText = styled.p`
  + ${AnswerTitle} {
    margin-top: 26px;
    @media (max-width: ${BREAK_POINT.w768}px) {
      margin-top: 24px;
    }
  }
`

const QuestionContainer = styled.button`
  display: flex;
  align-items: baseline;
  width: 100%;
  padding: 18px 16px 24px 23px;
  cursor: pointer;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 21px 0 23px 8px;
  }
  @media (hover: hover) {
    &:hover {
      ${QuestionTitle} {
        color: ${COLOR.main};
      }
      ${Arrow} {
        color: ${COLOR.main};
      }
    }

    &.rotate {
      &:hover {
        ${QuestionTitle} {
          color: ${COLOR.black87};
        }
        ${Arrow} {
          color: ${COLOR.black60};
        }
      }
    }
  }

  &.rotate {
    ${Arrow} {
      transform: rotate(-180deg);
    }
  }

  &.active {
    + ${AnswerContainer} {
      height: auto;
      transition: 0.3s;
    }
  }
`

const AnswerButtonInner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

const AnswerCloseButton = styled.a`
  position: relative;
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.blueCerulean};
  text-decoration: none;
  padding-left: 15px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: "";
    background-color: ${COLOR.blueCerulean};
    width: 10px;
    height: 1px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

const QuestionAndAnswerLink = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0 29px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin: 24px 0 0;
  }
`

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${COLOR.blueCerulean};
  text-decoration: underline;
  line-height: 26px;
  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
  svg {
    margin-left: 4px;
  }
`

interface FaqFunctionStructuredProps {
  readonly className?: string
}

export const FaqFunctionStructured: React.VFC<FaqFunctionStructuredProps> = props => {
  const breakpoint = useBreakpoint()

  // FAQアコーディオン 構造化マークアップ（microdata）
  return (
    <Container className={props.className} itemScope itemType="https://schema.org/FAQPage">
      <SectionTitleH2>よくある質問</SectionTitleH2>
      <QuestionAndAnswerList>
        <QuestionAndAnswerItem itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <QuestionContainer type="button" onClick={toggleAccordion}>
            <QuestionIcon>Q</QuestionIcon>
            <QuestionTitle itemProp="name">
              取引先に振り込まれるタイミングはいつですか？
              <Arrow>
                <SvgBottomArrowIcon size={15} />
              </Arrow>
            </QuestionTitle>
          </QuestionContainer>
          <AnswerContainer
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
            className="jsTargetContainer"
          >
            <AnswerContents>
              <AnswerInner>
                <AnswerTextInner>
                  <AnswerIcon>A.</AnswerIcon>
                  <AnswerTextItem itemProp="text">
                    <AnswerTitle>振込先の金融機関の営業時間になったら即時、振込みが実行されます。</AnswerTitle>
                    <AnswerText>
                      振込予定日が当日の場合、振込先の金融機関の営業時間内であれば即時、振込みが実行されます。営業時間外の場合は、翌営業時間帯に振込みが実行されます。
                    </AnswerText>
                  </AnswerTextItem>
                </AnswerTextInner>
                {breakpoint.sp && (
                  <AnswerButtonInner>
                    <AnswerCloseButton onClick={closeAccordion}>回答を閉じる </AnswerCloseButton>
                  </AnswerButtonInner>
                )}
              </AnswerInner>
            </AnswerContents>
          </AnswerContainer>
        </QuestionAndAnswerItem>
        <QuestionAndAnswerItem itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <QuestionContainer type="button" onClick={toggleAccordion}>
            <QuestionIcon>Q</QuestionIcon>
            <QuestionTitle itemProp="name">
              振込手数料の負担元を選択することはできますか？
              <Arrow>
                <SvgBottomArrowIcon size={15} />
              </Arrow>
            </QuestionTitle>
          </QuestionContainer>
          <AnswerContainer
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
            className="jsTargetContainer"
          >
            <AnswerContents>
              <AnswerInner>
                <AnswerTextInner>
                  <AnswerIcon>A.</AnswerIcon>
                  <AnswerTextItem itemProp="text">
                    <AnswerTitle>
                      はい。手数料をお客様ご自身で負担するか、お取引先が負担するかを、選択することができます。
                    </AnswerTitle>
                    <AnswerText>
                      「￥〇〇以上の場合先方負担」など、振込金額によって手数料の負担元を変える設定も可能です。
                    </AnswerText>
                  </AnswerTextItem>
                </AnswerTextInner>
                {breakpoint.sp && (
                  <AnswerButtonInner>
                    <AnswerCloseButton onClick={closeAccordion}>回答を閉じる </AnswerCloseButton>
                  </AnswerButtonInner>
                )}
              </AnswerInner>
            </AnswerContents>
          </AnswerContainer>
        </QuestionAndAnswerItem>
        <QuestionAndAnswerItem itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <QuestionContainer type="button" onClick={toggleAccordion}>
            <QuestionIcon>Q</QuestionIcon>
            <QuestionTitle itemProp="name">
              会計士や税理士へのデータ共有はどうしたらいいですか？
              <Arrow>
                <SvgBottomArrowIcon size={15} />
              </Arrow>
            </QuestionTitle>
          </QuestionContainer>
          <AnswerContainer
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
            className="jsTargetContainer"
          >
            <AnswerContents>
              <AnswerInner>
                <AnswerTextInner>
                  <AnswerIcon>A.</AnswerIcon>
                  <AnswerTextItem itemProp="text">
                    <AnswerTitle>
                      請求書のデータと出金履歴（振込実績） は、アプリで専用URLを発行することで共有可能です。
                    </AnswerTitle>
                    <AnswerText>会計・税理士事務所にURLを送るだけで請求データ・出金履歴の共有が完了します。</AnswerText>
                  </AnswerTextItem>
                </AnswerTextInner>
                {breakpoint.sp && (
                  <AnswerButtonInner>
                    <AnswerCloseButton onClick={closeAccordion}>回答を閉じる </AnswerCloseButton>
                  </AnswerButtonInner>
                )}
              </AnswerInner>
            </AnswerContents>
          </AnswerContainer>
        </QuestionAndAnswerItem>
      </QuestionAndAnswerList>
      <QuestionAndAnswerLink>
        <ExternalLink href="https://faq.airinvoice.jp/" target="_blank">
          よくある質問をもっと見る
          <SvgLinkIcon size={13} />
        </ExternalLink>
      </QuestionAndAnswerLink>
    </Container>
  )
}
