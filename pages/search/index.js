import Head from 'next/head';
import PropTypes from 'prop-types';

import { useState } from 'react';

import { Router } from '@environment/i18n';
import Layout from '@components/core/Layout';
import { Media, MediaImage, MediaBody } from '@components/commons/Media';
import Block from '@components/core/Block';


const Search = ({
    isLoading,
    productData
}) => {
    const [productSearch, setProductSearch] = useState(productData);

    return (
        <>
            <Head><title>Sandika - Cari Produk</title></Head>
            <Layout
                isLoading={isLoading}
                enableSearchHeader
            >
                <Block title={'Pencarian'} additional={null}>
                    <Media onClick={() => { Router.push('/category') }}><MediaBody>Payung</MediaBody></Media>
                    <Media onClick={() => { Router.push('/category') }}><MediaBody>Keripik Singkong</MediaBody></Media>
                    <Media onClick={() => { Router.push('/category') }}><MediaBody>Kertas Manila</MediaBody></Media>
                </Block>

                <Block title={'Pencarian Terakhir'} additional={null}>
                    {productSearch.map((data, i) => {
                        if (i < 5) {
                            return (
                                <Media
                                    key={i}
                                    onClick={() => { Router.push('/category') }}>
                                    <MediaImage><img src={data.image} /></MediaImage>
                                    <MediaBody>{data.title}</MediaBody>
                                </Media>
                            );
                        }
                        return;
                    })}
                </Block>
            </Layout>
        </>
    );
};

Search.propTypes = {
    isLoading: PropTypes.bool,
    productData: PropTypes.array,
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

export default Search;
