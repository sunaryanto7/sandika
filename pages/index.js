import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@environment/context/app_context';

import Layout from '@components/core/Layout';
import Block from '@components/core/Block';
import Banner from '@components/widget/Banner';
import ProductSlider from '@components/widget/ProductSlider';
import CatalogProduct from '@components/widget/CatalogProduct';
import Category from '@components/widget/Category';

const Home = ({ mainBannerImages, productData, promoBannerImages }) => {
  const { config } = useContext(AppContext).ctx.config.slider;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.home.layout;

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
        <Block>
          <Banner config={config.imageSlider} images={mainBannerImages} />
        </Block>
        <Block title={'Special Offer'} additional={'Lihat Semua'}>
          <ProductSlider config={config.productSlider} productData={productData} />
        </Block>
        <Block title={'Pilih Category'} additional={null}>
          <Category productCategories={productData} />
        </Block>
        <Block>
          <Banner config={config.imageSlider} images={promoBannerImages} />
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

Home.getInitialProps = async () => {
  // GET PRODUCTS
  const productResponse = await fetch('https://fakestoreapi.com/products');
  const productJson = await productResponse.json();

  // IMAGE SLIDER DATA - (MAIN BANNER)
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

  // IMAGE SLIDER DATA - (PROMO BANNER)
  const promoBannerImages = [
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png',
      alt: 'Free Delivery'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png',
      alt: 'Coupon Saving'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png',
      alt: 'Gift Voucher'
    }
  ];

  return {
    namespacesRequired: ['core'],
    mainBannerImages: mainBannerImages,
    promoBannerImages: promoBannerImages,
    productData: productJson
  };
};

export default Home;
