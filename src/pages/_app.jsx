import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import '../styles/style.scss';
import { SSRProvider } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
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
