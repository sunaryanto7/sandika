import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@environment/context/app_context';

import Layout from '@components/core/Layout';
import Block from '@components/core/Block';
import Banner from '@components/widget/Banner';
import CatalogProduct from '@components/widget/CatalogProduct';

const Category = ({ mainBannerImages, productData }) => {
  const { config } = useContext(AppContext).ctx.config.slider;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.category.layout;

  return (
    <Layout
      header={header}
      navigation={navigation}
      filter={filter}
      footer={footer}>
      <Block>
        <Banner config={config.imageSlider} images={mainBannerImages} />
      </Block>
      <Block title={'Barang Yang Di Cari: Kemeja Pria'} additional={null}>
        <CatalogProduct productData={productData} />
      </Block>
    </Layout>
  );
};

Category.propTypes = {
  mainBannerImages: PropTypes.array,
  productData: PropTypes.array
};

Category.getInitialProps = async () => {
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
    namespacesRequired: ['core'],
    mainBannerImages: mainBannerImages,
    productData: productJson
  };
};

export default Category;
