import PropTypes from 'prop-types';
import { config } from '@environment/config';
import { withTranslation } from '@environment/i18n';

import Layout from '@components/core/Layout';
import Block from '@components/core/Block';
import Banner from '@components/widget/Banner';
import ProductSlider from '@components/widget/ProductSlider';
import CatalogProduct from '@components/widget/CatalogProduct';
import Category from '@components/widget/Category';

const Home = ({
    isLoading,
    t,
    configImageSlider,
    configProductSlider,
    mainBannerImages,
    productData,
    promoBannerImages
}) => {
    return (
        <Layout
            headerTitle={t('core:Sandika')}
            isLoading={isLoading}
            enableHeader
            enableBottomNavigation>
            <Block>
                <Banner config={configImageSlider} images={mainBannerImages} />
            </Block>
            <Block title={'Special Offer'} additional={'Lihat Semua'}>
                <ProductSlider config={configProductSlider} productData={productData} />
            </Block>
            <Block title={'Pilih Category'} additional={null}>
                <Category productCategories={productData} />
            </Block>
            <Block>
                <Banner config={configImageSlider} images={promoBannerImages} />
            </Block>
            <Block title={'Pilih Produk Yang Kamu Inginkan'} additional={'Lihat Semua'}>
                <CatalogProduct productData={productData} />
            </Block>
        </Layout>
    );
};

Home.propTypes = {
    isLoading: PropTypes.bool,
    t: PropTypes.func,
    configImageSlider: PropTypes.object,
    configProductSlider: PropTypes.object,
    mainBannerImages: PropTypes.array,
    productData: PropTypes.array,
    promoBannerImages: PropTypes.array
};

export async function getStaticProps() {
    // CAROUSEL COMPONENT
    const { configImageSlider, configProductSlider } = config;

    // GET PRODUCTS
    const productResponse = await fetch('https://fakestoreapi.com/products');
    const productJson = await productResponse.json();

    // IMAGE SLIDER DATA - (MAIN BANNER)
    const mainBannerImages = [
        {
            src:
                'https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png',
            alt: 'Independence Day'
        },
        {
            src:
                'https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png',
            alt: 'Special Offer'
        }
    ];

    // IMAGE SLIDER DATA - (PROMO BANNER)
    const promoBannerImages = [
        {
            src:
                'https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png',
            alt: 'Free Delivery'
        },
        {
            src:
                'https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png',
            alt: 'Coupon Saving'
        },
        {
            src:
                'https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png',
            alt: 'Gift Voucher'
        }
    ];

    return {
        props: {
            configImageSlider,
            configProductSlider,
            namespacesRequired: ['core'],
            mainBannerImages: mainBannerImages,
            promoBannerImages: promoBannerImages,
            productData: productJson
        }
    };
};

export default withTranslation()(Home);
