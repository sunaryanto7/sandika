import PropTypes from 'prop-types';
import { withTranslation } from '@environment/i18n';

import Layout from '@components/core/Layout';

const Search = ({
    isLoading,
    t,
}) => {
    return (
        <Layout
            headerTitle={t('core:Sandika')}
            isLoading={isLoading}
            enableSearchHeader
            enableFilterNavigation
        >

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
    return {
        namespacesRequired: ['core'],
    };
};

export default withTranslation()(Search);
