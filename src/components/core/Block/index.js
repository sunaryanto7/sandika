import PropTypes from 'prop-types';
import Button from '@components/commons/Button'
import is_empty from '@library/helper/is_empty';
import theme from './block.module.scss';

const Block = ({ children, title, additional }) => {
    return (
        <>
            <div className={theme.widget}>
                {!is_empty(title) ? (
                    <div className={theme.widgetHeader}>
                        <h4 className={theme.widgetTitle}>{title}</h4>
                        {!is_empty(additional) ? (
                            <h5 className={theme.widgetLink}>
                                <Button>{additional}</Button>
                            </h5>
                        ) : null}
                    </div>
                ) : null}
                <div className={theme.widgetContent}>{children}</div>
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
