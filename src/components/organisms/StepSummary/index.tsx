import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"

import { DownloadIcon, PersonIcon, ShootingIcon, ApplicationIcon, PaymentReservationIcon } from "components/atoms/Icon"
import { LargeStepSummary } from "components/organisms/StepSummary/LargeStepSummary"
import { SmallStepSummary } from "components/organisms/StepSummary/SmallStepSummary"

interface StepSummaryProps {
  readonly className?: string
  readonly onClicks: (() => void)[]
}

export const StepSummary: React.VFC<StepSummaryProps> = props => {
  const { className, onClicks } = props

  const breakpoints = useBreakpoint()

  interface StepSummaryItem {
    onClick: () => void
    children: React.ReactNode
    icon: React.ReactElement
    duration?: string
  }

  const iconSize = 54
  const steps: StepSummaryItem[] = [
    {
      onClick: onClicks[0],
      children: "1. アプリダウンロード",
      icon: <DownloadIcon size={iconSize} />,
      duration: "約3分",
    },
    {
      onClick: onClicks[1],
      children: "2. AirID登録",
      icon: <PersonIcon size={iconSize} />,
      duration: "約5分",
    },
    {
      onClick: onClicks[2],
      children: breakpoints.sp ? "3. 請求書撮影（無料体験開始）" : "3. 請求書撮影\n（無料体験開始）",
      icon: <ShootingIcon size={iconSize} />,
    },
    {
      onClick: onClicks[3],
      children: breakpoints.sp ? "4. 支払代行サービスお申込み" : "4. 支払代行\nサービスお申込み",
      icon: <ApplicationIcon size={iconSize} />,
      duration: "約10分",
    },
    {
      onClick: onClicks[4],
      children: "5. 振込予約",
      icon: <PaymentReservationIcon size={iconSize} />,
      duration: "審査後 最短5営業日",
    },
  ]

  // Stepからiconを除く
  const dropIcon = ({ onClick, children, duration }: StepSummaryItem) => ({ onClick, children, duration })

  if (breakpoints.sp) {
    return <SmallStepSummary className={className} steps={steps.map(step => dropIcon(step))} />
  }
  return <LargeStepSummary className={className} steps={steps} />
}
