import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import Banner from '@sandika_components/widget/Banner';
import ProductSlider from '@sandika_components/widget/ProductSlider';
import ProductMedia from './components/ProductMedia';
import ProductForm from './components/ProductForm';

const Product = ({ relatedProductData, productData, promoBannerImages }) => {
  const productMediaConfig = useContext(AppContext).ctx.config.productMedia.config;
  const relatedProductConfig = useContext(AppContext).ctx.config.slider.config;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.product.layout;
  const { __typename } = productData.data.products.items[0];

  let productMediaProps = {};
  let productDetailFormProps = {};

  switch (__typename) {
    case 'ConfigurableProduct':
      // For Product Media
      // Default Product Will Be Data 0 Because There Is No Default Product Included
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meta description test on sandika.org"></meta>
      </Head>

      {/* Body */}
      <Layout nomargin header={header} navigation={navigation} filter={filter} footer={footer}>
        <ProductMedia config={productMediaConfig.imageSlider} {...productMediaProps} />

        {/* Product Form */}
        <Block>
          <ProductForm field={{}} />
        </Block>

        <Block title={'Related Product'} additional={'Lihat Semua'} style={'product__related__product'}>
          <ProductSlider config={relatedProductConfig.productSlider} productData={relatedProductData} />
        </Block>

        <Block style={'product__promo__banner'}>
          <Banner config={productMediaConfig.imageSlider} images={promoBannerImages} />
        </Block>
      </Layout>
    </>
  );
};

Product.propTypes = {
  productData: PropTypes.object,
  relatedProductData: PropTypes.array,
  promoBannerImages: PropTypes.array
};

export default Product;
