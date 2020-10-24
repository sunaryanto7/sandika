const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

const nextConfig = {
  // Trailing Slash Routes
  trailingSlash: false,

  // Webpack Config
  webpack: (config) => {
    // DECLARE ALIAS
    //  - COMPONENTS ALIAS
    //  - ENVIRONMENT ALIAS
    //  - MODULE AND HELPER ALIAS
    //  - SRC
    //  - MEDIA ALIAS
    config.resolve.alias['@sandika_components'] = path.join(__dirname, 'vendor/components');
    config.resolve.alias['@sandika_environment'] = path.join(__dirname, 'vendor/environment');
    config.resolve.alias['@sandika_modules'] = path.join(__dirname, 'vendor/modules');
    config.resolve.alias['@sandika_styles'] = path.join(__dirname, 'vendor/styles');
    config.resolve.alias['@sandika_src'] = path.join(__dirname, 'src');
    config.resolve.alias['@public/media'] = path.join(__dirname, 'public/media');

    // SVG
    config.module.rules.push({
      test: /\.(svg)$/,
      use: [{ loader: '@svgr/webpack' }]
    });

    // PNG JPG GIV
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
      use: [{ loader: 'file-loader' }, { loader: 'url-loader' }]
    });

    return config;
  }
};

module.exports = withPlugins([
  [withCSS, {
    cssModules: false
  }],
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: "sdk[hash:base64:7]"
    }
  }]
], nextConfig);
