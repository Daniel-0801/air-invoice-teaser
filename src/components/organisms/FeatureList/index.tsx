import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { CircledImage } from "components/atoms/CircledImage"
import { SectionTitleH2 } from "components/atoms/SectionTitleH2"

import CheckIcon from "images/top/features/check_icon.svg"
import Trouble1Image from "images/top/features/trouble_1.svg"
import Trouble1ImageSP from "images/top/features/trouble_1_sp.svg"
import Trouble2Image from "images/top/features/trouble_2.svg"
import Trouble2ImageSP from "images/top/features/trouble_2_sp.svg"
import Trouble3Image from "images/top/features/trouble_3.svg"
import Trouble3ImageSP from "images/top/features/trouble_3_sp.svg"
import Trouble4Image from "images/top/features/trouble_4.svg"
import Trouble4ImageSP from "images/top/features/trouble_4_sp.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    display: block;
  }
`

const SectionSubtitle = styled.h3`
  color: ${COLOR.main};
  font-size: 28px;
  line-height: 36px;
  font-weight: bold;
  position: relative;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 38px;
  &:after {
    content: "";
    position: absolute;
    right: -20px;
    top: -10px;
    width: 2px;
    background-color: ${COLOR.main};
    height: 48px;
    rotate: 15deg;
    border-radius: 5px;
  }
  &:before {
    content: "";
    position: absolute;
    left: -20px;
    top: -10px;
    width: 2px;
    background-color: ${COLOR.main};
    height: 48px;
    rotate: -15deg;
    border-radius: 5px;
  }
  @media (max-width: ${BREAK_POINT.w1024}px) {
    &:after {
      top: 0;
      right: 5%;
    }
    &:before {
      top: 0;
      left: 5%;
    }
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 18px;
    line-height: 26px;
    margin-top: 16px;
    margin-bottom: 16px;
    &:after {
      right: 5%;
    }
    &:before {
      left: 5%;
    }
  }
`

const List = styled.ul`
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: 335px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 0;
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
    max-width: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`

const StyledNotes = styled.p`
  font-size: 12px;
  margin-top: 24px;
  max-width: 960px;
  color: ${COLOR.black60};
  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: 335px;
    margin-top: 32px;
  }
  @media (max-width: ${BREAK_POINT.w1024}px) {
    max-width: 100%;
  }
`

const NoteMark = styled.span`
  font-size: 12px;
  margin-left: 4px;
`

const ItemDescription = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 24px;
  margin-top: 16px;
  text-align: left;
  color: ${COLOR.black};
  font-weight: normal;
  padding-left: 8px;
  &::before {
    content: "";
    position: absolute;
    left: -10px;
    width: 14px;
    height: 24px;
    background: url(${CheckIcon}) no-repeat 0 0;
    background-size: 14px 24px;
  }
  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 26px;
    font-size: 16px;
  }
`

const DescriptionBold = styled.span`
  font-weight: bold;
`

const ListItem = styled.div`
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const ItemAlign = styled.div`
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: block;
  }
`

interface FeatureListProps {
  readonly className?: string
}

export const FeatureList: React.VFC<FeatureListProps> = props => {
  const { className } = props

  const breakpoint = useBreakpoint()
  const imageWidth = breakpoint.sp ? 334 : 220
  const imageHeight = breakpoint.sp ? 379 : 308

  const items = [
    {
      image: {
        src: breakpoint.sp ? Trouble1ImageSP : Trouble1Image,
        alt: "お悩み1 手作業による振込みで手間や入力ミスの発生",
        size: imageWidth,
        height: imageHeight,
      },
      children: <ItemAlign>手作業を大幅削減</ItemAlign>,
      firstMerit: (
        <>
          <DescriptionBold>スマホで請求書の写真を撮るだけ</DescriptionBold>で、金額や振込先が自動で読み込まれます。
        </>
      ),
      secondMerit: "ネットバンク入力時の手間削減や金額ミスの心配を無くすことができます。",
    },
    {
      image: {
        src: breakpoint.sp ? Trouble2ImageSP : Trouble2Image,
        alt: "お悩み2 月末に集中する事務作業が面倒",
        size: imageWidth,
        height: imageHeight,
      },
      children: (
        <>
          {breakpoint.sp ? (
            <ItemAlign>スマホひとつでまとめて振込み</ItemAlign>
          ) : (
            <ItemAlign>
              スマホひとつで
              <br />
              まとめて振込み
            </ItemAlign>
          )}
        </>
      ),
      firstMerit: (
        <>
          <DescriptionBold>スマホひとつでスキマ時間にいつでも振込み</DescriptionBold>ができます。
        </>
      ),
      secondMerit: (
        <>
          <DescriptionBold>複数の請求書をまとめて振り込む</DescriptionBold>こともできます。
        </>
      ),
    },
    {
      image: {
        src: breakpoint.sp ? Trouble3ImageSP : Trouble3Image,
        alt: "お悩み3 他行宛振込みが多く手数料が高い",
        size: imageWidth,
        height: imageHeight,
      },
      children: (
        <>
          {breakpoint.sp ? (
            <ItemAlign>
              手数料業界最安値<NoteMark>※</NoteMark>
            </ItemAlign>
          ) : (
            <ListItem>
              手数料
              <br />
              業界最安値<NoteMark>※</NoteMark>
            </ListItem>
          )}
        </>
      ),
      firstMerit: (
        <>
          いずれの銀行宛振込でも<DescriptionBold>業界最安値の手数料</DescriptionBold>
          <NoteMark>※</NoteMark>で振込みができます。
        </>
      ),
      secondMerit: "振込手数料を気にして銀行口座を使い分けする必要もありません。",
    },
    {
      image: {
        src: breakpoint.sp ? Trouble4ImageSP : Trouble4Image,
        alt: "お悩み4 請求書の管理が面倒",
        size: imageWidth,
        height: imageHeight,
      },
      children: (
        <>
          {breakpoint.sp ? (
            <ItemAlign>電子化でペーパーレス化</ItemAlign>
          ) : (
            <ItemAlign>
              電子化で
              <br />
              ペーパーレス化
            </ItemAlign>
          )}
        </>
      ),
      firstMerit: (
        <>
          <DescriptionBold>写真を撮るだけで、ペーパーレス化</DescriptionBold>に対応できます。
        </>
      ),
      secondMerit: (
        <>
          スマホひとつで<DescriptionBold>過去の請求書をすぐに検索</DescriptionBold>でき、
          <DescriptionBold>税理士への共有もURLでカンタン</DescriptionBold>にできます。
        </>
      ),
    },
  ]

  const notes = breakpoint.sp
    ? [
        "※1：調査主体：株式会社リクルート / 調査機関による調査（2023年11月6日時点）金融庁、免許・許可・登録等を受けている業者一覧のうち、預金取扱等金融機関で銀行として登録されており、外国銀行支店を除く134行の通常時の他行宛の振込手数料で比較。",
      ]
    : [
        "※1：調査主体：株式会社リクルート / 調査機関による調査（2023年11月6日時点）金融庁、免許・許可・登録等を受けている業者一覧のうち、預金取扱等金融機関で銀行として登録されており、外国銀行支店を除く134行の通常時の他行宛の振込手数料で比較。",
      ]

  return (
    <Container className={className}>
      {breakpoint.sp ? (
        <SectionTitleH2>
          受け取った請求書に
          <Br />
          関するお悩み
        </SectionTitleH2>
      ) : (
        <SectionTitleH2>受け取った請求書に関するお悩み</SectionTitleH2>
      )}
      {breakpoint.sp ? (
        <SectionSubtitle>
          Airインボイスが
          <Br />
          「スマホひとつで」まるっと解決
        </SectionSubtitle>
      ) : (
        <SectionSubtitle>Airインボイスが「スマホひとつで」まるっと解決</SectionSubtitle>
      )}
      <List>
        {items.map((item, index) => (
          <FeatureListItem key={index} image={item.image} firstMerit={item.firstMerit} secondMerit={item.secondMerit}>
            {item.children}
          </FeatureListItem>
        ))}
      </List>
      <StyledNotes>{notes}</StyledNotes>
    </Container>
  )
}

const ItemContainer = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  :not(:first-child) {
    margin-left: 24px;
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
    :not(:first-child) {
      margin-left: 0;
    }
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
    flex: 0;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border: 2px solid ${COLOR.main};
  border-radius: 7px;
  padding: 20px;
  margin-top: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 16px;
    padding: 25px;
  }
`

const ItemText = styled.div`
  font-size: 20px;
  line-height: 26px;
  color: ${COLOR.main};
  white-space: pre-wrap;
  text-align: center;
  font-weight: bold;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
    line-height: 26px;
    text-align: left;
    margin-top: 0;
  }
`

interface FeatureListItemProps {
  readonly image: {
    readonly src: string
    readonly alt: string
    readonly size: number
    readonly height: number
  }
  readonly children: React.ReactNode
  readonly firstMerit: React.ReactNode
  readonly secondMerit: React.ReactNode
}

const FeatureListItem: React.VFC<FeatureListItemProps> = props => {
  const { image, children, firstMerit, secondMerit } = props

  return (
    <ItemContainer>
      <CircledImage image={image} />
      <TextContainer>
        <ItemText>{children}</ItemText>
        <ItemDescription>{firstMerit}</ItemDescription>
        <ItemDescription>{secondMerit}</ItemDescription>
      </TextContainer>
    </ItemContainer>
  )
}
