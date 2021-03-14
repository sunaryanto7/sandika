import Head from 'next/head';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import Banner from '@sandika_components/widget/Banner';
import ProductSlider from '@sandika_components/widget/ProductSlider';
import CatalogProduct from '@sandika_components/widget/CatalogProduct';
import BannerGrid from '@sandika_components/widget/BannerGrid';

const Home = ({ mainBannerImages, productData }) => {
  const { t } = useTranslation();
  const {
    store: {
      config: {
        slider: { config }
      },
      page: {
        home: {
          layout: { header, newsletter, navigation, footer }
        }
      }
    }
  } = useContext(AppContext);

  return (
    <>
      {/* Head */}
      <Head>
        <title>{t('common:app_name')}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meta description test on sandika.org"></meta>
      </Head>

      {/* Body */}
      <Layout
        nomargin
        header={header}
        navigation={navigation}
        footer={footer}
        newsletter={newsletter}
        style={'cms__index__index'}>
        <Block nopadding>
          <Banner config={config.imageSlider} images={mainBannerImages} />
        </Block>
        <Block title={t('common:app_name')} additional={'Lihat Semua'}>
          <ProductSlider config={config.productSlider} productData={productData} />
        </Block>
        <Block nopadding>
          <BannerGrid />
        </Block>
        <Block title={'Pilih Produk Yang Kamu Inginkan'} additional={'Lihat Semua'}>
          <CatalogProduct productData={productData} />
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
