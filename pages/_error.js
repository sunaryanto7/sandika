import { withTranslation } from '@i18n';
import Layout from '@components/core/Layout';

const Error = ({ t, statusCode }) => {
    return (
        <>
            <Layout
                headerTitle={t('core:Sandika')}
            >
                <p>
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
            </Layout>
        </>
    )
}

Error.getInitialProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return {
        namespacesRequired: ['core'],
        statusCode
    };
};

export default withTranslation()(Error);