import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '@/styles/style.scss';
import { SSRProvider } from 'react-bootstrap';

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min');
  }, []);
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default appWithTranslation(App);
