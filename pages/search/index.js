import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '@environment/i18n';

import Layout from '@components/core/Layout';
import { Media, MediaImage, MediaBody } from '@components/commons/Media';

const Search = ({
    isLoading,
    t,
    productData
}) => {
    const [productSearch, setProductSearch] = useState(productData);
    console.log(productSearch);
    return (
        <Layout
            headerTitle={t('core:Sandika')}
            isLoading={isLoading}
            enableSearchHeader
        >
            {productSearch.map((data, i) => {
                return (
                    <Media key={i}>
                        <MediaImage><img src={data.image} /></MediaImage>
                        <MediaBody>{data.title}</MediaBody>
                    </Media>
                );
            })}
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
