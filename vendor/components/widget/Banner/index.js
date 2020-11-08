import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import theme from './banner.module.scss';

const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const Banner = ({ config, images = [] }) => {
  const [isMount, setIsMount] = useState(false);

  const styles = {
    owl_images: theme['owl_images'],
    owl_description: theme['owl_description']
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

  if (isMount) {
    return (
      <>
        <Slider {...config}>
          {images.map((data, i) => {
            return (
              <div className={styles.owl_images} key={i}>
                <img src={data.src} alt={data.alt} />
                <h2 className={styles.owl_description}>{data.alt}</h2>
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
