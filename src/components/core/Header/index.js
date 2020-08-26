import MenuIcon from '@public/media/icons/menu.svg';
import BasketIcon from '@public/media/icons/supermarket.svg';
import theme from './header.module.scss';

const Header = ({ headerTitle }) => {
    return (
        <>
            <div className={theme.header}>
                <div className={theme.nav}>
                    <MenuIcon className={theme.menu_icon} />
                </div>
                <div className={theme.app_name}>
                    <h1>{headerTitle}</h1>
                </div>
                <div className={theme.minicartblock}>
                    <BasketIcon className={theme.shop_icon} />
                </div>
            </div>
        </>
    );
};

export default Header;