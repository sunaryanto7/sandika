import theme from './media.module.scss';

const MediaBody = ({ children }) => {
  const style = {
    'media__body': theme['media__body']
  };

  return (
    <>
      <div className={style.media__body}>{children}</div>
    </>
  );
};

const MediaImage = ({ children }) => {
  const style = {
    'media__image': theme['media__image']
  };

  return (
    <>
      <div className={style.media__image}>{children}</div>
    </>
  );
};

const Media = ({ children, onClick }) => {
  const style = {
    'media': theme['media']
  };

  return (
    <>
      <div className={style.media} role="button" onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export { Media, MediaBody, MediaImage };
