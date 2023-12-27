import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"
export const SvgDownloadIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 54 54"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 6.75c.745 0 1.35.604 1.35 1.35v20.405l7.396-7.702a1.35 1.35 0 0 1 1.948 1.87l-9.72 10.122a1.35 1.35 0 0 1-1.948 0l-9.72-10.122a1.35 1.35 0 0 1 1.948-1.87l7.396 7.702V8.1c0-.746.604-1.35 1.35-1.35Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.56 33.21a1.89 1.89 0 0 0-1.89 1.89v8.1a1.89 1.89 0 0 0 1.89 1.89h38.88a1.89 1.89 0 0 0 1.89-1.89v-8.1a1.89 1.89 0 0 0-1.89-1.89h-3.888a1.35 1.35 0 1 1 0-2.7h3.888a4.59 4.59 0 0 1 4.59 4.59v8.1a4.59 4.59 0 0 1-4.59 4.59H7.56a4.59 4.59 0 0 1-4.59-4.59v-8.1a4.59 4.59 0 0 1 4.59-4.59h3.888a1.35 1.35 0 1 1 0 2.7H7.56Z"
      />
    </svg>
  )
}
export default SvgDownloadIcon
