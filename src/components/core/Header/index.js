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
      <div className={'header'}>
        <div className={'header__panel'}>
          <GlobalNotification />
        </div>
        <div className={'header__content'}>

          {/* Sidebar Icon */}
          {!withNavigation && (
            <div className={'sidebar__toggle'}>
              <MenuIcon className={'menu__icon'} />
            </div>
          )}

          {/* Back Navigation */}
          {withNavigation && (
            <div className={'history__back'}>
              <Button
                btnTransparent
                onClick={() => {
                  Router.back();
                }}>
                <ArrowBackIcon className={'menu__icon'} />
              </Button>
            </div>
          )}

          {/* App Name */}
          {withAppName && (
            <div className={'app__name'}>
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
            <div className={'minicart__block'}>
              <BasketIcon className={'shop__icon'} />
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
