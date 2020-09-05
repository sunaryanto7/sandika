import PropTypes from 'prop-types';
import dynamic from "next/dynamic";
import HeaderNavigation from '@components/core/HeaderNavigation';
import HeaderSearch from '@components/core/HeaderSearch';
import Footer from '@components/core/Footer';
import Filter from '@components/core/Filter';
import theme from './layout.module.scss';
import Loader from '@components/core/Loader';

const Header = dynamic(() => import('@components/core/Header'));
const Navigation = dynamic(() => import('@components/core/Navigation'));

const Layout = ({
    isLoading,
    children,
    headerTitle,
    enableHeader,
    enableNavigationHeader,
    enableSearchHeader,
    enableFooter,
    enableBottomNavigation,
    enableFilterNavigation,
}) => {
    return (
        <>
            <div className={theme.wrapper}>
                {enableHeader ? <Header headerTitle={headerTitle} /> : null}
                {enableNavigationHeader ? <HeaderNavigation headerTitle={headerTitle} /> : null}
                {enableSearchHeader ? <HeaderSearch headerTitle={headerTitle} /> : null}

                {isLoading ? <Loader /> : <div className={theme.mainContent}>{children}</div>}

                {enableFooter ? <Footer /> : null}
                {enableBottomNavigation ? <Navigation /> : null}
                {enableFilterNavigation ? <Filter /> : null}
            </div>
        </>
    );
};

Layout.propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    headerTitle: PropTypes.string,
    enableHeader: PropTypes.bool,
    enableNavigationHeader: PropTypes.bool,
    enableSearchHeader: PropTypes.bool,
    enableFooter: PropTypes.bool,
    enableBottomNavigation: PropTypes.bool,
    enableFilterNavigation: PropTypes.bool
};

export default Layout;
