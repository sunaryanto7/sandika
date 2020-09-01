import theme from './navigationheader.module.scss';
import ArrowBackIcon from '@public/media/icons/back.svg';

const NavigationHeader = ({ headerTitle }) => {
    return (
        <>
            <div className={theme.header}>
                <div className={theme.nav}>
                    <ArrowBackIcon className={theme.menu_icon} />
                </div>
                <div className={theme.app_name}>
                    <h1>{headerTitle}</h1>
                </div>
            </div>
        </>
    );
};

export default NavigationHeader