import Header from '@components/core/Header';
import Navigation from '@components/core/Navigation';
import theme from './layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <div className={theme.wrapper}>
                <Header />
                <div className={theme.mainContent}>
                    {children}
                </div>
                <Navigation />
            </div>
        </>
    );
};

export default Layout;