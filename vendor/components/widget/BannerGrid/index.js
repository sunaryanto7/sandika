import * as theme from './bannergrid.module.scss';

const BannerGrid = ({ style }) => {
  const styles = {
    'banner__grid': theme['banner__grid'],
    'banner__gridcolumn': theme['banner__gridcolumn'],
  };

  return (
    <>
      <div className={styles.banner__grid}>
        <div className={styles.banner__gridcolumn}>
          <img src={'https://exsport.co.id/media/wysiwyg/exsport/homepage/store_locator.jpg'} />
        </div>
        <div className={styles.banner__gridcolumn}>
          <img src={'https://exsport.co.id/media/wysiwyg/exsport/homepage/cara_membayar.jpg'} />
        </div>
        <div className={styles.banner__gridcolumn}>
          <img src={'https://exsport.co.id/media/wysiwyg/exsport/homepage/official_marketplace.jpg'} />
        </div>
        <div className={styles.banner__gridcolumn}>
          <img src={'https://exsport.co.id/media/wysiwyg/exsport/homepage/wa_shopping.jpg'} />
        </div>
      </div>
    </>
  );
};

export default React.memo(BannerGrid);