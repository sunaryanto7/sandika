import * as theme from './footer.module.scss';

const Footer = ({ style }) => {

  const styles = {
    'footer': [theme['footer'], style].filter(Boolean).join(' '),
    'footer__block': theme['footer__block'],
    'footer__title': theme['footer__title'],
    'footer__content': theme['footer__content'],
    'footer__socialmedia': [theme['footer__block'], theme['footer__socialmedia']].filter(Boolean).join(' ')
  };

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__block}>
          <div className={styles.footer__title}>
            <h3>Sandika</h3>
          </div>
          <div className={styles.footer__content}>
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
        <div className={styles.footer__block}>
          <div className={styles.footer__title}>
            <h3>Bantuan</h3>
          </div>
          <div className={styles.footer__content}>
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
        <div className={styles.footer__socialmedia}>
          <div className={styles.footer__title}>
            <h3>Social Media</h3>
          </div>
          <div className={styles.footer__content}>
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
        <div className={styles.footer__block}>
          <div className={styles.footer__content}>
            <p>
              Yogya adalah salah satu perusahaan ritel terkemuka yang telah hadir memberikan
              kemudahan dan kenyamanan dalam berbelanja selama puluhan tahun untuk masyarakat
              Indonesia yang terpusat di Jawa Barat dan Jawa Tengah. Berbekal pengalaman tersebut
              dan kemauan untuk terus berkembang memberikan yang terbaik bagi pelanggan setianya,
              lahirlah Yogya Online, toko online yang menjual puluhan ribu pilihan produk kebutuhan
              sehari-hari dengan kategori yang beragam.
            </p>
            <p>
              Yogyaonline.co.id adalah Toko Belanja Online dari Yogya Group, yang melayani kebutuhan
              masyarakat Indonesia dengan produk-produk pilihan seperti kebutuhan Groceries atau
              Supermarket, Produk Fresh Buah dan Sayur, Fashion Pria, Fashion Wanita, Keperluan Ibu
              Bayi dan Anak, Peralatan elektronik, Peralatan rumah tangga, Handphone, Komputer &
              Laptop, Televisi, Audio Visual, Otomotif, Hobi & Gaya Hidup, Rumah & Dapur, Kesehatan
              dan Kecantikan. Yogya Online selalu menjamin kepuasan pelayanan kepada pelanggan yang
              terbaik termasuk dengan menawarkan beberapa pilihan pembayaran, sistem pengiriman &
              pengambilan pesanan, layanan konsumen dan berbagai kemudahan lainnya.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
