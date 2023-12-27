import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import { Notes } from "components/molecules/Notes"
import { StepCardList } from "components/organisms/StepCardList"

import InformationConfirmationImage from "images/apply/information-confirmation.svg"
import InformationInputImage from "images/apply/information-input.svg"
import StartOfUseImage from "images/apply/start-of-use.svg"

interface PaidVersionApplicationStepCardListProps {
  readonly className?: string
}

export const PaidVersionApplicationStepCardList: React.VFC<PaidVersionApplicationStepCardListProps> = props => {
  const stepCards = [
    {
      title: "1.お申込み情報の入力",
      children: <InformationInput />,
      image: {
        src: InformationInputImage,
        width: 152,
        height: 256,
        alt: "申し込み情報の入力",
      },
    },
    {
      title: "2.お申込み情報の確認",
      children: <InformationConfirmation />,
      image: {
        src: InformationConfirmationImage,
        width: 255,
        height: 184,
        alt: "申し込み情報の確認",
      },
    },
    {
      title: "3.ご契約の成立と有料版のご利用開始",
      children: <StartOfUse />,
      image: {
        src: StartOfUseImage,
        width: 123,
        height: 257,
        alt: "Airインボイスの利用開始",
      },
    },
  ]

  return <StepCardList className={props.className} stepCards={stepCards} />
}

const Text = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${COLOR.black87};
  white-space: pre-wrap;
`

const StyledNotes = styled(Notes)`
  margin-top: 24px;
`

const InformationInput: React.VFC = () => {
  const notes = [
    "※1：メールアドレスが間違っていた場合、ご契約情報が届かないことがあります。お申込み前に、マイアカウントから登録メールアドレスをご確認ください。",
  ]
  return (
    <>
      <Text>お客様の氏名・請求先などのお申込み情報をご入力ください(※1)。</Text>
      <StyledNotes className="notes" notes={notes} marginBetweenNotes="8px" />
    </>
  )
}

const InformationConfirmation: React.VFC = () => {
  const notes = [
    "※2：お申込みの際にご登録いただいたご連絡先へメールもしくはお電話にてご連絡をさせていただく場合がございます。",
    "ご回答いただいたのち、お申込みの登録を進めてまいりますので、すみやかなご回答にご協力ください。 なお、弊社からの最終連絡から30日以内にご回答いただけなかった場合、お申込みはキャンセル扱いとなります。",
    "お申込みがキャンセルになった場合、一定期間経過後に、Airインボイスをご利用いただけなくなりますので予めご了承ください。",
    "※3：お申込み情報の確認には1週間～1ヶ月ほどお時間を頂きます。お申込み情報の確認中は、「審査中」である旨のメッセージが表示されます。",
  ]
  return (
    <>
      <Text>
        お申込みいただいたお客様情報をもとに審査を行います。その際、弊社よりお問い合わせのご連絡をさせていただく場合があります(※2)。なお、審査結果はメールでお知らせします(※3)。
      </Text>
      <StyledNotes className="notes" notes={notes} marginBetweenNotes="8px" />
    </>
  )
}

const StartOfUse: React.VFC = () => {
  const notes = [
    "※4：無料体験期間、又は、お申込み特典期間中にご契約が不成立となった場合、期間終了前であってもご利用を停止させていただく場合がございます。あらかじめご了承ください。",
  ]
  return (
    <>
      <Text>
        「審査が完了しました」のタイトルでお送りするメールに記載された内容をもってご契約の成立となり、Airインボイスの振込機能を含めた全機能をご利用いただけます(※4)。
      </Text>
      <StyledNotes className="notes" notes={notes} marginBetweenNotes="8px" />
    </>
  )
}
