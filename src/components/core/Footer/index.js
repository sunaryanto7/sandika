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
                            <li><a href={"#"}>Kebijakan</a></li>
                            <li><a href={"#"}>Syarat Dan Ketentuan</a></li>
                        </ul>
                    </div>
                </div>
                <div className={theme.footerBlock}>
                    <div className={theme.footerBlockTitle}>
                        <h3>Bantuan</h3>
                    </div>
                    <div className={theme.footerBlockContent}>
                        <ul>
                            <li><a href={"#"}>FAQ</a></li>
                            <li><a href={"#"}>Pembayaran</a></li>
                        </ul>
                    </div>
                </div>
                <div className={theme.footerBlock}>
                    <div className={theme.footerBlockTitle}>
                        <h3>Social Media</h3>
                    </div>
                    <div className={[theme.footerBlockContent, theme.footerSocialMedia].join(' ')}>
                        <ul>
                            <li><a href={"#"}>FAQ</a></li>
                            <li><a href={"#"}>Pembayaran</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;