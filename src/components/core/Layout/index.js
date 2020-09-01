import PropTypes from 'prop-types';
import Header from '@components/core/Header';
import NavigationHeader from '@components/core/NavigationHeader';
import Footer from '@components/core/Footer';
import Navigation from '@components/core/Navigation';
import FilterNavigation from '@components/core/FilterNavigation';
import GlobalNotification from '@components/core/GlobalNotification';
import theme from './layout.module.scss';

const Layout = ({
    children,
    headerTitle,
    enableHeader,
    enableNavigationHeader,
    enableFooter,
    enableBottomNavigation,
    enableFilterNavigation
}) => {
    return (
        <>
            <div className={theme.wrapper}>
                <GlobalNotification />
                {enableHeader ? <Header headerTitle={headerTitle} /> : null}
                {enableNavigationHeader ? <NavigationHeader headerTitle={headerTitle} /> : null}
                <div className={theme.mainContent}>{children}</div>
                {enableFooter ? <Footer /> : null}
                {enableBottomNavigation ? <Navigation /> : null}
                {enableFilterNavigation ? <FilterNavigation /> : null}
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    headerTitle: PropTypes.string,
    enableHeader: PropTypes.bool,
    enableNavigationHeader: PropTypes.bool,
    enableFooter: PropTypes.bool,
    enableBottomNavigation: PropTypes.bool,
    enableFilterNavigation: PropTypes.bool
};

export default Layout;
