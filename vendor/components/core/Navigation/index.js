import { useState } from 'react';
import { Router } from '@sandika_environment/i18n';
import Button from '@sandika_components/commons/Button';
import SearchDrawer from '@sandika_components/core/SearchDrawer';

import HomeIcon from '@public/media/icons/home.svg';
import SearchIcon from '@public/media/icons/search.svg';
import UserIcon from '@public/media/icons/user.svg';
import BasketIcon from '@public/media/icons/supermarket.svg';
import './navigation.module.scss';

const ButtonNavigation = ({ children, link, name, onClick }) => {
  if (name === 'search' && link === null) {
    return (
      <Button fullWidth onClick={onClick} style={'navigation__link'}>
        <SearchIcon className={'search_icon'} />
      </Button>
    );
  }

  return (
    <Button
      fullWidth
      style={'navigation__link'}
      onClick={() => {
        Router.push(link);
      }}>
      {children}
    </Button>
  );
};

const Navigation = ({ active, search }) => {
  const [openSearch, setOpenSearch] = useState(false);

  const buttonList = [
    {
      name: 'home',
      link: '/',
      icon: <HomeIcon className={'home_icon'} />,
      onClick: null
    },
    {
      name: 'search',
      link: search.enable ? null : '/search',
      icon: <SearchIcon className={'search_icon'} />,
      onClick: () => {
        setOpenSearch(!openSearch);
      }
    },
    {
      name: 'cart',
      link: '/cart',
      icon: <BasketIcon className={'heart_icon'} />,
      onClick: null
    },
    {
      name: 'account',
      link: '/account',
      icon: <UserIcon className={'user_icon'} />,
      onClick: null
    }
  ];

  return (
    <>
      <div className={'navigation'}>
        {buttonList.map((data, i) => {
          return (
            <div
              className={
                active === data.name
                  ? 'navigation__item navigation__item-active'
                  : 'navigation__item'
              }
              key={i}>
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

export default Navigation;
