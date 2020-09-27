import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import Block from '@sandika_components/core/Block';
import { Form, FormRow, FormGroup, Radio } from '@sandika_components/commons/Form';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './productmedia.module.scss';

const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const ProductMediaOptions = ({ options }) => {
  return (
    <>
      <Block style={'product__media__options'}>
        <Form>
          {options.map((swatchType, i) => {
            return (
              <FormRow key={i}>
                <FormGroup title={swatchType.label}>
                  {swatchType.values.map((swatchValues, j) => {
                    return (
                      <Radio
                        type={'radio'}
                        label={swatchValues.label}
                        name={swatchType.label}
                        id={swatchValues.label}
                        value={swatchType.label}
                        key={j} />
                    )
                  })}
                </FormGroup>
              </FormRow>
            )
          })}
        </Form>
      </Block>
    </>
  )
}

const ProductMedia = ({ config, ...props }) => {
  const { default_product, configurable_options, variants, __typename } = { ...props };

  const [isMount, setIsMount] = useState(false);
  const [imageGallery, setImageGallery] = useState(default_product.product.media_gallery)
  const [product, setProduct] = useState(default_product.product);

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
  console.log(default_product)
  if (isMount) {
    return (
      <>
        <Block style={'product__media__images'}>
          <Slider {...config}>
            {imageGallery.map((data, i) => {
              return <img src={data.url} alt={data.alt} key={i} />;
            })}
          </Slider>
        </Block>

        <Block style={'product__media__description'}>
          <div className={'product__sku'}>
            <h4>{`#${product.sku}`}</h4>
          </div>
          <div className={'product__name'}>
            <h1>{product.name}</h1>
          </div>
          <div className={'product__price'}>
            <div className={'product__price__regular'}><h5>{`USD ${product.price_range.maximum_price.regular_price.value}`}</h5></div>
            <div className={'product__price__final'}><h4>{`USD ${product.price_range.maximum_price.final_price.value}`}</h4></div>
          </div>
        </Block>

        <Block style={'product__desription'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </Block>

        {__typename === 'ConfigurableProduct' ? <ProductMediaOptions options={configurable_options} /> : null}

      </>
    );
  }

  return null;
};

export default ProductMedia;
