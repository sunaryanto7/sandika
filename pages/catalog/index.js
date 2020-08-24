import Layout from '@components/core/Layout';
import Block from '@components/core/Block';
import Banner from '@components/widget/Banner';
import CatalogProduct from '@components/widget/CatalogProduct';
import { withTranslation } from '@i18n';

const Home = ({ t, mainBanner, productSlider }) => {
    const bannerOptions = { items: 1, center: true, nav: false, dots: false, autoplay: true, loop: true, stagePadding: 20, margin: 10 }

    return (
        <Layout
            headerTitle={t('core:Sandika')}
            enableBottomNavigation={false}
            enableFilterNavigation={true}
        >
            <Block>
                <Banner
                    config={bannerOptions}
                    images={mainBanner}
                />
            </Block>
            <Block
                title={"Pilih Produk Yang Kamu Inginkan"}
                additional={""}
            >
                <CatalogProduct
                    productData={productSlider}
                />
            </Block>
        </Layout>
    )
};

Home.getInitialProps = async () => {

    const productResponse = await fetch('https://fakestoreapi.com/products');
    const productJson = await productResponse.json();

    const mainBannerImages = [
        { src: "https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png", alt: "Independence Day" },
        { src: "https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png", alt: "Special Offer" },
    ];

    return {
        namespacesRequired: ['core'],
        mainBanner: mainBannerImages,
        productSlider: productJson
    };
};

export default withTranslation()(Home);