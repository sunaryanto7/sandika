import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';
import { Router } from '@sandika_environment/i18n';
import Button from '@sandika_components/commons/Button';
import GlobalNotification from '@sandika_components/core/GlobalNotification';
import ArrowBackIcon from '@public/media/icons/back.svg';
import MenuIcon from '@public/media/icons/menu.svg';
import BasketIcon from '@public/media/icons/supermarket.svg';
import theme from './header.module.scss';

const Header = (props) => {
  const { withAppName, withMinicart, withNavigation, withSearch } = props;
  const { t } = useContext(AppContext);

  const style = {
    // Header
    'header': theme['header'],
    'header__panel': theme['header__panel'],
    'heaedr__content': theme['header__content'],
    // Toggle
    'sidebar__toolge': theme['sidebar__toggle'],
    // Navigation
    'history__back': theme['history__back'],
    // App name
    'app__name': theme['app__name'],
    // Minicart
    'minicart': theme['minicart'],
    'icon': theme['icon'],
    'shop__icon': theme['shop__icon']
  };

  return (
    <>
      <div className={theme.header}>
        <div className={theme.header__panel}>
          <GlobalNotification />
        </div>
        <div className={theme.header__content}>
          {/* Sidebar Icon */}
          {!withNavigation && (
            <div className={theme.sidebar__toggle}>
              <MenuIcon className={theme.icon} />
            </div>
          )}

          {/* Back Navigation */}
          {withNavigation && (
            <div className={theme.history__back}>
              <Button
                btnTransparent
                onClick={() => {
                  Router.back();
                }}>
                <ArrowBackIcon className={theme.icon} />
              </Button>
            </div>
          )}

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
            <div className={theme.minicart}>
              <BasketIcon className={theme.shop__icon} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {
  headerTitle: '',
  withAppName: false,
  withMinicart: false,
  withNavigation: false,
  withSearch: false
};

Header.propTypes = {
  headerTitle: PropTypes.string,
  withAppName: PropTypes.bool,
  withMinicart: PropTypes.bool,
  withNavigation: PropTypes.bool,
  withSearch: PropTypes.bool,
};

export default Header;
