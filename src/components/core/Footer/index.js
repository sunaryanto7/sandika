import './footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={theme.footer}>
        <div className={theme.footer__block}>
          <div className={theme.footer__block_title}>
            <h3>Sandika</h3>
          </div>
          <div className={theme.footer__block_content}>
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
        <div className={theme.footer__block}>
          <div className={theme.footer__blockTitle}>
            <h3>Bantuan</h3>
          </div>
          <div className={theme.footer__block_content}>
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
        <div className={theme.footer__block}>
          <div className={theme.footer__blockTitle}>
            <h3>Social Media</h3>
          </div>
          <div className={[theme.footer__block_content, theme.footer__social_media].join(' ')}>
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
