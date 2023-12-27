// 実行時に環境変数`ENV`を設定する
// e.g. ENV=staging npm run build
const env = process.env.ENV || "development"
require("dotenv").config({
  path: `.env.${env}`,
})

// TODO: src/components/sizes.ts ブレイクポイントの値を使用する
const customBreakpoints = {
  sp: `(max-width: 768px)`,
}

module.exports = {
  pathPrefix: `/invoice`,
  siteMetadata: {
    siteUrl: "https://airregi.jp",
    title: "Airインボイスティザーサイト",
  },
  plugins: [
    `gatsby-plugin-typegen`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-use-query-params`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ["/document_request/thanks/"],
      },
    },
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: customBreakpoints,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
  ],
}
