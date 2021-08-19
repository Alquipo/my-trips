import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import { StickyNote } from 'components/StickyNote'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="img/icon-512.png" />
        <link rel="apple-touch-icon" href="img/icon-512.png" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f2f3f5" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <DefaultSeo {...SEO} />
      <NextNprogress
        color="#f231a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <GlobalStyles />
      <Component {...pageProps} />

      <StickyNote>
        <p>
          Esse é um site de estudos! Quer saber mais acesse o{' '}
          <a href="https://github.com/Alquipo/my-trips">Github</a>
        </p>
      </StickyNote>
    </ThemeProvider>
  )
}

export default App
