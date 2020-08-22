import theme from "./productitem.module.scss";

const ProductItem = ({ src, alt, productName, productBrand, productOldPrice, productFinalPrice, className }) => {

    const productNameSplit = () => {
        if (productName.split(' ').length > 5) { return productName.split(" ").splice(0, 5).join(" ") + '...' };
        return productName;
    }

    var productName = productNameSplit();

    return (
        <>
            <a href={"#"} className={[theme.product_item, className].join(' ')}>
                <div className={theme.product_image}>
                    <img src={src} alt={alt} />
                </div>
                <div className={theme.product_description}>
                    <h5 className={theme.product_name}>{productName}</h5>
                    <span className={theme.product_price}>
                        <small className={theme.oldPrice}>{productOldPrice}</small>
                        <strong className={theme.finalPrice}>{productFinalPrice}</strong>
                    </span>
                </div>
            </a>
        </>
    );
};

export default ProductItem;