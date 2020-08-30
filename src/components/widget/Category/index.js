import PropTypes from 'prop-types';
import theme from './category.module.scss';
import array_unique from '@library/helper/array_unique';

const Category = ({ productCategories }) => {
    const categories = array_unique(productCategories, 'category');
    const color = ['#f59481', '#fdb46d', '#e18cc9', '#fedd7c'];
    return (
        <>
            <div className={theme.categoryRow}>
                {categories.map((data, i) => {
                    return (
                        <div className={theme.categoryBlock} key={i}>
                            <div
                                className={theme.categoryCard}
                                style={{ background: `${color[i]}` }}>
                                <span>{data}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

Category.propTypes = {
    productCategories: PropTypes.array
};

export default Category;
