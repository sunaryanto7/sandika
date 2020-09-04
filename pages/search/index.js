import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '@environment/i18n';

import Layout from '@components/core/Layout';
import { Media, MediaImage, MediaBody } from '@components/commons/Media';
import Block from '@components/core/Block';


const Search = ({
    isLoading,
    t,
    productData
}) => {
    const [productSearch, setProductSearch] = useState(productData);

    return (
        <Layout
            headerTitle={t('core:Sandika')}
            isLoading={isLoading}
            enableSearchHeader
        >
            <Block title={'Pencarian'} additional={null}>
                <Media><MediaBody>Payung</MediaBody></Media>
                <Media><MediaBody>Keripik Singkong</MediaBody></Media>
                <Media><MediaBody>Kertas Manila</MediaBody></Media>
            </Block>

            <Block title={'Pencarian Terakhir'} additional={null}>
                {productSearch.map((data, i) => {
                    if (i < 5) {
                        return (
                            <Media key={i}>
                                <MediaImage><img src={data.image} /></MediaImage>
                                <MediaBody>{data.title}</MediaBody>
                            </Media>
                        );
                    }
                    return;
                })}
            </Block>
        </Layout>
    );
};

Search.propTypes = {
    isLoading: PropTypes.bool,
    t: PropTypes.func,
    configImageSlider: PropTypes.object,
    configProductSlider: PropTypes.object,
    mainBannerImages: PropTypes.array,
    productData: PropTypes.array,
    promoBannerImages: PropTypes.array
};

Search.getInitialProps = async () => {
    // GET PRODUCTS
    const productResponse = await fetch('https://fakestoreapi.com/products');
    const productJson = await productResponse.json();

    return {
        namespacesRequired: ['core'],
        productData: productJson
    };
};

export default withTranslation()(Search);
