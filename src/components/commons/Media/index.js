import './media.module.scss';

const MediaBody = ({ children }) => {
  return (
    <>
      <div className={'mediaBody'}>{children}</div>
    </>
  );
};

const MediaImage = ({ children }) => {
  return (
    <>
      <div className={'mediaImage'}>{children}</div>
    </>
  );
};

const Media = ({ children, onClick }) => {
  return (
    <>
      <div className={'media'} role="button" onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export { Media, MediaBody, MediaImage };
