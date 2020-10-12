import { useEffect } from 'react';
import './modal.module.scss';

const ModalHeader = ({ children }) => {
  return (
    <>
      <div className={'modal__header'}>{children}</div>
    </>
  );
};

const ModalBody = ({ children }) => {
  return (
    <>
      <div className={'modal__body'}>{children}</div>
    </>
  );
};

const ModalFooter = ({ children }) => {
  return (
    <>
      <div className={'modal__footer'}>{children}</div>
    </>
  );
};

const Modal = ({ active, close, title, caption, children, footer }) => {
  useEffect(() => {
    active ? (document.body.style.overflow = 'hidden') : document.body.removeAttribute('style');
  }, [active]);

  var classNames = [active ? 'active' : 'deactive', 'modal'].filter(Boolean).join(' ');

  return (
    <>
      <div className={classNames}>
        <div className={'close'} onClick={close} />
        <div className={'modal__inner'}>{children}</div>
      </div>
    </>
  );
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
