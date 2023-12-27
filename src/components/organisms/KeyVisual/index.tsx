import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"

import { LargeKeyVisual, LargeKeyVisualProps } from "components/organisms/KeyVisual/LargeKeyVisual"
import { SmallKeyVisual, SmallKeyVisualProps } from "components/organisms/KeyVisual/SmallKeyVisual"
import { KeyVisualInternalProps } from "components/organisms/KeyVisual/type"

type KeyVisualProps = LargeKeyVisualProps & SmallKeyVisualProps

export const KeyVisual: React.VFC<KeyVisualProps> = props => {
  // PC, SP版共に共通の文言を宣言
  const contents: KeyVisualInternalProps = {
    firstLabel: "電子帳簿保存法対応",
    secondLabel: "振込手数料業界最安値",
    title: "振込も保管もラクになる請求書支払アプリ",
    patent: "特許意匠出願中",
    cheapestNote:
      "※1：調査機関による調査（2023年11月6日時点）/ 金融庁、免許・許可・登録等を受けている業者一覧のうち、\n預金取扱等金融機関で銀行として登録されており、外国銀行支店を除く134行の通常時の他行宛の振込手数料で比較。",
    cheapestNote2: "※2：振込手数料は無料体験期間中も別途かかります。",
  }
  const breakpoint = useBreakpoint()
  return (
    <>
      {breakpoint.sp ? (
        <SmallKeyVisual
          documentRequestButtonOnClick={props.documentRequestButtonOnClick}
          inquiryButtonOnClick={props.inquiryButtonOnClick}
          firstLabel={contents.firstLabel}
          secondLabel={contents.secondLabel}
          title={deleteNewLine(contents.title)}
          patent={contents.patent}
          cheapestNote={deleteNewLine(contents.cheapestNote)}
          cheapestNote2={deleteNewLine(contents.cheapestNote2)}
        />
      ) : (
        <LargeKeyVisual
          documentRequestButtonOnClick={props.documentRequestButtonOnClick}
          inquiryButtonOnClick={props.inquiryButtonOnClick}
          {...contents}
        />
      )}
    </>
  )
}

const deleteNewLine = (text: string) => {
  return text.replace("\n", "")
}
