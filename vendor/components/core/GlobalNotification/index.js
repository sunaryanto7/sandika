import theme from './globalnotification.module.scss';

const GlobalNotification = () => {
  const style = {
    'global__nofitication': theme['global__nofitication']
  };
  return (
    <>
      <div className={style.global__nofitication}>
        {'This Is Development Site'}
      </div>
    </>
  );
};

export default GlobalNotification;
