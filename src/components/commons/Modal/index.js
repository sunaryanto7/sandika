import { useEffect } from 'react';
import './modal.module.scss';

const ModalHeader = ({ children }) => {
  return (
    <>
      <div className={theme.modal__header}>{children}</div>
    </>
  );
};

const ModalBody = ({ children }) => {
  return (
    <>
      <div className={theme.modal__body}>{children}</div>
    </>
  );
};

const ModalFooter = ({ children }) => {
  return (
    <>
      <div className={theme.modal__footer}>{children}</div>
    </>
  );
};

const Modal = ({ active, close, title, caption, children, footer }) => {
  useEffect(() => {
    active ? (document.body.style.overflow = 'hidden') : document.body.removeAttribute('style');
  }, [active]);

  var classNames = [active ? theme.active : theme.deactive, theme.modal__wrapper]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div className={classNames}>
        <div className={theme.close} onClick={close} />
        <div className={theme.modal__inner}>{children}</div>
      </div>
    </>
  );
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
