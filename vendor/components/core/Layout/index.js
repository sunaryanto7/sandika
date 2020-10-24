import PropTypes from 'prop-types';

import Footer from '@sandika_components/core/Footer';
import Header from '@sandika_components/core/Header';
import Navigation from '@sandika_components/core/Navigation';
import theme from './layout.module.scss';

const Layout = ({ header, navigation, footer, filter, children, nomargin }) => {

  const style = {
    'wrapper': theme['wrapper'],
    'main': () => {
      if (nomargin) { return [theme['main__content'], theme['main__content--nomargin']].filter(Boolean).join(' ') }
      return theme['main__content']
    }
  };

  return (
    <>
      <div className={style.wrapper} id={'main'}>
        {header !== undefined && header.enable && <Header {...header.props} />}
        <div className={style.main()}>
          {children}
        </div>
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

export default Layout;
