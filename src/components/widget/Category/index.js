import theme from "./category.module.scss";
import array_unique from "@library/helper/array_unique";

const Category = ({ productCategories }) => {
    const categories = array_unique(productCategories, 'category');
    return (
        <>
            <div className={theme.categoryRow}>
                {categories.map((data, i) => {
                    return (
                        <div className={theme.categoryBlock} key={i}>
                            <div className={theme.categoryCard}>
                                <span>{data}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Category