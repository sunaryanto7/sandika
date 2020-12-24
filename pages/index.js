import Home from '@sandika_src/index.js';

Home.getInitialProps = async () => {
  // GET PRODUCTS
  const productResponse = await fetch('https://fakestoreapi.com/products');
  const productJson = await productResponse.json();

  // IMAGE SLIDER DATA - (MAIN BANNER)
  const mainBannerImages = [
    {
      src:
        'https://exsport.co.id/media/weltpixel/owlcarouselslider/images/s/u/surprise-deals-december-mobile.jpg',
      alt: null
    },
    {
      src:
        'https://exsport.co.id/media/weltpixel/owlcarouselslider/images/d/e/desember-finally-year-end-sale-mobile.jpg',
      alt: null
    }
  ];

  // IMAGE SLIDER DATA - (PROMO BANNER)
  const promoBannerImages = [
    {
      src:
        'https://exsport.co.id/media/weltpixel/owlcarouselslider/images/n/e/new-arrival-november-away-series-mobile-revisi.jpg',
      // alt: 'Free Delivery'
    },
    {
      src:
        'https://exsport.co.id/media/weltpixel/owlcarouselslider/images/n/e/new-arrival-november-emilia-mobile.jpg',
      // alt: 'Coupon Saving'
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
