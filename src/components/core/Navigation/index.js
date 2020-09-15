import { useState, useEffect } from 'react';
import { Router } from '@environment/i18n';
import Button from '@components/commons/Button';
import SearchDrawer from '@components/core/SearchDrawer';

import HomeIcon from '@public/media/icons/home.svg';
import SearchIcon from '@public/media/icons/search.svg';
import UserIcon from '@public/media/icons/user.svg';
import BasketIcon from '@public/media/icons/supermarket.svg';
import theme from './navigation.module.scss';

const Navigation = ({ active, search }) => {

    const [openSearch, setOpenSearch] = useState(false);

    var classNames = [
        theme.navigation__item,
        active ? theme.navigation__item_active : null,
    ].filter(Boolean).join(" ");

    useEffect(() => {
        openSearch ?
            document.body.style.overflow = 'hidden' :
            document.body.removeAttribute("style")
    }, [openSearch])

    return (
        <>
            <div className={theme.navigation}>
                <div className={classNames}>
                    <Button
                        btnWhite
                        fullWidth
                        onClick={() => {
                            Router.push('/');
                        }}>
                        <HomeIcon className={theme.home_icon} />
                    </Button>
                </div>
                {(search.enable && <div className={classNames}>
                    <Button
                        btnWhite
                        fullWidth
                        onClick={() => {
                            search.type === 'drawer' ? setOpenSearch(!openSearch) : console.log(false)
                        }}>
                        <SearchIcon className={theme.search_icon} />
                    </Button>
                </div>)}
                <div className={classNames}>
                    <Button
                        btnWhite
                        fullWidth
                        onClick={() => {
                            Router.push('/cart');
                        }}>
                        <BasketIcon className={theme.heart_icon} />
                    </Button>
                </div>
                <div className={classNames}>
                    <Button
                        btnWhite
                        fullWidth
                        onClick={() => {
                            Router.push('/customer');
                        }}>
                        <UserIcon className={theme.user_icon} />
                    </Button>
                </div>
            </div>

            {(search.enable && search.type === 'drawer' && <SearchDrawer
                isOpen={openSearch}
                direction={'right'}
                handleClose={() => { setOpenSearch(!openSearch) }}
            >
                hai
            </SearchDrawer>)}
        </>
    );
};

export default Navigation;
