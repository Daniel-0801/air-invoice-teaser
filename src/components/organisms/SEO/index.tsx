import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import ogImage from "images/og/og.png"

interface SEOProps {
  readonly title?: string
  readonly description?: string
  readonly keywords?: string
  readonly pathWithPrefix?: string
  readonly noindex?: boolean
}

export const SEO: React.VFC<SEOProps> = props => {
  const { title, description, keywords, pathWithPrefix, noindex = false } = props

  if (noindex) {
    return (
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
    )
  }

  if (description === undefined) {
    throw new Error("description cannot be undefined when noindex is false")
  }

  if (pathWithPrefix === undefined) {
    throw new Error("path cannot be undefined when noindex is false")
  }

  const defaultTitle = "【Airインボイス】振込も保管もラクになる請求書支払アプリ"
  const titleTemplate = "%s【Airインボイス】 | 請求書管理・支払いがカンタンにできる"

  const { siteUrl } = useSiteMetadata()
  const pageUrl = `${siteUrl}${pathWithPrefix}`
  const ogImageUrl = `${siteUrl}${ogImage}`

  return (
    <Helmet defaultTitle={defaultTitle} titleTemplate={titleTemplate}>
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:urlx" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? titleTemplate.replace("%s", title) : defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Airインボイス" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="twitter:image" content={ogImageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@AirREGI" />
    </Helmet>
  )
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteQuery>(graphql`
    query Site {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const siteUrl = site?.siteMetadata?.siteUrl
  if (siteUrl === undefined) {
    throw new Error("Cannot fetch siteUrl")
  }

  return { siteUrl }
}
