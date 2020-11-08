import theme from './media.module.scss';

const MediaBody = ({ children, style }) => {
  const styles = {
    media__body: [theme['media__body'], style].filter(Boolean).join(' ')
  };

  return (
    <>
      <div className={styles.media__body}>{children}</div>
    </>
  );
};

const MediaImage = ({ children, style }) => {
  const styles = {
    media__image: [theme['media__image'], style].filter(Boolean).join(' ')
  };

  return (
    <>
      <div className={styles.media__image}>{children}</div>
    </>
  );
};

const Media = ({ children, onClick, style }) => {
  const styles = {
    media: [theme['media'], style].filter(Boolean).join(' ')
  };

  return (
    <>
      <div className={styles.media} role="button" onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export { Media, MediaBody, MediaImage };
