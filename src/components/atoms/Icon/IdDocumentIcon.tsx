import * as React from "react"

import { IconProps } from "components/atoms/Icon/IconProps"
export const SvgIdDocumentIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 78 79"
      fill={props.fill == null ? "currentColor" : props.fill}
      stroke={props.fill == null ? "currentColor" : props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.699 38.814c-3.072 0-5.574-2.486-5.574-5.54 0-3.059 2.502-5.546 5.574-5.546s5.573 2.487 5.573 5.541c.004 3.059-2.497 5.545-5.573 5.545Zm0-9.981c-2.462 0-4.463 1.989-4.463 4.436 0 2.448 2.001 4.437 4.463 4.437s4.463-1.99 4.463-4.437c0-2.443-2.001-4.436-4.463-4.436ZM58.655 49.284h-12.21a1.762 1.762 0 0 1-1.765-1.755v-2.443c0-2.005.744-3.615 2.418-5.216a.561.561 0 0 1 .788.015.553.553 0 0 1-.016.784c-1.457 1.394-2.08 2.717-2.08 4.42v2.444c0 .356.292.65.654.65h12.211c.358 0 .654-.29.654-.65V45.09c0-1.708-.622-3.031-2.084-4.425a.553.553 0 0 1-.016-.783.561.561 0 0 1 .788-.016c1.678 1.602 2.427 3.21 2.427 5.22v2.443a1.768 1.768 0 0 1-1.769 1.755Z"
        strokeWidth={2}
      />
      <rect x={6.058} y={17.189} width={65.883} height={44.418} rx={5} fill="none" strokeWidth={4} />
      <path d="M18.175 32.246h17.417M18.175 39.774h17.417M18.175 47.303h17.417" strokeWidth={4} strokeLinecap="round" />
    </svg>
  )
}
export default SvgIdDocumentIcon
