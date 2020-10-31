import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import Block from '@sandika_components/core/Block';
import theme from './productgallery.module.scss';

const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const ProductGallery = ({ config, ...props }) => {
  const { configurable_options, variants, __typename } = { ...props };
  const [isMount, setIsMount] = useState(false);

  const [activeOptions, setActiveOptions] = useState(variants[0].attributes);
  const [activeProduct, setActiveProduct] = useState(variants[0].product);
  const [imageGallery, setImageGallery] = useState(activeProduct.media_gallery)
  const styles = {
    'product__media__gallery': theme['product__media__gallery']
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
        <Block style={styles.product__media__gallery}>
          <Slider {...config}>
            {imageGallery.map((data, i) => {
              return <img src={data.url} alt={data.alt} key={i} />;
            })}
          </Slider>
        </Block>
      </>
    );
  }

  return null;
};

export default ProductGallery;
