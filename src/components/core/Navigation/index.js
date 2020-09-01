import { Router } from '@environment/i18n';
import Button from '@components/commons/Button';
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
                    <Button
                        btnWhite
                        fullWidth
                        onClick={() => {
                            Router.push('/');
                        }}>
                        <HomeIcon className={theme.home_icon} />
                    </Button>
                </div>
                <div className={theme.navigation_item}>
                    <Button
                        btnWhite
                        fullWidth
                        onClick={() => {
                            Router.push('/search');
                        }}>
                        <SearchIcon className={theme.search_icon} />
                    </Button>
                </div>
                <div className={theme.navigation_item}>
                    <Button
                        btnWhite
                        fullWidth
                        onClick={() => {
                            Router.push('/wishlist');
                        }}>
                        <HearthIcon className={theme.heart_icon} />
                    </Button>
                </div>
                <div className={theme.navigation_item}>
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
        </>
    );
};

export default Navigation;
