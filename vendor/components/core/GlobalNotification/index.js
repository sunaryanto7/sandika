import theme from './globalnotification.module.scss';

const GlobalNotification = () => {
  const styles = {
    global__nofitication: theme['global__nofitication']
  };
  return (
    <>
      <div className={styles.global__nofitication}>{'This Is Development Site'}</div>
    </>
  );
};

export default GlobalNotification;
