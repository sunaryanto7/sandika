import dynamic from 'next/dynamic';
import { useEffect } from "react";
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import theme from "./banner.module.scss";

const Slider = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const Banner = ({ config, images }) => {
    useEffect(() => {
        window.jQuery = $;
        window.$ = $;
        global.jQuery = $;

        return function cleanup() {
            window.jQuery = undefined;
            window.$ = undefined;
            global.jQuery = undefined;
        }
    }, []);

    return (
        <>
            <Slider {...config}>
                {images.map((data, i) => {
                    return (
                        <div className={theme.owl_images} key={i}>
                            <img src={data.src} alt={data.alt} />
                            <h3 className={theme.owl_descrition}>{data.alt}</h3>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
};

export default Banner;