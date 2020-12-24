import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import CatalogProduct from '@sandika_components/widget/CatalogProduct';
import Filter from '@sandika_src/category/components/Filter';
import * as theme from './style.module.scss';

const Category = ({ productData }) => {
  const styles = {
    'catalog__category__view': theme['catalog__category__view'],
    'catalog__product__grid': theme['catalog__product__grid']
  };
  const {
    store: {
      page: {
        category: {
          layout: { header, navigation, newsletter, footer }
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

      {/* Layout */}
      <Layout
        nomargin
        header={header}
        navigation={navigation}
        footer={footer}
        newsletter={newsletter}
        style={styles.catalog__category__view}
      >
        <Filter />
        <Block
          title={'Barang Yang Di Cari: Kemeja Pria'}
          additional={null}
          style={styles.catalog__product__grid}>
          <CatalogProduct productData={productData} />
        </Block>
      </Layout>

    </>
  );
};

Category.propTypes = {
  mainBannerImages: PropTypes.array,
  productData: PropTypes.array
};

export default Category;
