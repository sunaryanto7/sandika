import { useState, useEffect } from 'react';
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
                            <li key={i} className={theme.tabMenu} onClick={() => { handleActiveTabs(tabChild.props.dataLabel) }}>{tabChild.props.dataLabel}</li>
                        );
                    })}
                </ol>
                <div className={theme.tabContent}>
                    {children.map((tabChild, i) => {
                        if (tabChild.props.dataLabel === active) {
                            return (
                                tabChild.props.children
                            )
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default Tabs;
