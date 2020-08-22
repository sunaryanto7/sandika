import theme from './catalogproduct.module.scss';
import ProductItem from "@components/core/ProductItem";

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
                            productFinalPrice={data.price}
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

export default CatalogProduct;