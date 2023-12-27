import * as React from "react"
import { Helmet } from "react-helmet"

export const ANTI = () => {
  return (
    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://cdn.airregi.jp/invoice/script/antiflicker/antiflicker.css" />
      <script src="https://cdn.airregi.jp/invoice/script/antiflicker/antiflicker.js"></script>
    </Helmet>
  )
}
