import PropTypes from 'prop-types';
import Button from '@sandika_components/commons/Button';
import is_empty from '@sandika_modules/is_empty';
import './block.module.scss';

const Block = ({ children, title, additional, style }) => {
  const classNames = [
    'widget',
    style
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div className={classNames}>
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
