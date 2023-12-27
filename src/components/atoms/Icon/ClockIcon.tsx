import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"
export const SvgClockIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.361 7.187a3.594 3.594 0 0 0-5.52-4.518c2.312.84 4.255 2.45 5.52 4.518ZM3.36 12.633a8.642 8.642 0 1 1 14.074 6.722 8.604 8.604 0 0 1-5.432 1.92 8.604 8.604 0 0 1-5.432-1.92.6.6 0 0 0-.802.042l-2.053 2.054a.6.6 0 1 0 .848.849l1.683-1.683a9.8 9.8 0 0 0 5.756 1.858 9.8 9.8 0 0 0 5.757-1.858L19.44 22.3a.6.6 0 0 0 .849-.849l-1.599-1.598a9.817 9.817 0 0 0 3.153-7.22c0-5.435-4.406-9.841-9.842-9.841-5.436 0-9.842 4.406-9.842 9.841a9.8 9.8 0 0 0 1.276 4.85.6.6 0 1 0 1.044-.592 8.6 8.6 0 0 1-1.12-4.257Zm9.07-4.45a.6.6 0 0 0-1.2 0v5.135a.6.6 0 0 0 .6.6h4.28a.6.6 0 1 0 0-1.2h-3.68V8.184ZM2.317 5.275c0 .703.202 1.359.55 1.913a10.817 10.817 0 0 1 5.52-4.518 3.594 3.594 0 0 0-6.07 2.605Z"
      />
    </svg>
  )
}
export default SvgClockIcon
