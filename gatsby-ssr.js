import React from "react"

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  // 403エラーが発生するため、gatsby-plugin-manifest-linkによって追加される
  // <link rel="manifest" href="/invoice/manifest.webmanifest">を削除
  const headComponentsWithoutManifest = headComponents.filter(
    headComponent => headComponent.key !== "gatsby-plugin-manifest-link",
  )
  replaceHeadComponents(headComponentsWithoutManifest)
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    // Adobe Analytics用共通スクリプト
    <script key="adobe-analytics-external-src" src={process.env.GATSBY_ADOBE_ANALYTICS_SRC} />,
  ])
}
