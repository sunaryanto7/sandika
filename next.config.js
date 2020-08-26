const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const webpack = require('webpack');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const path = require('path');

const localeSubpaths = {
    id: 'id',
    en: 'en'
}

const nextConfig = {
    // Translation (Language)
    rewrites: async () => nextI18NextRewrites(localeSubpaths),

    // Webpack Config
    webpack: (config) => {
        // COMPONENTS ALIAS
        config.resolve.alias['@components/commons'] = path.join(__dirname, 'src/components/commons');
        config.resolve.alias['@components/core'] = path.join(__dirname, 'src/components/core');
        config.resolve.alias['@components/widget'] = path.join(__dirname, 'src/components/widget');

        // ENVIRONMENT ALIAS
        config.resolve.alias['@environment/config'] = path.join(__dirname, 'environment/config');
        config.resolve.alias['@environment/i18n'] = path.join(__dirname, 'environment/i18n');
        config.resolve.alias['@environment/styles'] = path.join(__dirname, 'environment/styles');

        // REDUX ALIAS
        config.resolve.alias['@library/redux'] = path.join(__dirname, 'src/redux');

        // MEDIA ALIAS
        config.resolve.alias['@public/media'] = path.join(__dirname, 'public/media');

        // SVG
        config.module.rules.push({
            test: /\.(svg)$/,
            use: [{ loader: '@svgr/webpack' }]
        });

        // PNG JPG GIV
        config.module.rules.push({
            test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
            use: [
                { loader: 'file-loader' },
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        publicPath: "/_next/static/",
                        outputPath: "static/",
                        name: "[name].[ext]"
                    }
                },
            ]
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
        url: false
    }]
], nextConfig);