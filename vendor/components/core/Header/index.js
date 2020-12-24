import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context';
import { Router } from '@sandika_environment/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Quickcart from '@sandika_components/core/Quickcart';
import Button from '@sandika_components/commons/Button';
import GlobalNotification from '@sandika_components/core/GlobalNotification';
import LogoIcon from '@public/media/store/logotext.svg';
import * as theme from './header.module.scss';

const Header = (props) => {
  const { withAppName, withMinicart, withNavigation, withSearch } = props;
  const { t } = useContext(AppContext);

  const styles = {
    // Header
    header: [theme['header'], withNavigation && theme['header__with_navigation']]
      .filter(Boolean)
      .join(' '),
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
        {/* <div className={styles.header__panel}>
          <GlobalNotification />
        </div> */}
        <div className={styles.header__content}>
          {/* Back Navigation */}
          {withNavigation && (
            <div className={styles.history__back}>
              <Button
                btnTransparent
                onClick={() => {
                  Router.back();
                }}>
                <FontAwesomeIcon icon="arrow-left" />
              </Button>
            </div>
          )}

          {/* App Name */}
          {withAppName && (
            <div className={styles.app__name}>
              <LogoIcon
                onClick={() => {
                  Router.push('/');
                }}
              />
            </div>
          )}

          {/* Minicart */}
          {withMinicart && <Quickcart style={styles.minicart} />}
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

export default React.memo(Header);
