import { sendGoogleCVReport } from "functions/ads/google/conversion"
import { sendYahooCVReport } from "functions/ads/yahoo/conversion"

// この関数を呼ぶ前に、useAdsPVReportなどでそれぞれの広告プラットフォームのスクリプトタグを読み込む必要がある
export const sendAdsCVReport = () => {
  sendGoogleCVReport()
  sendYahooCVReport()
}
