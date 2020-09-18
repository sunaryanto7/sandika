// GLOBAL STYLE
import '@environment/styles/core.scss';

// REACT
import { useEffect, useState } from 'react';

// PROPTYPES CHECKING
import PropTypes from 'prop-types';

// APOLLO
import { ApolloProvider } from '@apollo/client';
import client from '@environment/apollo';
import AppContextProvider from '@environment/context/app_context';

// Locales / Translation / Language , ROUTING
import { appWithTranslation, Router } from '@environment/i18n';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
// ADD THIS LINE TO CALL FONT AWESOME USING NAME OF ICON
library.add(faShoppingCart, faBars);

// LOADER
import Loader from '@components/core/Loader';

const Sandika = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const start = () => {
    setIsLoading(
      true // start load page state
    );
  };
  const finish = () => {
    setIsLoading(
      false // finish load page state
    );
  };

  useEffect(() => {
    finish();
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', finish);
    Router.events.on('routeChangeError', finish);

    return () => {
      start();
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', finish);
      Router.events.off('routeChangeError', finish);
    };
  }, []);

  return (
    <AppContextProvider>
      <ApolloProvider client={client}>
        {isLoading ? <Loader /> : <Component {...pageProps} />}
      </ApolloProvider>
    </AppContextProvider>
  );
};

Sandika.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

Sandika.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default appWithTranslation(Sandika);
