import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ProductItem from '@components/core/ProductItem';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import theme from './productslider.module.scss';

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

        return function cleanup() {
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
                                productFinalPrice={data.price}
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

ProductSlider.propTypes = {
    config: PropTypes.object,
    productData: PropTypes.array
};

export default ProductSlider;
