import '@styles/style.scss';
import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { SSRProvider } from 'react-bootstrap';
import { applyIcons } from '@common/utils/faIcons';

// used to be able to load icons via name
applyIcons();

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return <Component {...pageProps} />;
}

function WrappedApp(props) {
  return (
    <SSRProvider>
      <App {...props} />
    </SSRProvider>
  );
}

export default appWithTranslation(WrappedApp);
