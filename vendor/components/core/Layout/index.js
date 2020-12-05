import PropTypes from 'prop-types';
import Head from 'next/head';
import Footer from '@sandika_components/core/Footer';
import Header from '@sandika_components/core/Header';
import Navigation from '@sandika_components/core/Navigation';
import theme from './layout.module.scss';

const Layout = ({ header, navigation, footer, children, nomargin }) => {
  const styles = {
    wrapper: theme['wrapper'],
    main: () => {
      if (nomargin) {
        return [theme['main__content'], theme['main__content--nomargin']].filter(Boolean).join(' ');
      }
      return theme['main__content'];
    }
  };

  return (
    <>
      <Head>
        {process.env.NODE_ENV !== 'production' && (
          <link
            rel="stylesheet"
            type="text/css"
            href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}
          />
        )}
      </Head>
      <div className={styles.wrapper} id={'main'}>
        {header !== undefined && header.enable && <Header {...header.props} />}
        <div className={styles.main()}>{children}</div>
        {navigation !== undefined && navigation.enable && <Navigation {...navigation.props} />}
        {footer !== undefined && footer.enable && <Footer />}
      </div>
    </>
  );
};

Layout.defaultProps = {
  children: [],
  header: [],
  navigation: [],
  nomargin: false
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  header: PropTypes.object,
  navigation: PropTypes.object,
  nomargin: PropTypes.bool
};

export default React.memo(Layout);
