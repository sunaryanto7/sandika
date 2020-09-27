import './footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={'footer'}>
        <div className={'footer__block'}>
          <div className={'footer__block_title'}>
            <h3>Sandika</h3>
          </div>
          <div className={'footer__block_content'}>
            <ul>
              <li>
                <a href="#">Kebijakan</a>
              </li>
              <li>
                <a href="#">Syarat Dan Ketentuan</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={'footer__block'}>
          <div className={'footer__blockTitle'}>
            <h3>Bantuan</h3>
          </div>
          <div className={'footer__block_content'}>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Pembayaran</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={'footer__block'}>
          <div className={'footer__blockTitle'}>
            <h3>Social Media</h3>
          </div>
          <div className={['footer__block_content', 'footer__social_media'].join(' ')}>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Pembayaran</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
