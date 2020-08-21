import theme from './block.module.scss';

const Block = ({ children, title, additional }) => {
    return (
        <>
            <div className={theme.widget}>
                {title !== undefined && additional !== undefined ?
                    <div className={theme.widgetHeader}>
                        <h5 className={theme.widgetTitle}>{title}</h5>
                        <h5 className={theme.widgetLink}><a href={"#"}>{additional}</a></h5>
                    </div>
                    :
                    null
                }

                <div className={theme.widgetContent}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Block;