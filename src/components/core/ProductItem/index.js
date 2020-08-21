import theme from "./productitem.module.scss";

const ProductItem = ({ src, alt, productName, productBrand, productOldPrice, productFinalPrice }) => {

    return (
        <>
            <a href={"#"} className={theme.product_item}>
                <div className={theme.product_image}>
                    <img src={src} alt={alt} />
                </div>
                <div className={theme.product_description}>
                    <h5 className={theme.product_name}>{productName.split(" ").splice(0, 8).join(" ")}</h5>
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