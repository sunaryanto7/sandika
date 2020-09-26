import PropTypes from 'prop-types';

// import Footer from '@sandika_components/core/Footer';
import Filter from '@sandika_components/core/Filter';
import Header from '@sandika_components/core/Header';
import Navigation from '@sandika_components/core/Navigation';
import './layout.module.scss';

const Layout = ({ header, navigation, footer, filter, children }) => {
  return (
    <>
      <div className={'wrapper'} id={'main'}>
        {header !== undefined && header.enable && <Header {...header.props} />}
        <div className={'main__content'}>{children}</div>
        {navigation !== undefined && navigation.enable && <Navigation {...navigation.props} />}
        {filter !== undefined && filter.enable && <Filter />}
        {/* {footer !== undefined && footer.enable && <Footer />} */}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  header: PropTypes.object,
  navigation: PropTypes.object
};

export default Layout;
