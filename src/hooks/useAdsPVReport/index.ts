import { withPrefix } from "gatsby-link"

import { usePostBodyScript } from "hooks/usePostBodyScript"

export const useAdsPVReport = () => {
  useGooglePVReport()
  useYahooPVReport()
}

const useGooglePVReport = () => {
  usePostBodyScript("https://www.googletagmanager.com/gtag/js?id=AW-643791225", true)
  usePostBodyScript(withPrefix("script/ads/google/page-view-report.js"))
}

const useYahooPVReport = () => {
  usePostBodyScript("https://s.yimg.jp/images/listing/tool/cv/ytag.js", true)
  usePostBodyScript(withPrefix("script/ads/yahoo/page-view-report.js"))
}
