import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';
import Block from '@sandika_components/core/Block';
import BoyIcon from '@public/media/icons/boy.svg';
import GirlIcon from '@public/media/icons/girl.svg';
import StarIcon from '@public/media/icons/star.svg';
import * as theme from './productreview.module.scss';

const ProductReview = ({ children, review, style }) => {
  const styles = {
    product__review: [theme['product__review'], style].filter(Boolean).join(' '),
    product__review__media: theme['product__review--media'],
    product__review__media_image: theme['product__review--media-image'],
    product__review__media_body: theme['product__review--media-body'],
    product__review__from: theme['product__review--from'],
    product__review__date: theme['product__review--date'],
    product__review__review: theme['product__review--review']
  };

  return (
    <>
      <Block title={'Product Review'} style={styles.product__review}>
        {review.map((item, i) => {
          if (i > 5) {
            return;
          }
          return (
            <div className={styles.product__review__media} key={i}>
              <div className={styles.product__review__media_image}>
                {i % 2 === 0 ? <BoyIcon /> : <GirlIcon />}
                <span className={styles.product__review__from}>
                  <p>
                    <strong>
                      <span>4.5 </span>
                      <span>
                        <StarIcon />
                      </span>
                    </strong>
                    <span>{new Date().toLocaleDateString()}</span>
                  </p>
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                </span>
              </div>
              <div className={styles.product__review__media_body}>
                <p className={styles.product__review__review}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                  Curabitur vehicula neque tellus, sit amet eleifend risus commodo et. Vivamus sed
                  purus lectus. Donec eleifend bibendum lacus
                </p>
              </div>
            </div>
          );
        })}
      </Block>
    </>
  );
};

export default ProductReview;
