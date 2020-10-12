import PropTypes from 'prop-types';
import './productitem.module.scss';

const ProductItem = ({
  src,
  alt,
  productName,
  productBrand,
  productOldPrice,
  productFinalPrice,
  style
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
      <div className={['product__item', style].filter(Boolean).join(' ')} role="button">
        <div className={'product__image'}>
          <img src={src} alt={alt} />
          <div className={'product__discount'}>
            <small>{'10%'}</small>
          </div>
        </div>
        <div className={'product__description'}>
          <h5 className={'product__name'}>{trimedProductName}</h5>
          <small className={'product__brand'}>{productBrand}</small>
          <span className={'product__price'}>
            <small className={'old__price'}>{`$ ${productOldPrice}`}</small>
            <strong className={'final__price'}>{`$ ${productFinalPrice}`}</strong>
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
