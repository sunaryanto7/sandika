import Product from '@sandika_src/product';

export async function getServerSideProps() {
  // EXAMPLE GET CONFIGURABLE PRODUCTS
  const configurableProductFetch = await fetch('http://localhost:3000/api/example/product_configurable');
  const configurableProductResponse = await configurableProductFetch.json();

  // GET PRODUCTS FROM FAKESTORE API THEN PASS AS RELATED PRODUCT
  const productResponse = await fetch('https://fakestoreapi.com/products');
  const productJson = await productResponse.json();


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
    props: {
      namespacesRequired: ['core'],
      promoBannerImages: promoBannerImages,
      productData: configurableProductResponse,
      relatedProductData: productJson
    }
  };
}

export default Product;
