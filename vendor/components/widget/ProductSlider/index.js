import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ProductItem from '@sandika_components/core/ProductItem';
import $ from 'jquery';

const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const ProductSlider = ({ config, productData }) => {
  const [isMount, setIsMount] = useState(false);

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

  if (isMount) {
    return (
      <>
        <Slider {...config}>
          {productData.map((data, i) => {
            return (
              <ProductItem
                src={data.image}
                alt={data.title}
                productName={data.title}
                productBrand={data.category}
                productFinalPrice={Math.round(data.price)}
                productOldPrice={Math.round(data.price + 20)} //Example
                key={i}
              />
            );
          })}
        </Slider>
      </>
    );
  }
  return null;
};

ProductSlider.defaultProps = {
  config: {},
  productData: []
};

ProductSlider.propTypes = {
  config: PropTypes.object,
  productData: PropTypes.array
};

export default React.memo(ProductSlider);
