import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

export default () => (
  <StaticQuery
    query={graphql`
      query helmetQuery {
        site {
          siteMetadata {
            title
            author
            imageUrl
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <title>{data.site.siteMetadata.title}</title>
        <html lang="en" />
        {/* Google / Search Engine Meta Tags */}
        <meta itemprop="name" content={data.site.siteMetadata.author} /> />
        <meta
          itemprop="description"
          content={data.site.siteMetadata.description}
        />
        <meta itemprop="image" content={data.site.siteMetadata.imageUrl} /> />
        <script
          src="https://kit.fontawesome.com/2828f7885a.js"
          integrity="sha384-WAsFbnLEQcpCk8lM1UTWesAf5rGTCvb2Y+8LvyjAAcxK1c3s5c0L+SYOgxvc6PWG"
          crossorigin="anonymous"
        ></script>
        <link rel="icon" type="image/png" href="favicon.png" />
      </Helmet>
    )}
  />
);
