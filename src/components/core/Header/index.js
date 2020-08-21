import MenuIcon from '@media/icons/menu.svg';
import BasketIcon from '@media/icons/supermarket.svg';
import theme from './header.module.scss';

const Header = () => {
    return (
        <>
            <div className={theme.header}>
                <div className={theme.nav}>
                    <MenuIcon className={theme.menu_icon} />
                </div>
                <div className={theme.app_name}>
                    <h1>Sandika</h1>
                </div>
                <div className={theme.minicartblock}>
                    <BasketIcon className={theme.shop_icon} />
                </div>
            </div>
        </>
    );
};

export default Header;