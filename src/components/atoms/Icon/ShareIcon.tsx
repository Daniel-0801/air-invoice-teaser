import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"
export const SvgShareIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.952 1.256a.6.6 0 0 0-.848 0L7.218 6.142a.6.6 0 0 0 .848.848l3.862-3.861v9.627a.6.6 0 0 0 1.2 0V3.129L16.99 6.99a.6.6 0 1 0 .848-.848l-4.886-4.886ZM3.74 11.52c0-.729.591-1.32 1.32-1.32h1.369a.6.6 0 0 0 0-1.2H5.06a2.52 2.52 0 0 0-2.52 2.52v9.36a2.52 2.52 0 0 0 2.52 2.52H19.7a2.52 2.52 0 0 0 2.52-2.52v-9.36A2.52 2.52 0 0 0 19.7 9h-1.369a.6.6 0 0 0 0 1.2H19.7c.73 0 1.32.591 1.32 1.32v9.36c0 .729-.59 1.32-1.32 1.32H5.06a1.32 1.32 0 0 1-1.32-1.32v-9.36Z"
      />
    </svg>
  )
}
export default SvgShareIcon
