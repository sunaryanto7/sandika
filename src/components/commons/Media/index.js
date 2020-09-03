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

const Media = ({ children }) => {
    return (
        <>
            <div className={theme.media}>
                {children}
            </div>
        </>
    );
};

export { Media, MediaBody, MediaImage };