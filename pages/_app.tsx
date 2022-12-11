import "src/assets/styles/main.scss"
import type { AppProps } from "next/app"
import { Helmet, HelmetProvider } from "react-helmet-async"
import SEO from "@components/global/SEO"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <SEO {...pageProps?.seo} />
      <Helmet async>
        <body className={`bd-${pageProps?.page ?? "default"}`} />
      </Helmet>
      <Component {...pageProps} />
    </HelmetProvider>
  )
}
