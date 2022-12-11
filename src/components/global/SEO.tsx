import React from "react"
import Head from "next/head"
import PropTypes from "prop-types"

type Props = {
  title: string
  description: string
  richlink: string
  url: string
}
const color = "#fff" // set primary color

export default function SEO({ title, description, richlink, url }: Props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="robots" content="index,follow" />

        <title>{`${title} | Flower App`}</title>
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
        <meta name="title" content={`${title} | Flower App`} />
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${title} | Flower App`} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={`${url}${richlink}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={`${title} | Flower App`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${url}${richlink}`} />
        <meta name="msapplication-TileColor" content={color} />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content={color} />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/manifest.json" />
      </Head>
    </>
  )
}

SEO.defaultProps = {
  title: "Flower App",
  description: "Flower App for request",
  richlink: "/icons/richlink.jpg",
  url: process.env.SITE_URL || "https://www.Flower App.me",
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  richlink: PropTypes.string,
  url: PropTypes.string,
}
