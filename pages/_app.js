// GLOBAL STYLE
import '@environment/styles/core.scss';

// REACT
import { useEffect, useState } from 'react';

// PROPTYPES CHECKING
import PropTypes from 'prop-types';

// APOLLO
import { ApolloProvider } from '@apollo/client';
import client from '@environment/apollo';

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
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);

        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);
    return (
        <ApolloProvider client={client}>
            {loading ? <Loader /> : <Component {...pageProps} />}
        </ApolloProvider>
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
