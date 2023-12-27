// ページ表示以外のAA要件
import { PageName } from "functions/adobeAnalytics/common"

// ユーザーのアクションごとに指定されている
export const clAction = {
  FreeStart: ":free_start",
  AppStore: ":DL_iPhone",
  Question: ":question",
  LookFunction: ":Look_function",
  LookCost: ":Look_cost",
  LookFlow: ":Look_flow",
  LookFunctionHeader: ":Look_function_header",
  LookCostHeader: ":Look_cost_header",
  LookFlowHeader: ":Look_flow_header",
  LookDLDocumentHeader: ":DL_document_header",
  LookLoginHeader: ":Look_login_header",
  LookInquiryHeader: ":Look_inquiry_header",
  LookElectronicBookHeader: ":Look_electronic_book_header",
  LookInquiryFV: ":Look_inquiry_FV",
  LookInquiry: ":Look_inquiry",
  StepAppDownload: ":tile_step1",
  StepRegistration: ":tile_step2",
  StepInvoiceShooting: ":tile_step3",
  StepApplication: ":tile_step4",
  StepPaymentReservation: ":tile_step5",
  DLDocument: ":DL_document",
  DLDocumentFV: ":DL_document_FV",
  PrivacyPolicy: ":privacy_policy",
  ReturnTop: ":top",
  TermsOfUse: ":terms_of_use",
  PaidApply: ":paid_apply",
  ARegistration: ":account_registration",
} as const
export type clAction = typeof clAction[keyof typeof clAction]

// 同一ページ内に同様のアクションが存在する際に末尾に数字をつけることで差別化している
export const clOption = {
  Number1: "_01",
  Number2: "_02",
  Number3: "_03",
  Number4: "_04",
} as const
export type clOption = typeof clOption[keyof typeof clOption]

// events指定なし & eVar2
export const sendCustomLink = (pageName: PageName, action: clAction, option: clOption | "" = "") => {
  const customLink = pageName + action + option
  sendCustomLinkToAdobeAnalytics(customLink, "", { eVar2: customLink })
}

// event2 & eVar2
export const sendCustomLinkWithEvent2 = (pageName: PageName, action: clAction, option: clOption | "" = "") => {
  const customLink = pageName + action + option
  sendCustomLinkToAdobeAnalytics(customLink, "event2", { eVar2: customLink })
}

// event50 & eVar2
export const sendCustomLinkWithEvent50 = (pageName: PageName, action: clAction, option: clOption | "" = "") => {
  const customLink = pageName + action + option
  sendCustomLinkToAdobeAnalytics(customLink, "event50", { eVar2: customLink })
}

// カスタムリンク送信中、画面が切り替わった場合でも送信を非同期で継続する関数
export const sendCustomLinkAsync = (pageName: PageName, action: clAction, option: clOption | "" = "") => {
  setUseBeacon(true)
  sendCustomLink(pageName, action, option)
}

// Adobe Analyticsの外部コードから読み込む関数
declare const scCustomLink: (
  customLinkName: string,
  event: clEvents | clEvents50 | "",
  conversion: { [eVar in eVars]?: string } | "",
) => void

const sendCustomLinkToAdobeAnalytics = (
  customLink: string,
  event: clEvents | clEvents50 | "",
  conversion: { [eVar in eVars]?: string } | "",
) => {
  scCustomLink(customLink, event, conversion)
}

type clEvents = "event2"
type clEvents50 = "event50"
type eVars = "eVar2"

// Adobe Analyticsの外部コード(s_code.js)で定義された関数
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const s: any

const debug: boolean = process.env.GATSBY_DEBUG === "true" ? true : false

const setUseBeacon = (useBeacon: boolean) => {
  if (typeof s !== "undefined") {
    s.useBeacon = useBeacon
  } else {
    debug && console.log(`Cannot read property 's' of undefined`)
  }
}
