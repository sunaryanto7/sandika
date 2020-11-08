import PropTypes from 'prop-types';
import array_unique from '@sandika_modules/array_unique';
import is_empty from '@sandika_modules/is_empty';
import theme from './category.module.scss';

const Category = ({ productCategories }) => {
  const styles = {
    widget__category: theme['widget__category'],
    widget__category__block: theme['widget__category__block'],
    widget__category__card: theme['widget__category__card']
  };

  const categories = !is_empty(productCategories)
    ? array_unique(productCategories, 'category')
    : [];
  const color = ['#f59481', '#fdb46d', '#e18cc9', '#fedd7c'];

  return (
    <>
      <div className={styles.widget__category}>
        {categories.map((data, i) => {
          return (
            <div className={styles.widget__category__block} key={i}>
              <div className={styles.widget__category__card} style={{ background: `${color[i]}` }}>
                <span>{data}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

Category.defaultProps = {
  productCategories: []
};

Category.propTypes = {
  productCategories: PropTypes.array
};

export default Category;
