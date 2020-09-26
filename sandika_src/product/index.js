import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import Banner from '@sandika_components/widget/Banner';
import ProductSlider from '@sandika_components/widget/ProductSlider';
import CatalogProduct from '@sandika_components/widget/CatalogProduct';
import Category from '@sandika_components/widget/Category';

const Product = ({ mainBannerImages, productData, promoBannerImages }) => {
  const { config } = useContext(AppContext).ctx.config.slider;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.product.layout;

  return (
    <>
      {/* Head */}
      <Head>
        <title>Sandika</title>
      </Head>

      {/* Body */}
      <Layout
        header={header}
        navigation={navigation}
        filter={filter}
        footer={footer}>
      </Layout>
    </>
  );
};

Product.propTypes = {
  mainBannerImages: PropTypes.array,
  productData: PropTypes.array,
  promoBannerImages: PropTypes.array
};

export default Product;
