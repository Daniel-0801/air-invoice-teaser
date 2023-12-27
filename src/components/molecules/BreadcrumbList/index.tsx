import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { Breadcrumb, BreadcrumbProps } from "components/atoms/Breadcrumb"

import { Parameter } from "functions/url"

const Container = styled.ol`
  overflow-x: scroll;
  scrollbar-width: none;
  white-space: pre;
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }
`

interface BreadcrumbListProps {
  readonly breadcrumbs: BreadcrumbProps[]
  readonly queryParameters: Parameter[]
}

export const BreadcrumbList: React.VFC<BreadcrumbListProps> = props => {
  const { breadcrumbs, queryParameters } = props

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildJsonLd(breadcrumbs))}</script>
      </Helmet>
      <Container>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <Breadcrumb
              key={index}
              pageName={breadcrumb.pageName}
              pageLink={breadcrumb.pageLink}
              queryParameters={queryParameters}
            />
          )
        })}
      </Container>
    </>
  )
}

// 構造化データをJSON-LDの形式で作成する
const buildJsonLd = (breadcrumbs: BreadcrumbProps[]) => {
  const itemListElement = breadcrumbs.map((breadcrumb, index) => buildItemList(breadcrumb, index))

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElement,
  }
}

const buildItemList = (breadcrumb: BreadcrumbProps, index: number) => {
  const { pageName, pageLink } = breadcrumb

  if (pageLink === undefined) {
    return {
      "@type": "ListItem",
      position: index + 1,
      name: pageName,
    }
  }

  return {
    "@type": "ListItem",
    position: index + 1,
    name: pageName,
    item: pageLink,
  }
}
