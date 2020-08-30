import PropTypes from 'prop-types';
import { useState } from 'react';
import theme from './tabs.module.scss';

const Tabs = ({ children }) => {
    const [active, setActive] = useState(children[0].props.dataLabel);
    const handleActiveTabs = (params) => {
        setActive(params);
    };

    return (
        <>
            <div className={theme.tabs}>
                <ol className={theme.tabList}>
                    {children.map((tabChild, i) => {
                        return (
                            <li key={i} className={theme.tabMenu}>
                                <button
                                    onClick={() => {
                                        handleActiveTabs(tabChild.props.dataLabel);
                                    }}
                                    onKeyDown={() => {
                                        handleActiveTabs(tabChild.props.dataLabel);
                                    }}
                                    tabIndex={i}>
                                    {tabChild.props.dataLabel}
                                </button>
                            </li>
                        );
                    })}
                </ol>
                <div className={theme.tabContent}>
                    {children.map((tabChild) => {
                        if (tabChild.props.dataLabel === active) {
                            return tabChild.props.children;
                        }
                    })}
                </div>
            </div>
        </>
    );
};

Tabs.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Tabs;
