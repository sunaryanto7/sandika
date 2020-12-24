import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import Banner from '@sandika_components/widget/Banner';
import ProductSlider from '@sandika_components/widget/ProductSlider';
import ProductGallery from './components/ProductGallery';
import ProductReview from './components/ProductReview';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import ProductVariant from './components/ProductVariant';

const Product = ({ relatedProductData, productData, promoBannerImages }) => {
  const {
    store: {
      config: {
        productMedia: { config: productMediaConfig },
        slider: { config: relatedProductConfig }
      },
      page: {
        product: {
          layout: { header, navigation, newsletter, footer }
        }
      }
    }
  } = useContext(AppContext);

  const { __typename } = productData.data.products.items[0];

  let productVariantProps = {};
  let productDetailFormProps = {};

  switch (__typename) {
    case 'ConfigurableProduct':
      // For Product Media
      // Default Product Will Be Data 0 Because There Is No Default Product Included
      productVariantProps.configurable_options =
        productData.data.products.items[0].configurable_options;
      productVariantProps.variants = productData.data.products.items[0].variants;
      productVariantProps.__typename = __typename;

      // For Product Form
      productDetailFormProps.configurable_options =
        productData.data.products.items[0].configurable_options;
      productDetailFormProps.variants = productData.data.products.items[0].variants;
      break;
    default:
      productVariantProps = {};
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
      <Layout nomargin header={header} navigation={navigation} footer={footer} newsletter={newsletter}>
        <ProductGallery config={productMediaConfig.imageSlider} {...productVariantProps} />

        <ProductDetail {...productVariantProps} />
        {productVariantProps.__typename === 'ConfigurableProduct' && (
          <ProductVariant
            options={productVariantProps.configurable_options}
            activeOptions={productVariantProps.variants[0].attributes}
          />
        )}

        <ProductReview review={relatedProductData} />

        <Block title={'Produk Yang Di Jual 77 Komp'} additional={'Lihat Semua'} padding15>
          <ProductSlider
            config={relatedProductConfig.productSlider}
            productData={relatedProductData}
          />
        </Block>

        <Block padding15>
          <Banner config={productMediaConfig.imageSlider} images={promoBannerImages} />
        </Block>

        {/* Product Form */}
        <Block nopadding>
          <ProductForm field={{}} />
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
