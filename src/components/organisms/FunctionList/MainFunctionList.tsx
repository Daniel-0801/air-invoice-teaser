import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"

import { COLOR } from "components/color"

import { CameraIcon, ClockIcon } from "components/atoms/Icon"
import { FunctionList, FunctionListProps } from "components/organisms/FunctionList"

import DigitizingImage from "images/function/main/digitizing.gif"
import PaymentReservationImage from "images/function/main/payment-reservation.gif"
import ScheduledPaymentImage from "images/function/main/scheduled-payment.gif"

interface MainFunctionListProps {
  readonly className?: string
}

export const MainFunctionList: React.VFC<MainFunctionListProps> = props => {
  const { className } = props

  const breakpoint = useBreakpoint()

  const functionsProps: FunctionListProps = {
    title: "Airインボイスのメイン機能",
    subTitle: "振込まで３ステップで完了できます。",
    functions: [
      {
        name: "請求書読み取り・データ化機能",
        icon: <CameraIcon size={breakpoint.sp ? 16 : 24} fill={COLOR.main} />,
        caption: "請求書を撮影して自動でデータ化",
        description: "スマホのカメラで撮影することで請求書が自動でデータ化されます。",
        image: {
          src: DigitizingImage,
          alt: "",
        },
      },
      {
        name: "振込予約・自動振込機能",
        icon: <ClockIcon size={breakpoint.sp ? 16 : 24} fill={COLOR.main} />,
        caption: "複数の請求書をまとめて振込予約",
        description: "振込先が違っていてもまとめて振込予約ができます。",
        image: {
          src: PaymentReservationImage,
          alt: "",
        },
      },
      {
        name: "振込予約・自動振込機能",
        icon: <ClockIcon size={breakpoint.sp ? 16 : 24} fill={COLOR.main} />,
        caption: "振込指定日に自動で振り込み",
        description: "入金専用口座に事前入金することで振込指定日に自動で振込されます。振込忘れの心配もありません。",
        image: {
          src: ScheduledPaymentImage,
          alt: "",
        },
      },
    ],
  }

  return <FunctionList className={className} {...functionsProps} />
}
