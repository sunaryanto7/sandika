import PropTypes from 'prop-types';
import { Router } from '@environment/i18n';
import Button from '@components/commons/Button';
import theme from './headernavigation.module.scss';
import ArrowBackIcon from '@public/media/icons/back.svg';
import GlobalNotification from '@components/core/GlobalNotification';

const HeaderNavigation = ({ headerTitle }) => {
    console.log(theme.buttonBack);
    return (
        <>
            <div className={theme.header}>
                <div className={theme.headerPanel}>
                    <GlobalNotification />
                </div>
                <div className={theme.headerContent}>
                    <div className={theme.nav}>
                        <Button
                            btnTransparent
                            onClick={() => { Router.back(); }}>
                            <ArrowBackIcon className={theme.menu_icon} />
                        </Button>
                    </div>
                    <div className={theme.app_name}>
                        <h1>{headerTitle}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

HeaderNavigation.propTypes = {
    headerTitle: PropTypes.string
};

export default HeaderNavigation;
