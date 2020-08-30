import PropTypes from 'prop-types';
import Header from '@components/core/Header';
import Footer from '@components/core/Footer';
import Navigation from '@components/core/Navigation';
import FilterNavigation from '@components/core/FilterNavigation';
import GlobalNotification from '@components/core/GlobalNotification';
import theme from './layout.module.scss';

const Layout = ({
    children,
    headerTitle,
    enableFooter,
    enableBottomNavigation,
    enableFilterNavigation
}) => {
    return (
        <>
            <div className={theme.wrapper}>
                <GlobalNotification />
                <Header headerTitle={headerTitle} />
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
    enableFooter: PropTypes.bool,
    enableBottomNavigation: PropTypes.bool,
    enableFilterNavigation: PropTypes.bool
};

export default Layout;
