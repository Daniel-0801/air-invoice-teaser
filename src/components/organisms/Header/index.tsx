import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"

import { LargeHeader } from "components/organisms/Header/LargeHeader"
import { SmallHeader } from "components/organisms/Header/SmallHeader"
import { HeaderProps } from "components/organisms/Header/types"

import { PageName } from "functions/adobeAnalytics/common"
import { Parameter } from "functions/url"

export const Header: React.VFC<HeaderProps> = props => {
  // ヘッダーから内部リンクへの遷移時に付与するクエリパラメータ
  const queryParameter: Parameter[] = [
    {
      key: "ref",
      value: PageName.Common + "_header",
    },
  ]

  const pages: {
    name: string
    path: string
  }[] = [
    // {
    //   name: "電子帳簿保存法対応",
    //   path: "/electronic-book/",
    // },
    // {
    //   name: "機能紹介",
    //   path: "/function/",
    // },
    {
      name: "費用・料金",
      path: "/cost/",
    },
    {
      name: "導入の流れ",
      path: "/flow/",
    },
    {
      name: "導入事例",
      path: "/case/",
    },
  ]

  const AccordionPages: {
    name: string
    path: string
  }[] = [
    {
      name: "電子帳簿保存法対応",
      path: "/electronic-book/",
    },
    {
      name: "機能紹介",
      path: "/function/",
    },
  ]

  const breakpoint = useBreakpoint()

  if (breakpoint.sp) {
    return <SmallHeader queryParameter={queryParameter} pages={pages} AccordionPages={AccordionPages} {...props} />
  }

  return <LargeHeader queryParameter={queryParameter} pages={pages} AccordionPages={AccordionPages} {...props} />
}
