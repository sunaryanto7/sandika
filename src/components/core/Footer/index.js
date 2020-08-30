import theme from './footer.module.scss';

const Footer = () => {
    return (
        <>
            <div className={theme.footer}>
                <div className={theme.footerBlock}>
                    <div className={theme.footerBlockTitle}>
                        <h3>Sandika</h3>
                    </div>
                    <div className={theme.footerBlockContent}>
                        <ul>
                            <li>
                                <button>Kebijakan</button>
                            </li>
                            <li>
                                <button>Syarat Dan Ketentuan</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={theme.footerBlock}>
                    <div className={theme.footerBlockTitle}>
                        <h3>Bantuan</h3>
                    </div>
                    <div className={theme.footerBlockContent}>
                        <ul>
                            <li>
                                <button>FAQ</button>
                            </li>
                            <li>
                                <button>Pembayaran</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={theme.footerBlock}>
                    <div className={theme.footerBlockTitle}>
                        <h3>Social Media</h3>
                    </div>
                    <div className={[theme.footerBlockContent, theme.footerSocialMedia].join(' ')}>
                        <ul>
                            <li>
                                <button>FAQ</button>
                            </li>
                            <li>
                                <button>Pembayaran</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
