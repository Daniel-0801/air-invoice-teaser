import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import {
  ApplicationIcon90,
  BookIcon,
  CallIcon,
  LinkIcon,
  PaymentIcon90,
  PaymentReservationIcon90,
  ScreeningIcon,
  ScreeningIcon90,
} from "components/atoms/Icon"
import { IconDescriptionList } from "components/molecules/IconDescriptionList"
import { Notes } from "components/molecules/Notes"
import { SubsidyIconStepList } from "components/molecules/SubsidyIconStepList"

const Container = styled.div`
  padding: 68px 20px 110px;
  background-color: ${COLOR.main05};

  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 56px 20px;
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1142px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 32px;
  line-height: 36px;
  color: ${COLOR.main};

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 24px;
    line-height: 28px;
  }
`

const ContentTitle = styled.p`
  margin-top: 68px;
  font-size: 28px;
  line-height: 32px;
  color: ${COLOR.main};

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
`

const StyledSubsidyIconStepList = styled(SubsidyIconStepList)`
  margin-top: 48px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 32px;
  }
`

const StyledNotes = styled(Notes)`
  line-height: 16px;
  margin-top: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    line-height: 14px;
    margin-top: 32px;
  }
`

const StyledBorderedBox = styled.div`
  margin-top: 48px;
  padding: 32px 56px;
  border: solid 1px ${COLOR.main};
  border-radius: 4px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 56px;
    padding: 32px 24px;
  }
`

const BorderedBoxTitle = styled.p`
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: ${COLOR.main};

  @media (max-width: ${BREAK_POINT.w768}px) {
    text-align: center;
  }
`

const BorderedBoxDescription = styled.p`
  margin-top: 24px;
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.black87};

  @media (min-width: ${BREAK_POINT.w769}px) {
    text-align: center;
  }
`
const StyledIconDescriptionList = styled(IconDescriptionList)`
  margin-top: 32px;
`

const ScheduleTitle = styled.p`
  margin-top: 68px;
  font-size: 28px;
  line-height: 32px;
  color: ${COLOR.main};

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-top: 56px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
`

const ScheduleDescription = styled.div`
  margin-top: 24px;
  text-align: center;
`

const ScheduleText = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black87};
`

const Link = styled.a`
  color: ${COLOR.blueCerulean};
  text-decoration: underline;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

const LinkIconContainer = styled.div`
  display: inline-flex;
  margin: 0 8px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-left: 2px;
    margin-right: 14px;
  }
`

interface SubsidySectionProcessProps {
  readonly className?: string
}

export const SubsidySectionProcess: React.VFC<SubsidySectionProcessProps> = props => {
  const { className } = props
  const breakpoints = useBreakpoint()

  const size = breakpoints.sp ? 64 : 90
  const steps = [
    {
      children: <ApplicationIcon90 size={size} fill={COLOR.main} />,
      stepNum: 1,
      text: "無料体験開始後に商品お申込み",
      subText: "Airインボイスの無料体験を開始し、サービス導入の意思が決まりましたら専用フォームよりお申込みください。",
    },
    {
      children: <ScreeningIcon90 size={size} fill={COLOR.main} />,
      stepNum: 2,
      text: "交付申請・交付決定",
      subText:
        "IT導入補助金の申請に必要な各種情報および必要書類を提出します。交付の採否が確定すると、事務局から交付決定通知が届きます。",
    },
    {
      children: <PaymentReservationIcon90 size={size} fill={COLOR.main} />,
      stepNum: 3,
      text: "正式契約・支払い",
      subText:
        "交付決定後に正式契約が完了しましたら、弊社よりサービス利用開始手続き・導入・請求をさせていただき、請求額を弊社へ全額お支払いいただきます。",
    },
    {
      children: <PaymentIcon90 size={size} fill={COLOR.main} />,
      stepNum: 4,
      text: "継続利用の報告・補助金交付",
      subText:
        "導入したサービスを継続的に活用していることを証する書類を提出・報告（事業実績報告）し、報告内容をもとに補助金額が確定します。それから補助金交付手続きを経て事務局よりお客様に補助金が交付されます。",
    },
  ]

  const linkOnClick = () => console.log("sample") // TODO:AA実装時に

  const descriptions = [
    {
      children: <BookIcon size={36} fill={COLOR.black60} />,
      text: "マニュアルや記入例を各種ご用意",
      subText: "マニュアルをご用意してますので、難解な交付申請や報告書も迷わず作成できます。",
    },
    {
      children: <ScreeningIcon size={36} fill={COLOR.black60} />,
      text: "交付申請・報告書作成をサポート",
      subText: "申請書の書き方や言葉の意味、計算方法まで手続きに必要な書類の準備も安心です。",
    },
    {
      children: <CallIcon size={36} fill={COLOR.black60} />,
      text: "お困りごとをいつでも相談",
      subText:
        "平日10:00 - 17:00（土日祝日 / 年末年始を除く）の間、TRIPORT株式会社のコールセンターが対応し伴走いたします。お気軽にご相談ください。",
    },
  ]

  return (
    <Container className={className}>
      <Contents>
        <Title>交付申請・手続きについて</Title>
        <ContentTitle>補助金交付までの流れ</ContentTitle>
        <StyledSubsidyIconStepList steps={steps} />
        <StyledNotes
          notes={[
            "※IT導入補助金の対象となる商品は通常の月額払い商品とは異なるのでご注意下さい。",
            "※「交付決定」を受ける前に、Airインボイスの契約・発注、納品、請求、支払いを行なった場合は、補助金交付が受けられないのでご注意ください。",
          ]}
        ></StyledNotes>
        <StyledBorderedBox>
          <BorderedBoxTitle>
            <b>「無料導入サポート」</b>で{breakpoints.sp && <br />}IT導入補助金の申請手続きも安心です。
          </BorderedBoxTitle>
          <BorderedBoxDescription>
            IT導入補助金の交付申請や実績報告に関して必要な書類の準備や記入方法などについては、
            {!breakpoints.sp && <br />}
            弊社が幹事を務めるABTコンソーシアム参画企業である「TRIPORT株式会社」が支援・伴走いたします。
          </BorderedBoxDescription>

          <StyledIconDescriptionList descriptions={descriptions}></StyledIconDescriptionList>
        </StyledBorderedBox>
        <ScheduleTitle>スケジュール</ScheduleTitle>
        <ScheduleDescription>
          <ScheduleText>
            交付申請時期は適宜追加更新されていますので、{!breakpoints.sp && <br />}最新情報は
            <Link
              href="https://www.it-hojo.jp/schedule/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={linkOnClick}
            >
              「IT導入補助金2023」公式サイト
              <LinkIconContainer>
                <LinkIcon size={14} />
              </LinkIconContainer>
            </Link>
            でご確認ください。
          </ScheduleText>
        </ScheduleDescription>
      </Contents>
    </Container>
  )
}
