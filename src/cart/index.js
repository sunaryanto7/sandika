import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { AppContext } from '@sandika_environment/context';
import Layout from '@sandika_components/core/Layout';
import Banner from '@sandika_components/widget/Banner';
import Block from '@sandika_components/core/Block';
import ProductSlider from '@sandika_components/widget/ProductSlider';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

const Cart = ({ productData, promoBannerImages }) => {
  const {
    store: {
      config: {
        slider: { config }
      },
      page: {
        cart: {
          layout: { header, navigation, newsletter, footer }
        }
      }
    }
  } = useContext(AppContext);

  const [{ items }, updateData] = useState({
    items: productData.map((data) => {
      return { selected: true, qty: 1, ...data };
    })
  });

  const handleQtyData = (i, value) => {
    let temp = items;
    temp[i] = value;
    updateData({
      items: temp
    });
  };

  const handleSelectData = (i) => {
    let temp = items;
    temp[i].selected = !temp[i].selected;
    updateData({
      items: temp
    });
  };

  return (
    <>
      {/* Head */}
      <Head>
        <title>Sandika</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meta description test on sandika.org"></meta>
      </Head>

      {/* Layout */}
      <Layout header={header} navigation={navigation} footer={footer} newsletter={newsletter}>
        <Block nopadding title={'Keranjang'} style={'cart'}>
          {items.map((item, i) => {
            return (
              <CartItem
                key={i}
                index={i}
                item={item}
                handleQtyData={handleQtyData}
                handleSelectData={handleSelectData}
              />
            );
          })}
        </Block>

        <Block nopadding>
          <CartSummary data={items} />
        </Block>

        <Block nopadding title={'Special Offer'} additional={'Lihat Semua'}>
          <ProductSlider config={config.productSlider} productData={productData} />
        </Block>

        <Block nopadding>
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
