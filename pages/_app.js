/*
@@  
@@  GLOBAL STYLES
@@  
*/
import '@sandika_styles/core.css';
import 'swiper/swiper-bundle.min.css';

/*
@@  
@@  FOR PROPTYPE CHECKING
@@  
*/
import PropTypes from 'prop-types';

/*
@@  
@@  SANDIKA CONTEXT PROVIDER CLIENT SIDE
@@  
*/
import AppContextProvider from '@sandika_environment/context';

/*
@@  
@@  FOR TRANSLATION AND ROUTING
@@  
*/
// import { appWithTranslation } from '@sandika_environment/i18n';

/*
@@  
@@  FONT AWESOME LIBRARY PACKAGE
@@  add some icon name on library if you want to call it using css-declared font
@@
*/
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faBars, faArrowLeft, faFilter } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart, faBars, faArrowLeft, faFilter);

const Sandika = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
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

export default Sandika;
