import PropTypes from 'prop-types';
import theme from './productitem.module.scss';

const ProductItem = ({
  src,
  alt,
  productName,
  productBrand,
  productOldPrice,
  productFinalPrice,
  style
}) => {

  const styles = {
    'product__item': [theme['product__item'], style].filter(Boolean).join(' '),
    'product__image': theme['product__image'],
    'product__discount': theme['product__discount'],
    'product__description': theme['product__description'],
    'product__name': theme['product__name'],
    'product__brand': theme['product__brand'],
    'product__price': theme['product__price'],
    'old__price': theme['old__price'],
    'final__price': theme['final__price']
  };

  const productNameSplit = () => {
    if (productName.split(' ').length > 5) { return productName.split(' ').splice(0, 5).join(' ') + '...'; }
    return productName;
  };

  var trimedProductName = productNameSplit();

  return (
    <>
      <div className={styles.product__item} role="button">
        <div className={styles.product__image}>
          <img src={src} alt={alt} />
          <div className={styles.product__discount}>
            <small>{'10%'}</small>
          </div>
        </div>
        <div className={styles.product__description}>
          <h5 className={styles.product__name}>{trimedProductName}</h5>
          <small className={styles.product__brand}>{productBrand}</small>
          <span className={styles.product__price}>
            <small className={styles.old__price}>{`$ ${productOldPrice}`}</small>
            <strong className={styles.final__price}>{`$ ${productFinalPrice}`}</strong>
          </span>
        </div>
      </div>
    </>
  );
};

ProductItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  productName: PropTypes.string,
  productBrand: PropTypes.string,
  productOldPrice: PropTypes.number,
  productFinalPrice: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default ProductItem;
