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
    config.resolve.alias['@sandika_components'] = path.join(__dirname, 'sandika_components/');

    // ENVIRONMENT ALIAS
    config.resolve.alias['@sandika_environment'] = path.join(__dirname, 'sandika_environment/');

    // MODULE AND HELPER ALIAS
    config.resolve.alias['@sandika_modules'] = path.join(__dirname, 'sandika_modules/');

    // SRC
    config.resolve.alias['@sandika_src'] = path.join(__dirname, 'sandika_src/');

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
    [withSass], [withCSS]
  ],
  nextConfig
);
