import theme from './drawer.module.scss';

const Drawer = ({ isOpen, children, handleClose }) => {

    var classNames = [
        theme.drawer,
        isOpen ? theme.drawer__open : theme.drawer__close
    ].filter(Boolean).join(" ");

    return (
        <>
            <div className={classNames} onClick={handleClose}>
                <div className={theme.drawer__overlay}>
                    <div className={theme.drawer__content}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drawer;