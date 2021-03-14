import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@sandika_components/commons/Button';
import SearchDrawer from '@sandika_components/core/SearchDrawer';

import HomeIcon from '@public/media/icons/home.svg';
import SearchIcon from '@public/media/icons/search.svg';
import UserIcon from '@public/media/icons/user.svg';
import BasketIcon from '@public/media/icons/supermarket.svg';
import * as theme from './navigation.module.scss';

const ButtonNavigation = ({ children, link, name, onClick }) => {
  const Router = useRouter();

  if (name === 'search' && link === null) {
    return (
      <Button
        fullWidth
        onClick={onClick}>
        <SearchIcon className={'search_icon'} />
      </Button>
    );
  }

  return (
    <Button
      fullWidth
      onClick={() => {
        Router.push(link);
      }}>
      {children}
    </Button>
  );
};

const Navigation = ({ active, search }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const styles = {
    navigation: theme['navigation'],
    navigation__item: (name) =>
      active === name
        ? [theme['navigation__item'], theme['navigation__item_active']].filter(Boolean).join(' ')
        : theme['navigation__item']
  };

  const buttonList = [
    {
      name: 'home',
      link: '/',
      icon: <HomeIcon />,
      onClick: null
    },
    {
      name: 'search',
      link: search.enable ? null : '/search',
      icon: <SearchIcon />,
      onClick: () => {
        setOpenSearch(!openSearch);
      }
    },
    {
      name: 'cart',
      link: '/cart',
      icon: <BasketIcon />,
      onClick: null
    },
    {
      name: 'account',
      link: '/account',
      icon: <UserIcon />,
      onClick: null
    }
  ];

  return (
    <>
      <div className={styles.navigation}>
        {buttonList.map((data, i) => {
          return (
            <div className={styles.navigation__item(data.name)} key={i}>
              <ButtonNavigation link={data.link} name={data.name} onClick={data.onClick}>
                {data.icon}
              </ButtonNavigation>
            </div>
          );
        })}

        {search.enable && search.type === 'drawer' && (
          <SearchDrawer
            open={openSearch}
            handleClose={() => {
              setOpenSearch(!openSearch);
            }}
          />
        )}
      </div>
    </>
  );
};

export default React.memo(Navigation);
