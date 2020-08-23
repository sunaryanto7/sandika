const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const webpack = require('webpack');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const path = require('path');

const localeSubpaths = {
    en: 'en',
    id: 'id'
}

const nextConfig = {
    // Translation (Language)
    rewrites: async () => nextI18NextRewrites(localeSubpaths),

    // Webpack Config
    webpack: (config) => {
        config.resolve.alias['@components/commons'] = path.join(__dirname, 'src/components/commons');
        config.resolve.alias['@components/core'] = path.join(__dirname, 'src/components/core');
        config.resolve.alias['@components/widget'] = path.join(__dirname, 'src/components/widget');

        config.resolve.alias['@i18n'] = path.join(__dirname, 'i18n');

        config.resolve.alias['@media'] = path.join(__dirname, 'public/media');
        config.resolve.alias['@redux'] = path.join(__dirname, 'src/redux');
        config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');

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