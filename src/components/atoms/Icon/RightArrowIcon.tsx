import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"

export const SvgRightArrowIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 10 18"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m2.192.388 7.433 7.66c.245.253.375.589.375.95-.01.363-.13.701-.375.954l-7.433 7.66a1.257 1.257 0 0 1-1.816 0 1.354 1.354 0 0 1 0-1.873L6.916 9 .375 2.26c-.5-.516-.5-1.356.001-1.872a1.256 1.256 0 0 1 1.816 0Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h10v18H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default SvgRightArrowIcon
