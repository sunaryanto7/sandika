import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import ProductMedia from '@sandika_components/core/ProductMedia';

const Product = ({ mainBannerImages, productData, promoBannerImages }) => {
  const { config } = useContext(AppContext).ctx.config.productMedia;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.product.layout;

  return (
    <>
      {/* Head */}
      <Head>
        <title>Sandika</title>
      </Head>

      {/* Body */}
      <Layout nomargin header={header} navigation={navigation} filter={filter} footer={footer}>
        <Block nomargin>
          <ProductMedia images={mainBannerImages} config={config.imageSlider} />
        </Block>
      </Layout>
    </>
  );
};

Product.propTypes = {
  mainBannerImages: PropTypes.array,
  productData: PropTypes.object,
  promoBannerImages: PropTypes.array
};

export default Product;
