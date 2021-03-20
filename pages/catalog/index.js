import Catalog from '@sandika_src/catalog';
import { getProductList } from '@sandika_models/catalog';
import { getPopularSearch } from '@sandika_models/global';

export async function getStaticProps() {
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

  // GET PRODUCTS
  const productResponse = await await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    body: JSON.stringify({
      'query': getProductList,
      'variables': '{"pageSize": 30, "currentPage": 1, "search": ""}'
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
      productData: productJson.data.products.items,
      filterData: productJson.data.products.aggregations,
      popularSearch: popularSearchJson.data.popularSearch
    }
  };
};

export default Catalog;
