const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const webpack = require('webpack');
const path = require('path');

const nextConfig = {
    generateEtags: false,

    webpack: (config) => {
        config.resolve.alias['@components/core'] = path.join(__dirname, 'src/components/core');
        config.resolve.alias['@components/widget'] = path.join(__dirname, 'src/components/widget');
        config.resolve.alias['@components/commons'] = path.join(__dirname, 'src/components/commons');
        config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
        config.resolve.alias['@redux'] = path.join(__dirname, 'src/redux');
        config.resolve.alias['@media'] = path.join(__dirname, 'public/media');

        // JQUERY
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        );

        // SVG
        config.module.rules.push({
            test: /\.(svg)$/,
            use: {
                loader: '@svgr/webpack'
            }
        });

        // PNG JPG GIV
        config.module.rules.push({
            test: /\.(png|jpeg|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
        })

        return config;
    }
}


module.exports = withPlugins([
    [withSass, {
        poweredByHeader: false,
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: "sandika_[hash:base64:5]",
        }
    }],
    [withCSS, {
        cssModules: false,
    }]
], nextConfig);