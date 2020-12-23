import PropTypes from 'prop-types';
import Button from '@sandika_components/commons/Button';
import is_empty from '@sandika_modules/is_empty';
import theme from './block.module.scss';

const Block = ({ children, title, additional, style, nopadding }) => {
  const styles = {
    widget: [theme['widget'], style, nopadding && theme['widget__nopadding']]
      .filter(Boolean)
      .join(' '),
    widget__header: theme['widget__header'],
    widget__title: theme['widget__title'],
    widget__link: theme['widget__link'],
    widget__content: theme['widget__content']
  };

  return (
    <>
      <div className={styles.widget}>
        {!is_empty(title) ? (
          <div className={styles.widget__header}>
            <h4 className={styles.widget__title}>{title}</h4>
            {!is_empty(additional) ? (
              <h5 className={styles.widget__link}>
                <Button btnTransparent>{additional}</Button>
              </h5>
            ) : null}
          </div>
        ) : null}
        <div className={styles.widget__content}>{children}</div>
      </div>
    </>
  );
};

Block.defaultProps = {
  children: [],
  title: null,
  additional: null,
  padding15: false
};

Block.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  additional: PropTypes.string,
  padding15: PropTypes.bool
};

export default React.memo(Block);
