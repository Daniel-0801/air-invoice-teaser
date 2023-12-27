import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { ElectronicBookLargeKeyVisual } from "./ElectronicBookLargeKeyVisual"
import { ElectronicBookSmallKeyVisual } from "./ElectronicBookSmallKeyVisual"
import { ElectronicBookKeyVisualProps } from "./type"

const Container = styled.div``

interface ElectronicBookInternalKeyVisual {
  readonly className?: string
}

export const ElectronicBookKeyVisual: React.VFC<ElectronicBookInternalKeyVisual> = props => {
  const { className } = props
  // PC, SP版共に共通の文言を宣言
  const contents: ElectronicBookKeyVisualProps = {
    title: "電子帳簿保存法の改正に向けた\n準備はお済みですか？",
    firstLabel: "改正電帳法では2024年1月1日から",
    secondLabel: "電子取引（メール等）で受け取った請求書はデータ保存が必須となり、",
    ThirdLabel: "要件を満たさない事業者は青色申告の承認取消対象となり得ます※",
    note: "※ 2023年度の税制改正大綱では、システム対応ができない相当の理由があると認められた場合、\n電子取引記録のデータ保存開始に猶予が与えられました",
  }
  const breakpoint = useBreakpoint()
  return (
    <>
      <Container className={className}>
        {breakpoint.sp ? (
          <ElectronicBookSmallKeyVisual
            title={deleteNewLine(contents.title)}
            firstLabel={contents.firstLabel}
            secondLabel={contents.secondLabel}
            ThirdLabel={contents.ThirdLabel}
            note={deleteNewLine(contents.note)}
          />
        ) : (
          <ElectronicBookLargeKeyVisual {...contents} />
        )}
      </Container>
    </>
  )
}

const deleteNewLine = (text: string) => {
  return text.replace("\n", "")
}
