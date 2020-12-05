import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import Banner from '@sandika_components/widget/Banner';
import ProductSlider from '@sandika_components/widget/ProductSlider';
import CatalogProduct from '@sandika_components/widget/CatalogProduct';
import Category from '@sandika_components/widget/Category';

const Home = ({ mainBannerImages, productData, promoBannerImages }) => {

  const {
    store: {
      config: {
        slider: {
          config
        }
      },
      page: {
        home: {
          layout: {
            header,
            navigation,
            footer
          }
        }
      }
    }
  } = useContext(AppContext);

  return (
    <>
      {/* Head */}
      <Head>
        <title>Sandika</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meta description test on sandika.org"></meta>
      </Head>

      {/* Body */}
      <Layout
        header={header}
        navigation={navigation}
        footer={footer}>
        <Block>
          <Banner
            config={config.imageSlider}
            images={mainBannerImages} />
        </Block>
        <Block
          title={'Special Offer'}
          additional={'Lihat Semua'}>
          <ProductSlider
            config={config.productSlider}
            productData={productData} />
        </Block>
        <Block
          title={'Pilih Category'}
          additional={null}>
          <Category
            productCategories={productData} />
        </Block>
        <Block>
          <Banner
            config={config.imageSlider}
            images={promoBannerImages} />
        </Block>
        <Block
          title={'Pilih Produk Yang Kamu Inginkan'}
          additional={'Lihat Semua'}>
          <CatalogProduct
            productData={productData} />
        </Block>
      </Layout>
    </>
  );
};

Home.propTypes = {
  mainBannerImages: PropTypes.array,
  productData: PropTypes.array,
  promoBannerImages: PropTypes.array
};

export default Home;
