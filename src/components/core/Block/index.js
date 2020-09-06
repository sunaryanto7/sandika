import PropTypes from 'prop-types';
import Button from '@components/commons/Button';
import is_empty from '@library/helper/is_empty';
import theme from './block.module.scss';

const Block = ({ children, title, additional }) => {
    return (
        <>
            <div className={theme.widget}>
                {!is_empty(title) ? (
                    <div className={theme.widget__header}>
                        <h4 className={theme.widget__title}>{title}</h4>
                        {!is_empty(additional) ? (
                            <h5 className={theme.widget__link}>
                                <Button btnTransparent>{additional}</Button>
                            </h5>
                        ) : null}
                    </div>
                ) : null}
                <div className={theme.widget__content}>{children}</div>
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
