// REDUX
import { Provider } from 'react-redux';
import storeWrapper from "@redux";

// Locales / Translation / Language
import { appWithTranslation } from '@i18n';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

// GLOBAL STYLE
import '@styles/core.scss';

library.add(faShoppingCart, faBars)

function Sandika({ Component, pageProps }) {
    return (
        <Provider store={storeWrapper}>
            <Component {...pageProps} />
        </Provider>
    );
};

Sandika.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {}
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps }
}

export default appWithTranslation(Sandika);
