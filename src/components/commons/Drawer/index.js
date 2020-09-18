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

  console.log(blank)

  return (
    <>
      <div className={classNames} onClick={handleClose}>
        <div className={theme.drawer__content}>
          {(!blank && <div className={theme.drawer__header}>
            <div className={theme.drawer__header_panel}>
              <div className={theme.drawer__navigation}>
                <Button
                  btnWhite
                  onClick={() => {
                    handleClose
                  }}>
                  <ArrowBackIcon className={theme.menu__icon} />
                </Button>
              </div>

              <div className={theme.drawer__app_name}>
                <h3 onClick={() => { Router.push('/'); }}>
                  Sandika
                </h3>
              </div>
            </div>
          </div>)}

          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
