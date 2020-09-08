import PropTypes from 'prop-types';
import { useContext } from 'react';
import { I18NContext } from '@environment/context/i18n_context';
import GlobalNotification from '@components/core/GlobalNotification';
import MenuIcon from '@public/media/icons/menu.svg';
import BasketIcon from '@public/media/icons/supermarket.svg';
import theme from './header.module.scss';


const Header = () => {
    const { t } = useContext(I18NContext);

    return (
        <>
            <div className={theme.header}>
                <div className={theme.headerPanel}>
                    <GlobalNotification />
                </div>
                <div className={theme.headerContent}>
                    <div className={theme.nav}>
                        <MenuIcon className={theme.menu_icon} />
                    </div>
                    <div className={theme.app_name}>
                        <h1>{t('core:Sandika')}</h1>
                    </div>
                    <div className={theme.minicartblock}>
                        <BasketIcon className={theme.shop_icon} />
                    </div>
                </div>
            </div>
        </>
    );
};

Header.propTypes = {
    headerTitle: PropTypes.string
};

export default Header;
