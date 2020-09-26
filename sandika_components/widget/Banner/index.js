import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './banner.module.scss';

const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const Banner = ({ config, images = [] }) => {
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
          {images.map((data, i) => {
            return (
              <div className={'owl_images'} key={i}>
                <img src={data.src} alt={data.alt} />
                <h2 className={'owl_description'}>{data.alt}</h2>
              </div>
            );
          })}
        </Slider>
      </>
    );
  }

  return null;
};

Banner.propTypes = {
  config: PropTypes.object,
  images: PropTypes.array
};

export default Banner;
