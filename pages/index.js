import Home from '@sandika_src/index.js';
import { getPopularProducts } from '@sandika_models/homepage';
import { getPopularSearch } from '@sandika_models/global';

export async function getServerSideProps() {

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
      alt: 'Free Delivery'
    },
    {
      src:
        'https://exsport.co.id/media/weltpixel/owlcarouselslider/images/n/e/new-arrival-november-emilia-mobile.jpg',
      alt: 'Coupon Saving'
    }
  ];

  const productResponse = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    body: JSON.stringify({
      'query': getPopularProducts,
      'variables': '{}'
    }),
    headers: { 'Content-Type': 'application/json' }
  })
  const productJson = await productResponse.json();

  const popularSearchResponse = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    body: JSON.stringify({
      'query': getPopularSearch,
      'variables': '{}'
    }),
    headers: { 'Content-Type': 'application/json' }
  })
  const popularSearchJson = await popularSearchResponse.json();


  return {
    props: {
      mainBannerImages: mainBannerImages,
      promoBannerImages: promoBannerImages,
      productData: productJson.data.getBestSeller.items,
      popularSearch: popularSearchJson.data.popularSearch
    }
  };
};


export default Home;
