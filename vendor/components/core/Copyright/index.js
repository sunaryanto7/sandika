import * as theme from './copyright.module.scss';

const Copyright = ({ style }) => {
  const styles = {
    copyright: [theme['copyright'], style].filter(Boolean).join(' ')
  };

  return (
    <>
      <div className={styles.copyright}>
        <p>Copyright © Sandika</p>
      </div>
    </>
  );
};

export default Copyright;
