import PropTypes from 'prop-types';
import theme from './catalogproduct.module.scss';
import ProductItem from '@components/core/ProductItem';

const CatalogProduct = ({ productData }) => {
    return (
        <>
            <div className={theme.catalogProduct}>
                {productData.map((data, i) => {
                    return (
                        <ProductItem
                            src={data.image}
                            alt={data.title}
                            productName={data.title}
                            productFinalPrice={Math.round(data.price)}
                            productOldPrice={Math.round(data.price + 20)} //Example
                            productBrand={data.category}
                            className={theme.productItem}
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

export default CatalogProduct;
