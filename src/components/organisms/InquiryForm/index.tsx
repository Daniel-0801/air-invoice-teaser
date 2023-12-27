import { withPrefix } from "gatsby-link"
import React from "react"
import styled from "styled-components"

import { Spinner } from "components/atoms/Spinner"

import { usePostBodyScript } from "hooks/usePostBodyScript"

import "components/organisms/InquiryForm/form.scss"

const Container = styled.div``

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const InquiryForm: React.VFC = () => {
  // マルケトフォームのためのスクリプト
  usePostBodyScript("//pages.airregi.jp/js/forms2/js/forms2.min.js")
  // フォームのロード
  usePostBodyScript(withPrefix("script/form/load-form.js"))
  // マルケト内のAA要件
  // usePostBodyScript(withPrefix("script/form/set-form-click-handlers.js"))

  return (
    <Container>
      {/* load-form.js 内で表示を制御 */}
      <SpinnerContainer id="mktoForm-spinner">
        <Spinner />
      </SpinnerContainer>

      <form id="mktoForm_3693" />
    </Container>
  )
}
