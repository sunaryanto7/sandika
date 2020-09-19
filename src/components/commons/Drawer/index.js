import { useEffect } from 'react';
import Button from '@components/commons/Button';
import ArrowBackIcon from '@public/media/icons/back.svg';
import theme from './drawer.module.scss';

const Drawer = ({ blank, isOpen, handleClose, children }) => {
  var classNames = [theme.drawer, isOpen ? theme.drawer__open : theme.drawer__close]
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : document.body.removeAttribute('style');
  }, [isOpen]);

  return (
    <>
      <div className={classNames}>
        <div className={theme.drawer__content}>
          {(!blank && <div className={theme.drawer__header}>
            <div className={theme.drawer__header_panel}>
              <div className={theme.drawer__navigation}>
                <Button
                  btnWhite
                  onClick={handleClose}>
                  <ArrowBackIcon className={theme.menu__icon} />
                </Button>
              </div>

              <div className={theme.drawer__app_name}>
                <h3>Sandika</h3>
              </div>
            </div>
          </div>)}

          <div className={theme.drawer__children_wrapper}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
