import { withPrefix } from "gatsby"
import React from "react"

import { usePostBodyScript } from "hooks/usePostBodyScript"

import "./contactForm.scss"

export const ContactForm: React.FC = () => {
  // マルケトフォームのためのスクリプト
  usePostBodyScript("//pages.airregi.jp/js/forms2/js/forms2.min.js")
  // フォームのロード
  usePostBodyScript(withPrefix("script/form/load-form.js"))

  return <form id="mktoForm_3282" />
}
