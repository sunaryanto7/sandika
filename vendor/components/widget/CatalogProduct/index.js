import PropTypes from 'prop-types';
import ProductItem from '@sandika_components/core/ProductItem';
import theme from './catalogproduct.module.scss';

const CatalogProduct = ({ productData = [] }) => {
  const styles = {
    widget__catalog: theme['widget__catalog'],
    product__item: theme['product__item']
  };

  return (
    <>
      <div className={styles.widget__catalog}>
        {productData.map((data, i) => {
          return (
            <ProductItem
              src={data.image.url}
              alt={data.image.label}
              productName={data.name}
              productPrice={{
                price_range: data.price_range,
                price_tiers: data.price_tiers,
                __typename: data.__typename
              }}
              productBrand={data.categories}
              // style={styles.product__item}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

CatalogProduct.propTypes = {
  productData: PropTypes.array
};

export default React.memo(CatalogProduct);
