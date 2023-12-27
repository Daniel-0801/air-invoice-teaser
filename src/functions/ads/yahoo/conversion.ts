export const sendYahooCVReport = (destinationUrl?: string) => {
  yahoo_report_conversion(destinationUrl)
}

// scriptタグで別途定義される関数
declare const yahoo_report_conversion: (destinationUrl?: string) => void
