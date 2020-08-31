// PROPTYPES CHECKING
import PropTypes from 'prop-types';

// APOLLO
import { ApolloProvider } from '@apollo/client';
import client from '@environment/apollo';

// Locales / Translation / Language
import { appWithTranslation } from '@environment/i18n';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

// GLOBAL STYLE
import '@environment/styles/core.scss';

library.add(faShoppingCart, faBars);

const Sandika = ({ Component, pageProps }) => {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
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
