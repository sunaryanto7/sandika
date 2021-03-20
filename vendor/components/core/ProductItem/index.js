import PropTypes from 'prop-types';
import theme from './productitem.module.scss';
import { prices } from '@sandika_modules/prices'

const ProductItem = ({
  src,
  alt,
  productName,
  productBrand,
  productPrice,
  style
}) => {
  const styles = {
    product__item: [theme['product__item'], style].filter(Boolean).join(' '),
    product__image: theme['product__image'],
    product__discount: theme['product__discount'],
    product__description: theme['product__description'],
    product__name: theme['product__name'],
    product__brand: theme['product__brand'],
    product__price: theme['product__price'],
    old__price: theme['old__price'],
    final__price: theme['final__price']
  };

  const productNameSplit = () => {
    if (productName && productName.split(' ').length > 4) {
      return productName.split(' ').splice(0, 4).join(' ') + '...';
    }
    return productName;
  };

  var trimedProductName = productNameSplit();

  const price = prices(productPrice);
  console.log(productName, price)

  return (
    <>
      <div className={styles.product__item} role="button">
        <div className={styles.product__image}>
          <img src={"https://eigerstore-swift.testingnow.me/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910001562.nav1_1.jpg"} alt={alt} />
          <div className={styles.product__discount}>
            <small>{'10%'}</small>
          </div>
        </div>
        <div className={styles.product__description}>
          <h5 className={styles.product__name}>{trimedProductName}</h5>
          <div className={styles.product__brand}>
            {productBrand && productBrand.map((_, i) => {
              if (i < 3) {
                return <small key={i}>{_.name}</small>
              }
            })}
          </div>

          <span className={styles.product__price}>
            {price.value.map((_, i) => {
              switch (_.type) {
                case 'final_price':
                  return <small className={styles.final__price} key={i}>{_.currency + ' ' + _.price}</small>;
                case 'regular_price':
                  return <small className={styles.old__price} key={i}>{_.currency + ' ' + _.price}</small>;
              }
            })}
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
  productBrand: PropTypes.array,
  productOldPrice: PropTypes.number,
  productFinalPrice: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default React.memo(ProductItem);
