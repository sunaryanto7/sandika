import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import ProductMedia from './components/ProductMedia';
import ProductForm from './components/ProductForm';

const Product = ({ productData, promoBannerImages }) => {
  const { config } = useContext(AppContext).ctx.config.productMedia;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.product.layout;
  const { __typename } = productData.data.products.items[0];

  let productMediaProps = {};
  let productDetailFormProps = {};

  switch (__typename) {
    case 'ConfigurableProduct':
      // For Product Media
      // Default Product Will Be Data 0 Because There Is No Default Product Included
      productMediaProps.default_product = productData.data.products.items[0].variants[0];
      productMediaProps.configurable_options = productData.data.products.items[0].configurable_options;
      productMediaProps.variants = productData.data.products.items[0].variants;
      productMediaProps.__typename = __typename;

      // For Product Form
      productDetailFormProps.configurable_options = productData.data.products.items[0].configurable_options;
      productDetailFormProps.variants = productData.data.products.items[0].variants;
      break;
    default:
      productMediaProps = {}
      break;
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Sandika</title>
      </Head>

      {/* Body */}
      <Layout nomargin header={header} navigation={navigation} filter={filter} footer={footer}>
        <ProductMedia config={config.imageSlider} {...productMediaProps} />

        {/* Product Form */}
        <Block>
          <ProductForm field={{}} />
        </Block>
      </Layout>
    </>
  );
};

Product.propTypes = {
  productData: PropTypes.object,
  promoBannerImages: PropTypes.array
};

export default Product;
