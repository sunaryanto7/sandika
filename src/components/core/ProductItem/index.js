import PropTypes from 'prop-types';
import theme from './productitem.module.scss';

const ProductItem = ({
  src,
  alt,
  productName,
  productBrand,
  productOldPrice,
  productFinalPrice,
  className
}) => {
  const productNameSplit = () => {
    if (productName.split(' ').length > 5) {
      return productName.split(' ').splice(0, 5).join(' ') + '...';
    }
    return productName;
  };

  var trimedProductName = productNameSplit();

  return (
    <>
      <div role="button" className={[theme.product__item, className].join(' ')}>
        <div className={theme.product__image}>
          <img src={src} alt={alt} />
          <div className={theme.product__discount}>
            <small>{'10%'}</small>
          </div>
        </div>
        <div className={theme.product__description}>
          <h5 className={theme.product__name}>{trimedProductName}</h5>
          <small className={theme.product__brand}>{productBrand}</small>
          <span className={theme.product__price}>
            <small className={theme.old__price}>{`$ ${productOldPrice}`}</small>
            <strong className={theme.final__price}>{`$ ${productFinalPrice}`}</strong>
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
