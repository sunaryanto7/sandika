import PropTypes from 'prop-types';
import { useContext } from 'react';
import { I18NContext } from '@environment/context/i18n_context';
import { Router } from '@environment/i18n';
import Button from '@components/commons/Button';
import theme from './headernavigation.module.scss';
import ArrowBackIcon from '@public/media/icons/back.svg';
import GlobalNotification from '@components/core/GlobalNotification';

const HeaderNavigation = () => {
    const { t } = useContext(I18NContext);

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
                        <h1>{t('core:Sandika')}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

HeaderNavigation.propTypes = {

};

export default HeaderNavigation;
