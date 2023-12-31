import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"
export const SvgInvoiceIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.88 8.73a.766.766 0 0 0 .709-1.056.766.766 0 0 0-1.251-.248.766.766 0 0 0-.167.834.766.766 0 0 0 .709.47Zm0 3.079a.766.766 0 0 0 .709-1.057.767.767 0 1 0-1.251.834.767.767 0 0 0 .542.223Zm0 3.078a.766.766 0 0 0 .709-1.056.766.766 0 0 0-1.251-.248.765.765 0 0 0 0 1.082.764.764 0 0 0 .542.223Zm2.725-6.349h4.579a.563.563 0 1 0 0-1.125h-4.579a.563.563 0 1 0 0 1.125Zm0 3.087h4.579a.564.564 0 0 0 0-1.125h-4.579a.563.563 0 0 0 0 1.125Zm0 3.05h4.579a.563.563 0 0 0 0-1.125h-4.579a.563.563 0 1 0 0 1.125Z" />
      <path d="M18.142 2.7a3.368 3.368 0 0 0-2.58-1.2H6.75a3.375 3.375 0 0 0-3.375 3.375V17.25a3.368 3.368 0 0 0 1.209 2.587 3.375 3.375 0 0 0 3.3 2.663h9.553a3.375 3.375 0 0 0 3.375-3.375V6a3.375 3.375 0 0 0-2.67-3.3ZM4.5 4.875a2.253 2.253 0 0 1 2.25-2.25h8.813a2.253 2.253 0 0 1 2.25 2.25V17.25a2.253 2.253 0 0 1-2.25 2.25H6.75a2.253 2.253 0 0 1-2.25-2.25V4.875Zm15.188 14.25a2.253 2.253 0 0 1-2.25 2.25H7.883a2.245 2.245 0 0 1-1.72-.801c.194.034.39.051.586.051h8.813a3.375 3.375 0 0 0 3.374-3.375V4.875c0-.2-.017-.4-.052-.596A2.244 2.244 0 0 1 19.687 6v13.125Z" />
    </svg>
  )
}
export default SvgInvoiceIcon
