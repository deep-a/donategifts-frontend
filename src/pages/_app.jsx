import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import '@styles/style.scss';
import { SSRProvider } from 'react-bootstrap';
import { applyIcons } from '@common/utils/faIcons';

// used to be able to load icons via name
applyIcons();

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default appWithTranslation(App);
