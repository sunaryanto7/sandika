import '@sandika_styles/empty.css';
import Home from '@sandika_src/index.js';

Home.getInitialProps = async () => {
  // GET PRODUCTS
  const productResponse = await fetch('https://fakestoreapi.com/products');
  const productJson = await productResponse.json();

  // IMAGE SLIDER DATA - (MAIN BANNER)
  const mainBannerImages = [
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png',
      alt: 'Independence Day'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png',
      alt: 'Special Offer'
    }
  ];

  // IMAGE SLIDER DATA - (PROMO BANNER)
  const promoBannerImages = [
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png',
      alt: 'Free Delivery'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png',
      alt: 'Coupon Saving'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png',
      alt: 'Gift Voucher'
    }
  ];

  return {
    namespacesRequired: ['core'],
    mainBannerImages: mainBannerImages,
    promoBannerImages: promoBannerImages,
    productData: productJson
  };
};

export default Home;
