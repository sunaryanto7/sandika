import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from './banner.module.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = ({ images = [], config }) => {
  const styles = {
    swipper_images: theme['swipper_images'],
    swipper_description: theme['swipper_description']
  };

  return (
    <Swiper {...config}>
      {images.map((data, i) => {
        return (
          <SwiperSlide className={styles.swipper__item} key={i}>
            <div className={styles.swipper_images} key={i}>
              <img src={data.src} alt={data.alt} />
              {data.alt && <h2 className={styles.swipper_description}>{data.alt}</h2>}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default React.memo(Banner);
