import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './productmedia.module.scss';

const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const ProductMedia = ({ config, images }) => {
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
        <div className={'product__media__images'}>
          <Slider {...config}>
            {images.map((data, i) => {
              return <img src={data.src} alt={data.alt} key={i} />;
            })}
          </Slider>
        </div>
      </>
    );
  }

  return null;
};

export default ProductMedia;
