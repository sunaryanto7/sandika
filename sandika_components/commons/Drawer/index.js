import { useEffect } from 'react';
import Button from '@sandika_components/commons/Button';
import ArrowBackIcon from '@public/media/icons/back.svg';
import './drawer.module.scss';

const Drawer = ({ blank, isOpen, handleClose, children }) => {
  var classNames = ['drawer', isOpen ? 'drawer__open' : 'drawer__close']
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : document.body.removeAttribute('style');
  }, [isOpen]);

  return (
    <>
      <div className={classNames}>
        <div className={'drawer__content'}>
          {(!blank && <div className={'drawer__header'}>
            <div className={'drawer__header_panel'}>
              <div className={'drawer__navigation'}>
                <Button
                  btnWhite
                  onClick={handleClose}>
                  <ArrowBackIcon className={'menu__icon'} />
                </Button>
              </div>

              <div className={'drawer__app_name'}>
                <h3>Sandika</h3>
              </div>
            </div>
          </div>)}

          <div className={'drawer__children_wrapper'}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
