import PropTypes from 'prop-types';
import './category.module.scss';
import array_unique from '@library/helper/array_unique';
import is_empty from '@library/helper/is_empty';

const Category = ({ productCategories }) => {

  const categories = !is_empty(productCategories)
    ? array_unique(productCategories, 'category')
    : [];
  const color = ['#f59481', '#fdb46d', '#e18cc9', '#fedd7c'];

  return (
    <>
      <div className={'widget__category'}>
        {categories.map((data, i) => {
          return (
            <div className={'widget__category__block'} key={i}>
              <div className={'widget__category__card'} style={{ background: `${color[i]}` }}>
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
