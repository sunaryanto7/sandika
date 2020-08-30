import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
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
            <div role="button" className={[theme.productItem, className].join(' ')}>
                <div className={theme.productImage}>
                    <LazyLoad>
                        <img src={src} alt={alt} />
                    </LazyLoad>
                    <div className={theme.productDiscount}>
                        <small>{'10%'}</small>
                    </div>
                </div>
                <div className={theme.productDescription}>
                    <h5 className={theme.productName}>{trimedProductName}</h5>
                    <small className={theme.productBrand}>{productBrand}</small>
                    <span className={theme.productPrice}>
                        <small className={theme.oldPrice}>{`$ ${productOldPrice}`}</small>
                        <strong className={theme.finalPrice}>{`$ ${productFinalPrice}`}</strong>
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
