import { Router } from '@environment/i18n';
import HomeIcon from '@public/media/icons/home.svg';
import SearchIcon from '@public/media/icons/search.svg';
import HearthIcon from '@public/media/icons/heart.svg';
import UserIcon from '@public/media/icons/user.svg';
import theme from './navigation.module.scss';

const Navigation = () => {
    return (
        <>
            <div className={theme.navigation}>
                <div className={theme.navigation_item}>
                    <HomeIcon className={theme.home_icon} onClick={() => { Router.push('/') }} />
                </div>
                <div className={theme.navigation_item} onClick={() => { Router.push('/search') }}>
                    <SearchIcon className={theme.search_icon} />
                </div>
                <div className={theme.navigation_item} onClick={() => { Router.push('/wishlist') }}>
                    <HearthIcon className={theme.heart_icon} />
                </div>
                <div className={theme.navigation_item} onClick={() => { Router.push('/customer') }}>
                    <UserIcon className={theme.user_icon} />
                </div>
            </div>
        </>
    );
};

export default Navigation;
