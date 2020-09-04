import theme from './media.module.scss';

const MediaBody = ({ children }) => {
    return (
        <>
            <div className={theme.mediaBody}>
                {children}
            </div>
        </>
    );
};

const MediaImage = ({ children }) => {
    return (
        <>
            <div className={theme.mediaImage}>
                {children}
            </div>
        </>
    );
};

const Media = ({ children, onClick }) => {
    return (
        <>
            <div className={theme.media} role="button" onClick={onClick}>
                {children}
            </div>
        </>
    );
};

export { Media, MediaBody, MediaImage };