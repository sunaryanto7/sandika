import Header from '@components/core/Header';
import Navigation from '@components/core/Navigation';
import FilterNavigation from '@components/core/FilterNavigation';
import GlobalNotification from '@components/core/GlobalNotification';
import theme from './layout.module.scss';

const Layout = ({ children, headerTitle, enableBottomNavigation, enableFilterNavigation }) => {
    return (
        <>
            <div className={theme.wrapper}>
                <GlobalNotification />
                <Header
                    headerTitle={headerTitle}
                />
                <div className={theme.mainContent}>
                    {children}
                </div>
                {enableBottomNavigation ? <Navigation /> : null}
                {enableFilterNavigation ? <FilterNavigation /> : null}
            </div>
        </>
    );
};

export default Layout;