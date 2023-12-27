import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${COLOR.black60};
  text-align: left;
`

const Explanation = styled.p`
  margin-top: 12px;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.black60};
`

interface SupplementaryNotesONLowestProps {
  readonly className?: string
}

export const SupplementaryNotesONLowest: React.VFC<SupplementaryNotesONLowestProps> = props => {
  return (
    <Container className={props.className}>
      <div>
        <Title>※1の補足内容</Title>
        <Explanation>
          調査主体：株式会社リクルート / 調査機関による調査（2023年11月6日時点）
          <br />
          金融庁、免許・許可・登録等を受けている業者一覧のうち、
          預金取扱等金融機関で銀行として登録されており、外国銀行支店を除く134行の通常時の他行宛の振込手数料で比較。
        </Explanation>
      </div>
    </Container>
  )
}
