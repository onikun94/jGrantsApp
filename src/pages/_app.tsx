import React from 'react';
import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </React.StrictMode>
  );
}
export default MyApp;
