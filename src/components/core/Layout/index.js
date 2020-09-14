import PropTypes from 'prop-types';

import Footer from '@components/core/Footer';
import Filter from '@components/core/Filter';
import Header from '@components/core/Header';
import Navigation from '@components/core/Navigation';
import theme from './layout.module.scss';

const Layout = ({
    header,
    navigation,
    footer,
    filter,
    children
}) => {

    return (
        <>
            <div className={theme.wrapper}>
                {(header !== undefined && header.enable && <Header {...header.props} />)}
                <div className={theme.main__content}>{children}</div>
                {(navigation !== undefined && navigation.enable && <Navigation {...navigation.props} />)}
                {(filter !== undefined && filter.enable && <Filter />)}
                {(footer !== undefined && footer.enable && <Footer />)}
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
