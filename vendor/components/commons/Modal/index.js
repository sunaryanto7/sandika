import { useEffect } from 'react';
import theme from './modal.module.scss';

const ModalHeader = ({ children }) => {
  const styles = {
    'modal__header': theme['modal__header']
  };
  return (
    <div className={styles.modal__header}>{children}</div>
  );
};

const ModalBody = ({ children }) => {
  const styles = {
    'modal__body': theme['modal__body']
  };
  return (
    <div className={styles.modal__body}>{children}</div>
  );
};

const ModalFooter = ({ children }) => {
  const styles = {
    'modal__footer': theme['modal__footer']
  };
  return (
    <div className={styles.modal__footer}>{children}</div>
  )
};

const Modal = ({ active, close, title, caption, children, footer }) => {

  useEffect(() => {
    active ? (document.body.style.overflow = 'hidden') : document.body.removeAttribute('style');
  }, [active]);

  const styles = {
    'modal': () => {
      if (active) { return [theme['modal'], theme['active']].filter(Boolean).join(' ') }
      return [theme['modal'], theme['deactive']].filter(Boolean).join(' ')
    },
    'close': theme['close'],
    'modal__inner': theme['modal__inner']
  };

  return (
    <>
      <div className={styles.modal()}>
        <div className={styles.close} onClick={close} />
        <div className={styles.modal__inner}>{children}</div>
      </div>
    </>
  );
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
