const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

const nextConfig = {
  // Trailing Slash Routes
  trailingSlash: false,

  // Webpack Config
  webpack: (config) => {
    // COMPONENTS ALIAS
    config.resolve.alias['@components/commons'] = path.join(__dirname, 'src/components/commons');
    config.resolve.alias['@components/core'] = path.join(__dirname, 'src/components/core');
    config.resolve.alias['@components/widget'] = path.join(__dirname, 'src/components/widget');

    // ENVIRONMENT ALIAS
    config.resolve.alias['@environment/context'] = path.join(__dirname, 'environment/context');
    config.resolve.alias['@environment/i18n'] = path.join(__dirname, 'environment/i18n');
    config.resolve.alias['@environment/styles'] = path.join(__dirname, 'environment/styles');
    config.resolve.alias['@environment/apollo'] = path.join(__dirname, 'environment/apollo');

    // HELPER ALIAS
    config.resolve.alias['@library/helper'] = path.join(__dirname, 'src/helper');

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
        { loader: 'url-loader' }
      ]
    });

    return config;
  }
};

module.exports = withPlugins(
  [
    [withSass],
    [withCSS, { cssModules: false }]
  ],
  nextConfig
);
