import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import Banner from '@sandika_components/widget/Banner';
import CatalogProduct from '@sandika_components/widget/CatalogProduct';

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

export default Category;
