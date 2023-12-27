import { Parameter } from "functions/url"

export interface HeaderProps {
  currentPath: PagePath | "/"
  loginOnClick: () => void
  // ABテスト実施内容によって無料アカウントボタン再表示
  // freeStartOnClick: () => void
  questionOnClick: () => void
  freeStartHref?: string
  inquiryOnClick: () => void
}

// LargeHeaderとSmallHeaderのPropsの型
export type HeaderInternalProps = { queryParameter: Parameter[] } & { pages: Page[] } & {
  AccordionPages: Page[]
} & HeaderProps

export interface Page {
  name: string
  path: string
}

type PagePath =
  | "/function/"
  | "/cost/"
  | "/flow/"
  | "/document_request/"
  | "/it-hojo/"
  | "/inquiry/"
  | "/electronic-book/"
  | "/case/"
  | "/case/01/"
  | "/case/02/"
  | "/case/03/"
