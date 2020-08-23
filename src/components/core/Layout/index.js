import Header from '@components/core/Header';
import Navigation from '@components/core/Navigation';
import GlobalNotification from '@components/core/GlobalNotification';
import theme from './layout.module.scss';

const Layout = ({ children, headerTitle }) => {
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
                <Navigation />
            </div>
        </>
    );
};

export default Layout;