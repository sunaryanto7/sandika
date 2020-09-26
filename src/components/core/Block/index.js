import PropTypes from 'prop-types';
import Button from '@components/commons/Button';
import is_empty from '@library/helper/is_empty';
import './block.module.scss';

const Block = ({ children, title, additional }) => {
  return (
    <>
      <div className={'widget'}>
        {!is_empty(title) ? (
          <div className={'widget__header'}>
            <h4 className={'widget__title'}>{title}</h4>
            {!is_empty(additional) ? (
              <h5 className={'widget__link'}>
                <Button btnTransparent>{additional}</Button>
              </h5>
            ) : null}
          </div>
        ) : null}
        <div className={'widget__content'}>{children}</div>
      </div>
    </>
  );
};

Block.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  additional: PropTypes.string
};

export default Block;
