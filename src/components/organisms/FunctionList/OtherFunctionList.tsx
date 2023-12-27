import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"

import { COLOR } from "components/color"

import { AlertIcon, ShareIcon } from "components/atoms/Icon"
import { OtherFunctionSection, FunctionListProps } from "components/organisms/FunctionList/OtherFunctionSection"

import AccountingImage from "images/function/other/accounting.svg"
import AlertImage from "images/function/other/alert.svg"
import FirstLogo from "images/function/other/company-logo/freee.svg"
import SecondLogo from "images/function/other/company-logo/mf-kaikei.svg"
import ThirdLogo from "images/function/other/company-logo/mf-shinkoku.svg"
import CSVImage from "images/function/other/csv.svg"

interface OtherFunctionListProps {
  readonly className?: string
}

export const OtherFunctionList: React.VFC<OtherFunctionListProps> = props => {
  const { className } = props

  const breakpoint = useBreakpoint()

  const functionsProps: FunctionListProps = {
    title: "その他便利な機能",
    functions: [
      {
        name: "振込アラート機能",
        icon: <AlertIcon size={breakpoint.sp ? 16 : 24} fill={COLOR.main} />,
        caption: "通知で振込忘れを防止",
        description: "振込予約や入金を忘れてしまっても、通知が届くので心配ありません。",
        image: {
          src: AlertImage,
          alt: "",
          width: breakpoint.sp ? 335 : 409,
          height: breakpoint.sp ? 254 : 309,
        },
      },
      {
        name: "会計・税理士事務所へのデータ共有機能",
        icon: <ShareIcon size={breakpoint.sp ? 16 : 24} fill={COLOR.main} />,
        caption: "請求書や振込履歴をクラウドで共有",
        description:
          "請求書や振込履歴をデータ化して共有することで、会計・税理士事務所とのやりとりや、提出する資料作成の手間が軽減できます。",
        image: {
          src: AccountingImage,
          alt: "",
          width: breakpoint.sp ? 273 : 301,
          height: breakpoint.sp ? 196 : 216,
        },
      },
      {
        name: "会計ソフトへの連携機能",
        icon: <ShareIcon size={breakpoint.sp ? 16 : 24} fill={COLOR.main} />,
        caption: "請求・振込実績を連携",
        description: "請求データや振込データをfreee会計・マネーフォワードクラウド会計・確定申告に連携できます。",
        image: {
          src: CSVImage,
          alt: "",
          width: breakpoint.sp ? 273 : 301,
          height: breakpoint.sp ? 196 : 216,
        },
        companyLogo: [
          {
            src: FirstLogo,
            alt: "freee会計",
            width: breakpoint.sp ? 112 : 109,
            height: breakpoint.sp ? 44 : 41,
          },
          {
            src: SecondLogo,
            alt: "Money Forward クラウド会計",
            width: breakpoint.sp ? 201 : 177,
            height: breakpoint.sp ? 36 : 30,
          },
          {
            src: ThirdLogo,
            alt: "Money Forward クラウド確定申告",
            width: breakpoint.sp ? 225 : 197,
            height: breakpoint.sp ? 36 : 30,
          },
        ],
      },
    ],
  }

  return <OtherFunctionSection className={className} {...functionsProps} />
}
