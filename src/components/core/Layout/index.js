import PropTypes from 'prop-types';
import dynamic from "next/dynamic";
import NavigationHeader from '@components/core/NavigationHeader';
import Footer from '@components/core/Footer';
import FilterNavigation from '@components/core/FilterNavigation';
import theme from './layout.module.scss';
import Loader from '@components/core/Loader';

const Header = dynamic(() => import('@components/core/Header'), { ssr: false });
const Navigation = dynamic(() => import('@components/core/Navigation'), { ssr: false });


const Layout = ({
    isLoading,
    children,
    headerTitle,
    enableHeader,
    enableNavigationHeader,
    enableFooter,
    enableBottomNavigation,
    enableFilterNavigation,
}) => {
    return (
        <>
            <div className={theme.wrapper}>
                {enableHeader ? <Header headerTitle={headerTitle} /> : null}
                {enableNavigationHeader ? <NavigationHeader headerTitle={headerTitle} /> : null}
                {isLoading ? <Loader /> : <div className={theme.mainContent}>{children}</div>}
                {enableFooter ? <Footer /> : null}
                {enableBottomNavigation ? <Navigation /> : null}
                {enableFilterNavigation ? <FilterNavigation /> : null}
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
    enableFooter: PropTypes.bool,
    enableBottomNavigation: PropTypes.bool,
    enableFilterNavigation: PropTypes.bool
};

export default Layout;
