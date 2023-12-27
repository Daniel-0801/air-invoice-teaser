import { withPrefix } from "gatsby-link"

import { PageName } from "functions/adobeAnalytics/common"
import { usePostBodyScript } from "hooks/usePostBodyScript"

export const useAdobeAnalyticsPVReport = (pageName: PageName, events?: pvEvents, campaign?: string | null) => {
  // ページビューデータの送信時、前回送信したカスタムリンクデータの一部(eVar2, events, prop14)がセットされた状態で送られてしまうので、値をリセットするよう上書きを行う
  resetEVar2()
  resetEvents()
  resetProp14()
  resetCampaign()

  setPageName(pageName)
  if (events !== undefined) {
    setEvents(events)
  }
  if (campaign !== undefined) {
    setVars(campaign)
  }
  // AdobeAnalyticsにページビューデータを送信
  usePostBodyScript(withPrefix("script/adobeAnalytics/send-adobe-analytics-pv.js"))
}

// ページ表示のAA要件
export const pvEvents = {
  Event41: "event41",
  Event42: "event42",
  Event43: "event43",
} as const
type pvEvents = typeof pvEvents[keyof typeof pvEvents]

const debug: boolean = process.env.GATSBY_DEBUG === "true" ? true : false

// Adobe Analyticsの外部コード(s_code.js)で定義された関数
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const s: any

const resetEVar2 = () => {
  if (typeof s !== "undefined") {
    s.eVar2 = ""
  } else {
    debug && console.log(`Cannot read property 's' of undefined`)
  }
}

const resetEvents = () => {
  if (typeof s !== "undefined") {
    s.events = ""
  } else {
    debug && console.log(`Cannot read property 's' of undefined`)
  }
}

const resetProp14 = () => {
  if (typeof s !== "undefined") {
    // PV時のAA要件の初期値として `prop14`: `D=pageName` を設定
    s.prop14 = "D=pageName"
  } else {
    debug && console.log(`Cannot read property 's' of undefined`)
  }
}

const resetCampaign = () => {
  if (typeof s !== "undefined") {
    s.campaign = ""
  } else {
    debug && console.log(`Cannot read property 's' of undefined`)
  }
}

const setPageName = (pageName: PageName) => {
  if (typeof s !== "undefined") {
    s.pageName = pageName
  } else {
    debug && console.log(`Cannot read property 's' of undefined`)
  }
}

const setEvents = (event: pvEvents) => {
  if (typeof s !== "undefined") {
    s.events = event
  } else {
    debug && console.log(`Cannot read property 's' of undefined`)
  }
}

const setVars = (campaign: string | null) => {
  if (typeof s !== "undefined") {
    s.campaign = campaign
  } else {
    debug && console.log(`Cannot read property 's' of undefined`)
  }
}
