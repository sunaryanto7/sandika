import Layout from '@components/core/Layout';
import Block from '@components/core/Block';
import Banner from '@components/widget/Banner';
import ProductSlider from "@components/widget/ProductSlider";
import CatalogProduct from '@components/widget/CatalogProduct';
import Tabs from "@components/widget/Tabs";

const Home = ({ mainBanner, productSlider, promoBanner }) => {
    const bannerOptions = { items: 1, center: true, nav: false, dots: false, autoplay: true, loop: true, stagePadding: 20, margin: 10 }
    const productSliderOptions = { items: 2, center: false, nav: false, dots: false, autoplay: false, margin: 15 }

    return (
        <Layout >
            <Block>
                <Banner
                    config={bannerOptions}
                    images={mainBanner}
                />
            </Block>
            <Block
                title={"Special Offer"}
                additional={"Lihat Semua"}
            >
                <ProductSlider
                    config={productSliderOptions}
                    productData={productSlider}
                />
            </Block>
            <Block>
                <Banner
                    config={bannerOptions}
                    images={promoBanner}
                />
            </Block>
            <Block
                title={"Pilih Kategori"}
                additional={""}
            >
                <Tabs>
                    <div dataLabel={"Men"}>
                        <CatalogProduct
                            productData={productSlider}
                        />
                    </div>
                    <div dataLabel={"Women"}>
                        <CatalogProduct
                            productData={productSlider}
                        />
                    </div>
                </Tabs>
            </Block>
        </Layout>
    )
};

Home.getInitialProps = async (ctx) => {

    const productResponse = await fetch('https://fakestoreapi.com/products');
    const productJson = await productResponse.json();

    const mainBannerImages = [
        { src: "https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png", alt: "Independence Day" },
        { src: "https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png", alt: "Special Offer" },
    ];

    const promoBannerImages = [
        { src: "https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png", alt: "Free Delivery" },
        { src: "https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png", alt: "Coupon Saving" },
        { src: "https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png", alt: "Gift Voucher" }
    ];

    return {
        mainBanner: mainBannerImages,
        promoBanner: promoBannerImages,
        productSlider: productJson
    };
};

export default Home;