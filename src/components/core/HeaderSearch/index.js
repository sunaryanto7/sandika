import PropTypes from 'prop-types';
import { Router } from '@environment/i18n';
import GlobalNotification from '@components/core/GlobalNotification';
import Button from '@components/commons/Button';
import ArrowBackIcon from '@public/media/icons/back.svg';
import theme from './headersearch.module.scss';

const HeaderSearch = ({ headerTitle }) => {
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
                            onClick={() => { Router.back(); }}
                        >
                            <ArrowBackIcon className={theme.menu_icon} />
                        </Button>
                    </div>
                    <div className={theme.searchForm}>
                        <form>
                            <input type={"text"} placeholder={"Cari Produk UMKM Disini..."} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

HeaderSearch.propTypes = {
    headerTitle: PropTypes.string
};

export default HeaderSearch;