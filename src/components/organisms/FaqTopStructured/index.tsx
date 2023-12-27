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

const AnswerTitle = styled.h3`
  font-weight: 600;
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

const Link = styled.a`
  color: ${COLOR.blueCerulean};
  text-decoration: underline;
  &:hover {
    opacity: 0.6;
    transition: 0.3s;
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

interface FaqTopStructuredProps {
  readonly className?: string
}

export const FaqTopStructured: React.VFC<FaqTopStructuredProps> = props => {
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
              「Airインボイス」とは、どのようなサービスですか？
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
                    <AnswerTitle>振込も保管もラクになる請求書支払アプリです</AnswerTitle>
                    <AnswerText>
                      「Airインボイス」は、振込も保管もラクになる請求書支払アプリです。請求書をスマホで撮影すると、アプリが振込に必要な情報を自動でデータ化し、振込予約・実行までがスマホひとつで可能となります。
                    </AnswerText>
                    <AnswerTitle>まとめて振込予約ができます</AnswerTitle>
                    <AnswerText>
                      振込先や振込指定日が異なっていても、まとめて振込予約が可能となり、入金専用口座に事前入金することで、自動で振込みができます。振込手数料は業界最安値を実現しています。（※1）
                    </AnswerText>
                    <AnswerTitle>ご利用者様からうれしい声をいただいています</AnswerTitle>
                    <AnswerText>
                      ご利用中の方からは、「事務作業にかけていた時間が減り、お店のことを考える時間が増えた」
                      <br />
                      「業務の隙間時間に、スマホで撮影するだけなので、請求書の整理や振込みを忘れなくなった」「銀行まで振込みに行く必要が無くなったので、手間が減り助かっている」などの声をいただいています。
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
              どんな機能がありますか？
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
                    <AnswerTitle>請求書を自動で、まとめて振込み</AnswerTitle>
                    <AnswerText>
                      スマホの専用アプリで請求書を撮影すると、振込みに必要な情報をデータ化して、即時または予約により、振込みが行えます。支払先や銀行が異なっていても、複数枚の請求書を選択してまとめて振り込めます。
                    </AnswerText>
                    <AnswerTitle>請求書データの管理・共有</AnswerTitle>
                    <AnswerText>
                      請求書の一覧や振込履歴をデータ化して共有ができるので、会計・税理士事務所とのやりとりや、提出する資料作成の手間も軽減できます。
                    </AnswerText>
                    <AnswerTitle>支払い忘れアラート機能</AnswerTitle>
                    <AnswerText>
                      アプリが振込件数や支払い期日をチェックしてお知らせするので、支払い忘れや支払い遅延の心配はありません。
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
              初期導入時にかかる費用や月額費用はいくらですか？
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
                    <AnswerText>
                      初期費用0円でご利用いただけます。（※）
                      <br />
                      また、無料体験期間として利用開始月と翌月の月額料金は0円。振込手数料も業界最安値（※1）でご利用できるので、経費削減につながります。詳しくは
                      <Link href="/invoice/cost/">費用・料金</Link>
                      をご覧ください。
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
