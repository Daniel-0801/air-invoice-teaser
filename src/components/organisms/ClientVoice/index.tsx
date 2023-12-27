import React from "react"
import styled from "styled-components"

import { BREAK_POINT, CONTENTS_MAX_WIDTH_PX } from "components/sizes"

import { SectionTitleH2 } from "components/atoms/SectionTitleH2"

import { PageName } from "functions/adobeAnalytics/common"
import { createURLWithParametersOnFV } from "functions/url"

import Client3Image from "images/top/client-voices/arashio/main-pc.jpg"
import Client2Image from "images/top/client-voices/labo-verde/main-pc.jpg"
import Client1Image from "images/top/client-voices/sanukis/main-pc.jpg"

import { ClientItem } from "./ClientItem"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

const ClientList = styled.ul<{ position: Position; margin: number }>`
  width: min(${CONTENTS_MAX_WIDTH_PX}px, 100%);
  display: flex;
  margin-top: ${props => (props.position === "top" ? props.margin : 0)}px;
  flex-wrap: wrap;
  row-gap: 24px;

  :not(:last-child) {
    margin-bottom: 48px;
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
    justify-content: center;
  }
`

const StyledClientItem = styled(ClientItem)``

export type Position = "top" | "case"

interface UsageStepListProps {
  readonly className?: string
  readonly pageName: PageName
  readonly position?: Position
  readonly margin?: number
}

export const ClientVoice: React.VFC<UsageStepListProps> = props => {
  const { className, position = "case", margin = 48 } = props

  return (
    <Container className={className}>
      {position === "top" ? <SectionTitleH2>導入事例</SectionTitleH2> : <></>}
      <ClientList position={position} margin={margin}>
        <StyledClientItem
          path={createURLWithParametersOnFV("/case/01")}
          labels={["小売", "２店舗", "月50枚の請求書"]}
          shopName="sanukis"
          title="請求書の振込みがスマホ一台で完結する便利さ手数料も50％以上削減でき、コスパの良さに驚いています"
          src={Client1Image}
          alt="sanukis"
        />
        <StyledClientItem
          path={createURLWithParametersOnFV("/case/02")}
          labels={["小売", "１店舗", "月8枚の請求書"]}
          shopName="labo verde"
          title="税理士と情報を共有でき、スムーズな会計業務が実現過去の取引の振り返りで、オーナーとしても成長できています"
          src={Client2Image}
          alt="labo verde"
        />
        <StyledClientItem
          path={createURLWithParametersOnFV("/case/03")}
          labels={["製造", "１店舗", "請求書枚数非公開"]}
          shopName="あらしお株式会社"
          title="普段の振込みに関する業務負担が劇的に軽減 電子帳簿保存法にもスムーズに対応できて助かっています"
          src={Client3Image}
          alt="あらしお株式会社"
        />
      </ClientList>
    </Container>
  )
}
