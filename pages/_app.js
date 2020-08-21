// REDUX
import { Provider } from 'react-redux';
import storeWrapper from "@redux";

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

export default Sandika;
