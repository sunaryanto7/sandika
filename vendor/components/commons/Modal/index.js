import { useEffect } from 'react';
import theme from './modal.module.scss';

const Modal = ({ active, onClose, children }) => {
  useEffect(() => {
    active ? (document.body.style.overflow = 'hidden') : document.body.removeAttribute('style');
  }, [active]);

  const styles = {
    modal: () => {
      if (active) { return [theme['modal'], theme['active']].filter(Boolean).join(' '); }
      return [theme['modal'], theme['deactive']].filter(Boolean).join(' ');
    },
    modal__overlay: theme['modal__overlay'],
    modal__inner: theme['modal__inner']
  };

  const handleClose = () => { onClose(); };

  return (
    <>
      <div className={styles.modal()}>
        <div className={styles.modal__overlay} onClick={handleClose} />
        <div className={styles.modal__inner}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
