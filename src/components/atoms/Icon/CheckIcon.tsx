import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"

export const SvgCheckIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 13 10"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.993.5a1.037 1.037 0 0 0-.71.283L4.615 7.17 1.717 4.39a1.029 1.029 0 0 0-.711-.281 1.03 1.03 0 0 0-.711.281.93.93 0 0 0 0 1.364l3.609 3.462a1.035 1.035 0 0 0 1.421 0l7.379-7.07a.952.952 0 0 0 .275-.494.928.928 0 0 0-.057-.557.975.975 0 0 0-.37-.433 1.038 1.038 0 0 0-.56-.163Z" />
    </svg>
  )
}
export default SvgCheckIcon
