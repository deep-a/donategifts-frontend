import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min');
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
