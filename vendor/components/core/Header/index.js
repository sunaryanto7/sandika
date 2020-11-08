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

  const styles = {
    // Header
    header: theme['header'],
    header__panel: theme['header__panel'],
    header__content: theme['header__content'],
    // Toggle
    sidebar__toggle: theme['sidebar__toggle'],
    // Navigation
    history__back: theme['history__back'],
    // App name
    app__name: theme['app__name'],
    // Minicart
    minicart: theme['minicart'],
    icon: theme['icon'],
    shop__icon: theme['shop__icon']
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__panel}>
          <GlobalNotification />
        </div>
        <div className={styles.header__content}>
          {/* Sidebar Icon */}
          {!withNavigation && (
            <div className={styles.sidebar__toggle}>
              <MenuIcon className={styles.icon} />
            </div>
          )}

          {/* Back Navigation */}
          {withNavigation && (
            <div className={styles.history__back}>
              <Button
                btnTransparent
                onClick={() => {
                  Router.back();
                }}>
                <ArrowBackIcon className={styles.icon} />
              </Button>
            </div>
          )}

          {/* App Name */}
          {withAppName && (
            <div className={styles.app__name}>
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
            <div className={styles.minicart}>
              <BasketIcon className={styles.shop__icon} />
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
  withSearch: PropTypes.bool
};

export default Header;
