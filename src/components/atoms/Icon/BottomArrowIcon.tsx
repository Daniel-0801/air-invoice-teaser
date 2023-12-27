import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"
export const SvgBottomArrowIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 19 10"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m18.112 2.192-7.66 7.433a1.348 1.348 0 0 1-.95.375c-.363-.01-.701-.13-.954-.375L.888 2.192a1.257 1.257 0 0 1 0-1.816 1.354 1.354 0 0 1 1.873 0l6.74 6.54L16.24.375a1.354 1.354 0 0 1 1.872 0 1.256 1.256 0 0 1 0 1.816Z"
      />
    </svg>
  )
}
export default SvgBottomArrowIcon
