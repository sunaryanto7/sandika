import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductItem from '@sandika_components/core/ProductItem';
import theme from './productslider.module.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProductSlider = ({ productData, config }) => {
  const styles = {
    swipper__item: theme['swiper__item'],
    swipper__product_item: theme['swipper__product_item']
  };

  return (
    <Swiper {...config}>
      {productData.map((data, i) => {
        return (
          <SwiperSlide className={styles.swipper__item} key={i}>
            <ProductItem
              src={data.image.url}
              alt={data.image.label}
              productName={data.name}
              productFinalPrice={Math.round(data.price)}
              productOldPrice={Math.round(data.price + 20)}
              productBrand={data.categories}
              style={styles.swipper__product_item}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default React.memo(ProductSlider);
