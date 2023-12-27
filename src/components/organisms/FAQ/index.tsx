import React from "react"
import styled from "styled-components"

import { CONTENTS_MAX_WIDTH_PX } from "components/sizes"

import { SectionTitleH4 } from "components/atoms/SectionTitleH4"
import { QuestionAndAnswer } from "components/molecules/QuestionAndAnswer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionAndAnswerContainer = styled.div`
  margin-top: 64px;
  max-width: ${CONTENTS_MAX_WIDTH_PX}px;
`

const StyledQuestionAndAnswer = styled(QuestionAndAnswer)`
  :not(:first-child) {
    margin-top: 48px;
  }
`

interface FAQProps {
  readonly className?: string
}

export const FAQ: React.VFC<FAQProps> = props => {
  const contents = [
    {
      question: "無料体験期間を過ぎてから、継続利用（有料）のお申込みをすることはできますか？",
      answer:
        "はい、可能です。\nただし、無料体験期間が終了した時点で、アプリ内のデータを見ることはできますが、請求書の撮影やデータ化・振込ができなくなります。",
    },
    {
      question: "支払い方法は何がありますか？",
      answer:
        "Airインボイスのお支払い方法は原則、「クレジットカード払い」のみとさせていただきます。\nただし、Airインボイス以外にAirの他有料サービスをご利用の店舗（Airレジ（有料オプション）、Airウェイト、Airリザーブ、業務サポートパック、Airレジ オーダー、Airメイト、Airシフトなど）は、請求書払いをご利用いただけます。",
    },
    {
      question: "振込手数料はかかりますか？",
      answer: "はい、振込の際の手数料は別途ご負担いただきます。(1件あたり143円)",
      notes: ["※注：振込手数料の請求元はSBペイメントサービス株式会社となります。"],
    },
    {
      question: "毎月、有料申込みが必要ですか？",
      answer: "いいえ、申込みは一度だけ必要です。契約が成立したら、解約されるまでは自動継続となります。",
    },
    {
      question: "有料利用の解約はどうしたらいいですか？",
      answer:
        "有料利用の解約をご希望される場合、解約用の問い合わせフォームからご連絡ください。当月15日までに解約をお申込みされた場合は、当月末で解約（※注）となります。当月16日以降に解約をお申込みされた場合は、翌月末での解約となりますので、ご留意ください。\nまた、SBペイメントサービス株式会社の支払代行サービスのご契約がある場合、別途ご解約のお手続きが必要となります。",
      notes: [
        "※注：申請情報と登録情報が相違している場合、確認のご連絡を差し上げます。",
        "確認事項にご回答いただけない場合は、解約ができず料金が発生してしまいますので速やかなご回答をお願いいたします。",
      ],
    },
  ]
  return (
    <Container className={props.className}>
      <SectionTitleH4>よくある質問</SectionTitleH4>
      <QuestionAndAnswerContainer>
        {contents.map((content, index) => (
          <StyledQuestionAndAnswer key={index} {...content} />
        ))}
      </QuestionAndAnswerContainer>
    </Container>
  )
}
