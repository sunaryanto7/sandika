import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';
import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';

const Cart = ({ productData }) => {
  const { config } = useContext(AppContext).ctx.config.slider;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.cart.layout;
  console.log(productData);
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
        <Block title={'Kerjanjang'} style={'cart'}>
          {productData.map((item, i) => {
            return (
              <Media key={i} style={'cart__item'}>
                <MediaBody>
                  <Media key={i}>
                    <MediaImage>
                      <img src={item.image} />
                    </MediaImage>
                    <MediaBody>{item.title}</MediaBody>
                  </Media>
                </MediaBody>
              </Media>
            );
          })}
        </Block>
        <Block title={'History Penjelajahan Kamu'}>

        </Block>
        <Block title={'Produk Yang Mungkin Kamu Sukai'}>

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
