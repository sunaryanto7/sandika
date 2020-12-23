import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Block from '@sandika_components/core/Block';
import * as theme from './productgallery.module.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProductGallery = ({ config, ...props }) => {
  const styles = {
    product__media__gallery: theme['product__media__gallery']
  };

  const { variants } = { ...props };

  return (
    <>
      <Block style={styles.product__media__gallery}>
        <Swiper {...config}>
          {variants[0].product.media_gallery.map((data, i) => {
            return (
              <SwiperSlide className={styles.swipper__item} key={i}>
                <img src={data.url} alt={data.alt} key={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Block>
    </>
  );
};

export default ProductGallery;
