import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"
export const SvgLinkIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 14 14"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 11.086V8.75a.584.584 0 0 0-1.167 0v2.336c0 .32-.26.58-.58.58H2.915a.584.584 0 0 1-.583-.583V5.25c0-.321.262-.583.583-.583h2.333a.584.584 0 0 0 0-1.167H2.916c-.965 0-1.75.785-1.75 1.75v5.833c0 .965.785 1.75 1.75 1.75h5.836a1.75 1.75 0 0 0 1.747-1.747Zm2.333-9.336v4.667a.584.584 0 0 1-1.167 0V3.158L6.828 7.996a.582.582 0 0 1-.824 0 .583.583 0 0 1 0-.825l4.837-4.838H7.583a.584.584 0 0 1 0-1.166h4.666c.322 0 .584.261.584.583Z"
      />
    </svg>
  )
}
export default SvgLinkIcon
