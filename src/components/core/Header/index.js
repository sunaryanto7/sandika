import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '@environment/context/app_context';
import { Router } from '@environment/i18n';
import Button from '@components/commons/Button';
import GlobalNotification from '@components/core/GlobalNotification';
import ArrowBackIcon from '@public/media/icons/back.svg';
import MenuIcon from '@public/media/icons/menu.svg';
import BasketIcon from '@public/media/icons/supermarket.svg';
import theme from './header.module.scss';

const Header = (props) => {
  const { withAppName, withMinicart, withNavigation, withSearch } = props;
  const { t } = useContext(AppContext);

  return (
    <>
      <div className={theme.header}>
        <div className={theme.header__panel}>
          <GlobalNotification />
        </div>
        <div className={theme.header__content}>
          {/* Sidebar Icon */}
          {!withNavigation && (
            <div className={theme.nav}>
              <MenuIcon className={theme.menu__icon} />
            </div>
          )}

          {/* Back Navigation */}
          {withNavigation && (
            <div className={theme.nav}>
              <Button
                btnTransparent
                onClick={() => {
                  Router.back();
                }}>
                <ArrowBackIcon className={theme.menu__icon} />
              </Button>
            </div>
          )}

          {/* Search */}

          {/* App Name */}
          {withAppName && (
            <div className={theme.app__name}>
              <h1
                onClick={() => {
                  Router.push('/');
                }}>
                {t('core:Sandika')}
              </h1>
            </div>
          )}

          {/* Minicart */}
          {withMinicart && (
            <div className={theme.minicart__block}>
              <BasketIcon className={theme.shop__icon} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  headerTitle: PropTypes.string
};

export default Header;
