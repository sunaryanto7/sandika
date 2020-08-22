import Layout from '@components/core/Layout';
import Block from '@components/core/Block';
import Banner from '@components/widget/Banner';
import ProductSlider from "@components/widget/ProductSlider";
import CatalogProduct from '@components/widget/CatalogProduct';
import Tabs from "@components/widget/Tabs";

const Home = ({ mainBanner, productSlider }) => {
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

    const bannerImages = [
        { src: "https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png", alt: "Independence Day" },
        { src: "https://shop.redq.now.sh/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png", alt: "Special Offer" },
    ];

    return {
        mainBanner: bannerImages,
        productSlider: productJson
    };
};

export default Home;