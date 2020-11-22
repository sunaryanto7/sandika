import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';
import Layout from '@sandika_components/core/Layout';
import Banner from '@sandika_components/widget/Banner';
import Block from '@sandika_components/core/Block';
import ProductSlider from '@sandika_components/widget/ProductSlider';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

const Cart = ({ productData, promoBannerImages }) => {
  const { config } = useContext(AppContext).ctx.config.slider;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.cart.layout;
  const [{ items } = data, updateData] = useState({
    items: productData.map((data) => {
      return { active: true, qty: 1, ...data };
    })
  });

  // const { items } = data;

  const handleItemData = (i, value) => {
    const temp = items;
    temp[i] = value;
    updateData({
      items: temp
    });
  };

  return (
    <>
      <Head>
        <title>Sandika</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meta description test on sandika.org"></meta>
      </Head>
      <Layout header={header} navigation={navigation} filter={filter} footer={footer}>
        <Block title={'Keranjang'} style={'cart'}>
          {items.map((item, i) => {
            return <CartItem key={i} index={i} item={item} handleItemData={handleItemData} />;
          })}
        </Block>

        <CartSummary data={items} />

        <Block title={'Special Offer'} additional={'Lihat Semua'}>
          <ProductSlider config={config.productSlider} productData={productData} />
        </Block>
        <Block>
          <Banner config={config.imageSlider} images={promoBannerImages} />
        </Block>
      </Layout>
    </>
  );
};

Cart.propTypes = {
  mainBannerImages: PropTypes.array,
  productData: PropTypes.array,
  promoBannerImages: PropTypes.array
};

export default Cart;
