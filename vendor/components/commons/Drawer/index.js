import { useEffect } from 'react';
import Button from '@sandika_components/commons/Button';
import ArrowBackIcon from '@public/media/icons/back.svg';
import theme from './drawer.module.scss';

const Drawer = ({ blank, isOpen, handleClose, children }) => {
  var style = {
    drawer: () => {
      if (isOpen) {
        return [theme['drawer'], theme['drawer__open']].filter(Boolean).join(' ');
      }
      return [theme['drawer'], theme['drawer__close']].filter(Boolean).join(' ');
    },
    drawer__content: theme['drawer__content'],
    drawer__header: theme['drawer__header'],
    drawer__header_panel: theme['drawer__header_panel'],
    drawer__navigation: theme['drawer__navigation'],
    drawer__app_name: theme['drawer__app_name'],
    drawer__children_wrapper: theme['drawer__children_wrapper']
  };

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : document.body.removeAttribute('style');
  }, [isOpen]);

  return (
    <>
      <div className={style.drawer()}>
        <div className={style.drawer__content}>
          {!blank && (
            <div className={theme.drawer__header}>
              <div className={theme.drawer__header_panel}>
                <div className={theme.drawer__navigation}>
                  <Button btnWhite onClick={handleClose}>
                    <ArrowBackIcon />
                  </Button>
                </div>

                <div className={theme.drawer__app_name}>
                  <h3>Sandika</h3>
                </div>
              </div>
            </div>
          )}

          <div className={theme.drawer__children_wrapper}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
