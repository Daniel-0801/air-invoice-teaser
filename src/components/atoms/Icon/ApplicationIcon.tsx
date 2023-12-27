import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"
export const SvgApplicationIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 54 54"
      fill={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.354 44.44a1.217 1.217 0 1 1-2.434 0 1.217 1.217 0 0 1 2.434 0Z" />
      <rect x={16.74} y={12.42} width={19.98} height={2.7} rx={1.35} />
      <rect x={16.74} y={17.82} width={19.98} height={2.7} rx={1.35} />
      <rect x={16.74} y={23.22} width={19.98} height={2.7} rx={1.35} />
      <rect x={25.92} y={28.62} width={10.8} height={2.7} rx={1.35} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.14 3.78c-2.695 0-4.88 2.192-4.88 4.896v36.372a4.868 4.868 0 0 0 4.868 4.868h15.356c.044.005.089.007.134.007h7.56a4.995 4.995 0 0 0 4.995-4.995v-.27a1.215 1.215 0 0 0-2.43 0v.27a2.565 2.565 0 0 1-2.565 2.565h-4.631a1.24 1.24 0 0 0-.166-.011H15.128a2.434 2.434 0 0 1-2.434-2.434v-3.346h14.665c.06.009.12.013.181.013h10.638a4.995 4.995 0 0 0 4.995-4.995v-.967c.018-.083.027-.169.027-.257V8.676c0-2.704-2.185-4.896-4.88-4.896H15.14Zm25.62 28.687V8.676a2.444 2.444 0 0 0-2.44-2.448H15.14a2.444 2.444 0 0 0-2.44 2.448v30.592h15.814c.07 0 .138.006.204.017h9.46a2.565 2.565 0 0 0 2.565-2.565v-4.05c0-.07.006-.137.017-.203Z"
      />
    </svg>
  )
}
export default SvgApplicationIcon
