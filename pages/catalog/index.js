import Category from '@sandika_src/catalog';

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  }
};

export async function getStaticProps(ctx) {
  console.log(ctx);
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
  const productResponse = await fetch('https://fakestoreapi.com/products');
  const productJson = await productResponse.json();

  return {
    props: {
      mainBannerImages: mainBannerImages,
      productData: productJson
    }
  };
};

// Category.getInitialProps = async (ctx) => {
//   console.log(ctx);
//   const mainBannerImages = [
//     {
//       src:
//         'https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png',
//       alt: 'Independence Day'
//     },
//     {
//       src:
//         'https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png',
//       alt: 'Special Offer'
//     }
//   ];

//   // GET PRODUCTS
//   const productResponse = await fetch('https://fakestoreapi.com/products');
//   const productJson = await productResponse.json();

//   return {
//     namespacesRequired: ['core'],
//     mainBannerImages: mainBannerImages,
//     productData: productJson
//   };
// };

export default Category;
