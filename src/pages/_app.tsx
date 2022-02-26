import { GlobalStyles } from "../styles/global";
import type { AppProps } from "next/app";

import { LayoutApp } from "../components/LayoutApp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
    </>
  );
}

export default MyApp;
