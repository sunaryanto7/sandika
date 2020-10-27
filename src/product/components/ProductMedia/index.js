import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import Block from '@sandika_components/core/Block';
import ProductMediaOptions from '@sandika_src/product/components/ProductMediaOptions';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import theme from './productmedia.module.scss';

const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const ProductMedia = ({ config, ...props }) => {
  const { configurable_options, variants, __typename } = { ...props };
  const [isMount, setIsMount] = useState(false);

  const [activeOptions, setActiveOptions] = useState(variants[0].attributes);
  const [activeProduct, setActiveProduct] = useState(variants[0].product);
  const [imageGallery, setImageGallery] = useState(activeProduct.media_gallery)
  const styles = {
    'product__media__images': theme['product__media__images'],
    'product__media__description': theme['product__media__description'],
    'product__sku': theme['product__sku'],
    'product__name': theme['product__name'],
    'product__price': theme['product__price'],
    'product__price__regular': theme['product__price__regular'],
    'product__price__final': theme['product__price__final'],
    'product__desription': theme['product__desription']
  };

  useEffect(() => {
    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;
    setIsMount(true);

    return () => {
      window.jQuery = undefined;
      window.$ = undefined;
      global.jQuery = undefined;
      setIsMount(false);
    };
  }, []);

  const handleOptionsChange = () => {
    return null
  };

  if (isMount) {
    return (
      <>
        <Block style={styles.product__media__images}>
          <Slider {...config}>
            {imageGallery.map((data, i) => {
              return <img src={data.url} alt={data.alt} key={i} />;
            })}
          </Slider>
        </Block>

        <Block style={styles.product__media__description}>
          <div className={styles.product__sku}>
            <h4>{`# 0986826348`}</h4>
          </div>
          <div className={styles.product__price}>
            <div className={styles.product__price__final}>
              <h1>{`Rp ${activeProduct.price_range.maximum_price.final_price.value}.000,-`}</h1>
            </div>
            <div className={styles.product__price__regular}>
              <small>60%</small>
              <h5>{`Rp ${activeProduct.price_range.maximum_price.regular_price.value}.000,-`}</h5>
            </div>
          </div>
          <div className={styles.product__name}>
            <h1>{activeProduct.name}</h1>
          </div>
        </Block>

        <Block style={styles.product__desription}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Block>

        {__typename === 'ConfigurableProduct' ? <ProductMediaOptions options={configurable_options} activeOptions={activeOptions} /> : null}
      </>
    );
  }

  return null;
};

export default ProductMedia;
