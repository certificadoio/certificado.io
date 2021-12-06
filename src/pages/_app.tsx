import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import "@fontsource/inter"

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Certificado.io</title>
        <script dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="b42f1606-7b12-4d0a-b07e-ecbe710e8c7c";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
        }}></script>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
