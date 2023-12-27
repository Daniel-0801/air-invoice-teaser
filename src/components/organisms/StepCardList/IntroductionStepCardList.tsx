import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { AppStoreButtonFlowUpperRow } from "components/atoms/AppStoreButtonFlowUpperRow"
import { ApplicationIcon, IdDocumentIcon, ScreeningIcon, PaymentReservationIcon } from "components/atoms/Icon"
import { IconStepList } from "components/molecules/IconStepList"
import { Notes } from "components/molecules/Notes"
import { StepList } from "components/molecules/StepList"
import { StepCardList } from "components/organisms/StepCardList"

import Step1Img from "images/flow/step1.svg"
import Step2Img from "images/flow/step2.png"
import Step3Img from "images/flow/step3.png"
import Step5Img from "images/flow/step5.png"

interface IntroductionStepCardListProps {
  readonly className?: string
  readonly stepCardIds: string[]
  readonly appStoreButtonOnClick: () => void
}

export const IntroductionStepCardList: React.VFC<IntroductionStepCardListProps> = props => {
  const { className, stepCardIds, appStoreButtonOnClick } = props

  const stepCards = [
    {
      id: stepCardIds[0],
      title: "1.アプリダウンロード",
      children: <AppDownloadContent appStoreButtonOnClick={appStoreButtonOnClick} />,
      image: {
        src: Step1Img,
        width: 222,
        height: 243,
        alt: "アプリダウンロード",
      },
    },
    {
      id: stepCardIds[1],
      title: "2.AirID登録",
      children: <AirIDRegistrationContent />,
      image: {
        src: Step2Img,
        width: 230,
        height: 253,
        alt: "AirID登録",
      },
    },
    {
      id: stepCardIds[2],
      title: "3.請求書撮影（無料体験開始）",
      children: <InvoiceShootingContent />,
      image: {
        src: Step3Img,
        width: 213,
        height: 250,
        alt: "請求書撮影",
      },
    },
    {
      id: stepCardIds[3],
      title: "4.支払代行サービスお申込み（無料）",
      children: <SBPSApplicationContent />,
    },
    {
      id: stepCardIds[4],
      title: "5.振込予約",
      children: <PaymentReservationContent />,
      image: {
        src: Step5Img,
        width: 251,
        height: 250,
        alt: "振込予約",
      },
    },
  ]

  return <StepCardList className={className} stepCards={stepCards} />
}

const Text = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black87};
  white-space: pre-wrap;
`

const StyledAppStoreButtonFlowUpperRow = styled(AppStoreButtonFlowUpperRow)`
  max-width: 215px;
  height: auto;
  margin-top: 24px;

  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const Br = styled.br`
  display: none;
  @media (max-width: ${BREAK_POINT.w768}px) {
    display: inline;
  }
`

const StyledNotes = styled(Notes)`
  margin-top: 24px;
`

const IconStepListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`

interface AppDownloadContentProps {
  readonly appStoreButtonOnClick: () => void
}

const AppDownloadContent: React.VFC<AppDownloadContentProps> = props => {
  const { appStoreButtonOnClick } = props

  return (
    <>
      <Text>お手持ちのiPhoneにAirインボイス アプリをダウンロードしてください。</Text>
      <StyledAppStoreButtonFlowUpperRow className="app-store-button" onClick={appStoreButtonOnClick} />
    </>
  )
}

const AirIDRegistrationContent: React.VFC = () => {
  return (
    <Text>
      アプリをダウンロードしたら表示される案内に従って「AirID」の新規登録を行ってください。
      <Br />
      「AirID」を既にお持ちの方は「AirIDに登録したメールアドレス」と「パスワード」でログインしてください。
    </Text>
  )
}

const InvoiceShootingContent: React.VFC = () => {
  const notes = ["※振込機能をご利用になる場合は後述の支払代行サービスへのお申込みが必要です。"]

  return (
    <>
      <Text>
        まずは請求書を撮影してAirインボイスを体験してみてください。利用開始月とその翌月が0円でご利用できます。
      </Text>
      <StyledNotes className="notes" notes={notes} marginBetweenNotes="8px" />
    </>
  )
}

const SBPSApplicationContent: React.VFC = () => {
  const steps = [
    {
      icon: <ApplicationIcon size={78} fill={COLOR.main} />,
      stepNum: 1,
      text: "お申込み情報の入力",
    },
    {
      icon: <IdDocumentIcon size={78} fill={COLOR.main} />,
      stepNum: 2,
      text: "本人確認書類のアップロード",
    },
    {
      icon: <ScreeningIcon size={78} fill={COLOR.main} />,
      stepNum: 3,
      text: "審査",
      subText: "（5営業日ほど）",
    },
    {
      icon: <PaymentReservationIcon size={78} fill={COLOR.main} />,
      stepNum: 4,
      text: "利用開始",
    },
  ]

  const notes = [
    "※最短5営業日で審査が完了します。",
    "※審査内容や審査結果の理由をお伝えすることはできません。あらかじめご了承ください。",
    "※振込手数料は別途かかります。",
  ]

  const breakpoints = useBreakpoint()

  return (
    <>
      <Text>
        Airインボイスで振込機能をご利用になるには、SBペイメントサービス株式会社（以下SBPS）の支払代行サービスへのお申込みが必要です。申込み、審査が完了しますと、Airインボイス専用の準備金口座が作成され、振込機能がご利用できます。なお、ご利用料金はかかりません。
      </Text>
      <IconStepListContainer>
        {breakpoints.sp ? <StepList steps={steps} /> : <IconStepList steps={steps} />}
      </IconStepListContainer>
      <StyledNotes className="notes" notes={notes} marginBetweenNotes="8px" />
    </>
  )
}

const PaymentReservationContent: React.VFC = () => {
  const notes = [
    "※無料体験期間以降もAirインボイスを継続利用する場合は、別途お申込みが必要です。",
    "アプリまたはバックオフィス画面に通知が届きますのでそちらからお申込みください。",
  ]

  return (
    <>
      <Text>ご利用開始のお知らせメールが届きましたら、実際の振込機能をご利用いただけるようになります。</Text>
      <StyledNotes className="notes" notes={notes} marginBetweenNotes="8px" />
    </>
  )
}
