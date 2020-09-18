import PropTypes from 'prop-types';
import Layout from '@components/core/Layout';
import Block from '@components/core/Block';
import CatalogProduct from '@components/widget/CatalogProduct';

const Category = ({ isLoading, productData }) => {
  return (
    <Layout isLoading={isLoading} enableHeader enableNavigationHeader enableFilterNavigation>
      <Block title={'Barang Yang Di Cari: Kemeja Pria'} additional={null}>
        <CatalogProduct productData={productData} />
      </Block>
    </Layout>
  );
};

Category.propTypes = {
  isLoading: PropTypes.bool,
  productData: PropTypes.array
};

Category.getInitialProps = async () => {
  // GET PRODUCTS
  const productResponse = await fetch('https://fakestoreapi.com/products');
  const productJson = await productResponse.json();

  return {
    namespacesRequired: ['core'],
    productData: productJson
  };
};

export default Category;
