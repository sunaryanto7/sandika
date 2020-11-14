import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';

import Layout from '@sandika_components/core/Layout';
import Banner from '@sandika_components/widget/Banner';
import Block from '@sandika_components/core/Block';
import ProductSlider from '@sandika_components/widget/ProductSlider';
import Button from '@sandika_components/commons/Button';
import CartItem from './components/CartItem';

const Cart = ({ productData, promoBannerImages }) => {
  const { config } = useContext(AppContext).ctx.config.slider;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.cart.layout;
  return (
    <>
      {/* Head */}
      <Head>
        <title>Sandika</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meta description test on sandika.org"></meta>
      </Head>

      {/* Body */}
      <Layout header={header} navigation={navigation} filter={filter} footer={footer}>
        <Block title={'Keranjang'} style={'cart'}>
          {productData.map((item, i) => {
            if (i < 3) {
              return <CartItem key={i} index={i} item={item} />;
            }
          })}
        </Block>
        <Block>
          <Button fullWidth btnDanger>Go To Checkout</Button>
        </Block>
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
