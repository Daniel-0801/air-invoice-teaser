export const sendGoogleCVReport = (destinationUrl?: string) => {
  return gtag_report_conversion(destinationUrl)
}

// scriptタグで別途定義される関数
declare const gtag_report_conversion: (destinationUrl?: string) => boolean
